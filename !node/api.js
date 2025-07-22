const { parse, print, types, visit } = require('recast');
const b = types.builders;
const n = types.namedTypes;

const THIS_ID = b.identifier('this');
const ASYNC_GEN_ID = b.identifier('__ASYNC_GENERATOR$$');
const SYMBOL_ASYNC_ITERATOR = b.memberExpression(b.identifier('Symbol'), b.identifier('asyncIterator'), false);
const VALUE_ID = b.identifier('value');
const DONE_ID = b.identifier('done');
const DONE_OBF_ID = b.identifier('__DONE$$');
const NEXT_ID = b.identifier('next');
const createTempVar = (function() {
  let id = 0;
  return () => b.identifier(`__TEMP_VARIABLE_${(id++).toString().padStart(5, '0')}$$`);
})();
const YIELD_RETURN_ID = b.identifier('__RETURN$$');
const YIELD_VALUE_ID = b.identifier('__VALUE$$');
/**
 * @param {import('ast-types/gen/kinds').BlockStatementKind} body
 * @returns {import('ast-types/gen/kinds').BlockStatementKind}
 */
function transformBody(body) {
  // generator functions, when the last statement is a yield will yield the value with done = false then next .next() value is undefined and done = true. but if it returns a value early, value will be populated and done = true, this forces behavior to be consistent.
  // body.body?.push(b.returnStatement(null));
  return b.blockStatement([
    b.returnStatement(b.callExpression(
      b.identifier('__PROMISEV3_GENERATOR_TO_PROMISE$$'),
      [b.functionExpression(
        null,
        [],
        body,
        true,
        true
      ), THIS_ID]
    ))
  ]);
}
/**
 * @param {string} str
 * @returns {string}
 */
module.exports = function transform(str) {
  /** @type {import('ast-types').ASTNode} */
  const ast = parse(str, {
    // esprima keeps comments in but acorn supports newer ecma shit
    // line numbers are already fucked anyway
    parser: {
      parse(source) {
        return require('acorn').parse(source, {
          ecmaVersion: 'latest'
        });
      }
    }
  });

  visit(ast, {
    visitFunctionDeclaration(path) {
      if (path.node.async) {
        if (path.node.generator) throw 'unfortunately go fuck yourself. no async generators. feel free to implement your own *[Symbol.asyncIterator]() {}. for await of works though';
        path.node.async = false;
        path.node.body = transformBody(path.node.body);
      }

      this.traverse(path);
    },
    visitFunctionExpression(path) {
      if (path.node.async) {
        path.node.async = false;
        path.node.body = transformBody(path.node.body);
      }

      this.traverse(path);
    },
    visitArrowFunctionExpression(path) {
      if (path.node.async) {
        path.node.async = false;
        const isBodyless = !n.BlockStatement.check(path.node.body);
        path.node.body = transformBody(isBodyless ? b.blockStatement([b.expressionStatement(path.node.body)]) : path.node.body);
        if (isBodyless) path.node.body = path.node.body.body[0].argument;
      }

      this.traverse(path);
    },
    visitAwaitExpression(path) {
      const tempVar = createTempVar();

      let root = path;
      while (!n.BlockStatement.check(root.parentPath.node)) root = root.parentPath;
      const declaration = b.variableDeclaration('let', [b.variableDeclarator(tempVar, b.yieldExpression(path.node.argument, false))]);
      declaration.comments = [b.commentBlock(print(path).code, true)];
      root.insertBefore(declaration);
      path.replace(tempVar);

      this.traverse(root.parentPath);
    },
    visitForOfStatement(path) {
      if (path.value.await) {
        const poly = b.blockStatement([
          b.variableDeclaration(
            'const',
            [b.variableDeclarator(
              ASYNC_GEN_ID,
              b.callExpression(b.memberExpression(path.value.right, SYMBOL_ASYNC_ITERATOR, true), [])
            )]
          ),
          b.whileStatement(
            b.literal(true),
            b.blockStatement([
              b.variableDeclaration(
                path.value.left.kind,
                [b.variableDeclarator(b.objectPattern([
                  b.property('init', VALUE_ID, path.value.left.declarations[0].id),
                  b.property('init', DONE_ID, DONE_OBF_ID)
                ]), b.yieldExpression(b.callExpression(b.memberExpression(ASYNC_GEN_ID, NEXT_ID, false), []), false))]
              ),
              b.ifStatement(
                DONE_OBF_ID,
                b.breakStatement(null),
                null
              ),
              ...path.value.body.body
            ]))
        ]);
        const isLabeled = n.LabeledStatement.check(path.parentPath.value);
        const root = isLabeled ? path.parentPath : path;

        poly.comments = [b.commentBlock(print(root).code, true)];
        if (isLabeled) poly.body[1] = b.labeledStatement(path.parentPath.value.label, poly.body[1]);
        root.replace(poly);

        return void this.traverse(root);
      }

      this.traverse(path);
    },
    visitForAwaitStatement(path) {
      // lmao so for await of actually is visitForOfStatement

      this.traverse(path);
    },
    visitDeclaration(path) {
      if ((path.scope.path.value.async || path.scope.path.value.generator) && path.value.kind === 'const') path.value.kind = 'let';

      this.traverse(path);
    },
    /*
    because
    > (function*() { return 1; return 2; })().value
    // 2
    */
    visitReturnStatement(path) {
      if (path.scope.path.value.generator) {
        path.replace(b.expressionStatement(b.yieldExpression(
          b.objectExpression([
            b.property('init', YIELD_RETURN_ID, b.literal(true)),
            b.property('init', YIELD_VALUE_ID, path.value.argument)
          ])
        )));
      }

      this.traverse(path);
    }
  });

  return print(ast).code;
}