const { parse, print, types, visit } = require('recast');
const b = types.builders;

const THIS_ID = b.identifier('this');
const ASYNC_GEN_ID = b.identifier('__ASYNC_GENERATOR$$');
const SYMBOL_ASYNC_ITERATOR = b.memberExpression(b.identifier('Symbol'), b.identifier('asyncIterator'), false);
const VALUE_ID = b.identifier('value');
const DONE_ID = b.identifier('done');
const DONE_OBF_ID = b.identifier('__DONE$$');
const NEXT_ID = b.identifier('next');
/**
 * @param {import('ast-types/gen/kinds').BlockStatementKind} body
 * @returns {import('ast-types/gen/kinds').BlockStatementKind}
 */
function transformBody(body) {
  // generator functions, when the last statement is a yield will yield the value with done = false then next .next() value is undefined and done = true. but if it returns a value early, value will be populated and done = true, this forces behavior to be consistent.
  body.body?.push(b.returnStatement(null));
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
        const isBodyless = path.node.body.type !== 'BlockStatement';
        path.node.body = transformBody(isBodyless ? b.blockStatement([b.expressionStatement(path.node.body)]) : path.node.body);
        if (isBodyless) path.node.body = path.node.body.body[0].argument;
      }

      this.traverse(path);
    },
    visitAwaitExpression(path) {
      path.replace(b.parenthesizedExpression(b.yieldExpression(path.node.argument, false)));

      this.traverse(path);
    },
    visitForOfStatement(path) {
      if (path.value.await) {
        path.replace(b.blockStatement([
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
        ]));
      }

      this.traverse(path);
    },
    visitForAwaitStatement(path) {
      // lmao so for await of actually is visitForOfStatement

      this.traverse(path);
    }
  });

  return print(ast).code;
}