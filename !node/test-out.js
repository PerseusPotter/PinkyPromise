function delay(ms, value, shouldReject = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      shouldReject ? reject(new Error("Rejected: " + value)) : resolve(value);
    }, ms);
  });
}

function edge() {
  return __PROMISEV3_GENERATOR_TO_PROMISE$$(function*() {
    yield delay(1);
    const test = 1;

    return yield (() => {
      return __PROMISEV3_GENERATOR_TO_PROMISE$$(function*() {
        const v1 = yield delay(1, 1);
        const v2 = delay(1, 1);
        const v3 = (1, 1);

        if (v3 === v2)
          return false;

        const v4 = (1, yield delay(1, 1));
        const v5 = yield delay(yield delay(1, 1), yield delay(1, 1));

        if (v5) {
          for (let i = 0; i < 10; i++) {
            yield delay(1);

            function cringe() {
              return __PROMISEV3_GENERATOR_TO_PROMISE$$(function*() {
                yield delay(1);
                return;
              }, this);
            }

            cringe();

            for (let j = 0; j < 10; j++) {
              if (i === j)
                yield delay(1);
            }
          }

          return true;
        }

        const f1 = () => __PROMISEV3_GENERATOR_TO_PROMISE$$(function*() {
          yield delay(1, 1);
          return;
        }, this);

        return;
      }, this);
    })();

    return;
  }, this);
}

function testBasicAwait() {
  return __PROMISEV3_GENERATOR_TO_PROMISE$$(function*() {
    function getValue() {
      return __PROMISEV3_GENERATOR_TO_PROMISE$$(function*() {
        return 42;
        return;
      }, this);
    }

    const val = yield getValue();
    console.assert(val === 42, "❌ Basic await failed");
    return;
  }, this);
}

function testErrorHandling() {
  return __PROMISEV3_GENERATOR_TO_PROMISE$$(function*() {
    function throwError() {
      return __PROMISEV3_GENERATOR_TO_PROMISE$$(function*() {
        throw new Error("Boom");
        return;
      }, this);
    }

    try {
      yield throwError();
      console.assert(false, "❌ Error was not thrown");
    } catch (e) {
      console.assert(e.message === "Boom", "❌ Error message mismatch");
    }

    return;
  }, this);
}

function testSequentialExecution() {
  return __PROMISEV3_GENERATOR_TO_PROMISE$$(function*() {
    const start = Date.now();
    const a = yield delay(100, "a");
    const b = yield delay(100, "b");
    const duration = Date.now() - start;
    console.assert(duration >= 200, "❌ Sequential execution failed");
    console.assert(a === "a" && b === "b", "❌ Sequential result mismatch");
    return;
  }, this);
}

function testParallelExecution() {
  return __PROMISEV3_GENERATOR_TO_PROMISE$$(function*() {
    const start = Date.now();
    const [a, b] = yield Promise.all([delay(100, "a"), delay(100, "b")]);
    const duration = Date.now() - start;
    console.assert(duration < 150, "❌ Parallel execution too slow");
    console.assert(a === "a" && b === "b", "❌ Parallel result mismatch");
    return;
  }, this);
}

function testAwaitPrimitives() {
  return __PROMISEV3_GENERATOR_TO_PROMISE$$(function*() {
    const a = yield 5;
    const b = yield "hello";
    const c = yield true;
    console.assert(a === 5 && b === "hello" && c === true, "❌ Awaiting primitives failed");
    return;
  }, this);
}

const asyncRange = n => ({
  [Symbol.asyncIterator]() {
    let i = 0;

    return {
      next() {
        return __PROMISEV3_GENERATOR_TO_PROMISE$$(function*() {
          if (i >= n) {
            return {
              done: true
            };
          }

          yield delay(10);

          return {
            value: i++,
            done: false
          };

          return;
        }, this);
      }
    };
  }
});

function testAsyncIterator() {
  return __PROMISEV3_GENERATOR_TO_PROMISE$$(function*() {
    const results = [];

    {
      const __ASYNC_GENERATOR$$ = asyncRange(3)[Symbol.asyncIterator]();

      while (true) {
        const {
          value: val,
          done: __DONE$$
        } = yield __ASYNC_GENERATOR$$.next();

        if (__DONE$$)
          break;

        results.push(val);
      }
    }

    console.assert(JSON.stringify(results) === "[0,1,2]", "❌ Async iterator failed");
    return;
  }, this);
}

function testNestedAsync() {
  return __PROMISEV3_GENERATOR_TO_PROMISE$$(function*() {
    function inner() {
      return __PROMISEV3_GENERATOR_TO_PROMISE$$(function*() {
        return yield delay(10, "nested");
        return;
      }, this);
    }

    function outer() {
      return __PROMISEV3_GENERATOR_TO_PROMISE$$(function*() {
        return yield inner();
        return;
      }, this);
    }

    const result = yield outer();
    console.assert(result === "nested", "❌ Nested async failed");
    return;
  }, this);
}

(function runAllTests() {
  return __PROMISEV3_GENERATOR_TO_PROMISE$$(function*() {
    yield edge();
    console.log("Running async/await tests...");
    yield testBasicAwait();
    yield testErrorHandling();
    yield testSequentialExecution();
    yield testParallelExecution();
    yield testAwaitPrimitives();
    yield testAsyncIterator();
    yield testNestedAsync();
    console.log("✅ All async/await tests passed!");
    return;
  }, this);
})();

function __PROMISEV3_GENERATOR_TO_PROMISE$$(func, that) {
  return new Promise((resolve, reject) => {
    const gen = func.call(that);
    const catchMe = err => {
      try {
        gen.throw(err);
        return true;
      } catch (newErr) {
        reject(newErr);
        return false;
      }
    }
    function loop(value) {
      try {
        const iter = gen.next(value);
        if (iter.done) resolve(iter.value);
        else Promise.resolve(iter.value).then(loop).catch(e => catchMe(e) && loop());
      } catch (e) {
        catchMe(e);
      }
    }
    loop();
  });
}