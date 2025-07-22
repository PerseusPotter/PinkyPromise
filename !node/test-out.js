function delay(ms, value, shouldReject = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      shouldReject ? reject(new Error("Rejected: " + value)) : resolve(value);
    }, ms);
  });
}

function edge() {
  return __PROMISEV3_GENERATOR_TO_PROMISE$$(function*() {
    /*await delay(1)*/
    let __TEMP_VARIABLE_00000$$ = yield delay(1);

    __TEMP_VARIABLE_00000$$;
    let test = 1;

    /*await (async () => {
        const v1 = await delay(1, 1);
        const v2 = delay(1, 1);
        const v3 = (1, 1);

        if (v3 === v2)
            return false;

        const v4 = (1, await delay(1, 1));
        const v5 = await delay(await delay(1, 1), await delay(1, 1));

        if (v5) {
            for (let i = 0; i < 10; i++) {
                await delay(1);

                async function cringe() {
                    await delay(1);
                }

                cringe();

                for (let j = 0; j < 10; j++) {
                    if (i === j)
                        await delay(1);
                }
            }

            return true;
        }

        const f1 = async () => await delay(1, 1);
    })()*/
    let __TEMP_VARIABLE_00001$$ = yield (() => {
      return __PROMISEV3_GENERATOR_TO_PROMISE$$(function*() {
        /*await delay(1, 1)*/
        let __TEMP_VARIABLE_00002$$ = yield delay(1, 1);

        let v1 = __TEMP_VARIABLE_00002$$;
        let v2 = delay(1, 1);
        let v3 = (1, 1);

        if (v3 === v2) yield {
          __RETURN$$: true,
          __VALUE$$: false
        };

        /*await delay(1, 1)*/
        let __TEMP_VARIABLE_00003$$ = yield delay(1, 1);

        let v4 = (1, __TEMP_VARIABLE_00003$$);

        /*await delay(1, 1)*/
        let __TEMP_VARIABLE_00005$$ = yield delay(1, 1);

        /*await delay(1, 1)*/
        let __TEMP_VARIABLE_00006$$ = yield delay(1, 1);

        /*await delay(await delay(1, 1), await delay(1, 1))*/
        let __TEMP_VARIABLE_00004$$ = yield delay(__TEMP_VARIABLE_00005$$, __TEMP_VARIABLE_00006$$);

        let v5 = __TEMP_VARIABLE_00004$$;

        if (v5) {
          for (let i = 0; i < 10; i++) {
            /*await delay(1)*/
            let __TEMP_VARIABLE_00007$$ = yield delay(1);

            __TEMP_VARIABLE_00007$$;

            function cringe() {
              return __PROMISEV3_GENERATOR_TO_PROMISE$$(function*() {
                /*await delay(1)*/
                let __TEMP_VARIABLE_00008$$ = yield delay(1);

                __TEMP_VARIABLE_00008$$;
              }, this);
            }

            cringe();

            for (let j = 0; j < 10; j++) {
              /*await delay(1)*/
              let __TEMP_VARIABLE_00009$$ = yield delay(1);

              if (i === j)
                __TEMP_VARIABLE_00009$$;
            }
          }

          yield {
            __RETURN$$: true,
            __VALUE$$: true
          };
        }

        let f1 = () => __PROMISEV3_GENERATOR_TO_PROMISE$$(function*() {
          /*await delay(1, 1)*/
          let __TEMP_VARIABLE_00010$$ = yield delay(1, 1);

          __TEMP_VARIABLE_00010$$;
        }, this);
      }, this);
    })();

    yield {
      __RETURN$$: true,
      __VALUE$$: __TEMP_VARIABLE_00001$$
    };
  }, this);
}

function testBasicAwait() {
  return __PROMISEV3_GENERATOR_TO_PROMISE$$(function*() {
    function getValue() {
      return __PROMISEV3_GENERATOR_TO_PROMISE$$(function*() {
        yield {
          __RETURN$$: true,
          __VALUE$$: 42
        };
      }, this);
    }

    /*await getValue()*/
    let __TEMP_VARIABLE_00011$$ = yield getValue();

    let val = __TEMP_VARIABLE_00011$$;
    console.assert(val === 42, "❌ Basic await failed");
  }, this);
}

function testErrorHandling() {
  return __PROMISEV3_GENERATOR_TO_PROMISE$$(function*() {
    function throwError() {
      return __PROMISEV3_GENERATOR_TO_PROMISE$$(function*() {
        throw new Error("Boom");
      }, this);
    }

    try {
      /*await throwError()*/
      let __TEMP_VARIABLE_00012$$ = yield throwError();

      __TEMP_VARIABLE_00012$$;
      console.assert(false, "❌ Error was not thrown");
    } catch (e) {
      console.assert(e.message === "Boom", "❌ Error message mismatch");
    }
  }, this);
}

function testSequentialExecution() {
  return __PROMISEV3_GENERATOR_TO_PROMISE$$(function*() {
    let start = Date.now();

    /*await delay(100, "a")*/
    let __TEMP_VARIABLE_00013$$ = yield delay(100, "a");

    let a = __TEMP_VARIABLE_00013$$;

    /*await delay(100, "b")*/
    let __TEMP_VARIABLE_00014$$ = yield delay(100, "b");

    let b = __TEMP_VARIABLE_00014$$;
    let duration = Date.now() - start;
    console.assert(duration >= 200, "❌ Sequential execution failed");
    console.assert(a === "a" && b === "b", "❌ Sequential result mismatch");
  }, this);
}

function testParallelExecution() {
  return __PROMISEV3_GENERATOR_TO_PROMISE$$(function*() {
    let start = Date.now();

    /*await Promise.all([delay(100, "a"), delay(100, "b")])*/
    let __TEMP_VARIABLE_00015$$ = yield Promise.all([delay(100, "a"), delay(100, "b")]);

    let [a, b] = __TEMP_VARIABLE_00015$$;
    let duration = Date.now() - start;
    console.assert(duration < 150, "❌ Parallel execution too slow");
    console.assert(a === "a" && b === "b", "❌ Parallel result mismatch");
  }, this);
}

function testAwaitPrimitives() {
  return __PROMISEV3_GENERATOR_TO_PROMISE$$(function*() {
    /*await 5*/
    let __TEMP_VARIABLE_00016$$ = yield 5;

    let a = __TEMP_VARIABLE_00016$$;

    /*await "hello"*/
    let __TEMP_VARIABLE_00017$$ = yield "hello";

    let b = __TEMP_VARIABLE_00017$$;

    /*await true*/
    let __TEMP_VARIABLE_00018$$ = yield true;

    let c = __TEMP_VARIABLE_00018$$;
    console.assert(a === 5 && b === "hello" && c === true, "❌ Awaiting primitives failed");
  }, this);
}

const asyncRange = n => ({
  [Symbol.asyncIterator]() {
    let i = 0;

    return {
      next() {
        return __PROMISEV3_GENERATOR_TO_PROMISE$$(function*() {
          if (i >= n) {
            yield {
              __RETURN$$: true,

              __VALUE$$: {
                done: true
              }
            };
          }

          /*await delay(10)*/
          let __TEMP_VARIABLE_00019$$ = yield delay(10);

          __TEMP_VARIABLE_00019$$;

          yield {
            __RETURN$$: true,

            __VALUE$$: {
              value: i++,
              done: false
            }
          };
        }, this);
      }
    };
  }
});

function testAsyncIterator() {
  return __PROMISEV3_GENERATOR_TO_PROMISE$$(function*() {
    let results = [];

    /*label:
    for await (const val of asyncRange(3)) {
        results.push(val);

        if (1 === 2)
            break label;
    }*/
    {
      let __ASYNC_GENERATOR$$ = asyncRange(3)[Symbol.asyncIterator]();

      label:
      while (true) {
        let {
          value: val,
          done: __DONE$$
        } = yield __ASYNC_GENERATOR$$.next();

        if (__DONE$$)
          break;

        results.push(val);

        if (1 === 2)
          break label;
      }
    }

    console.assert(JSON.stringify(results) === "[0,1,2]", "❌ Async iterator failed");
  }, this);
}

function testNestedAsync() {
  return __PROMISEV3_GENERATOR_TO_PROMISE$$(function*() {
    function inner() {
      return __PROMISEV3_GENERATOR_TO_PROMISE$$(function*() {
        /*await delay(10, "nested")*/
        let __TEMP_VARIABLE_00020$$ = yield delay(10, "nested");

        yield {
          __RETURN$$: true,
          __VALUE$$: __TEMP_VARIABLE_00020$$
        };
      }, this);
    }

    function outer() {
      return __PROMISEV3_GENERATOR_TO_PROMISE$$(function*() {
        /*await inner()*/
        let __TEMP_VARIABLE_00021$$ = yield inner();

        yield {
          __RETURN$$: true,
          __VALUE$$: __TEMP_VARIABLE_00021$$
        };
      }, this);
    }

    /*await outer()*/
    let __TEMP_VARIABLE_00022$$ = yield outer();

    let result = __TEMP_VARIABLE_00022$$;
    console.assert(result === "nested", "❌ Nested async failed");
  }, this);
}

(function runAllTests() {
  return __PROMISEV3_GENERATOR_TO_PROMISE$$(function*() {
    /*await edge()*/
    let __TEMP_VARIABLE_00023$$ = yield edge();

    __TEMP_VARIABLE_00023$$;
    console.log("Running async/await tests...");

    /*await testBasicAwait()*/
    let __TEMP_VARIABLE_00024$$ = yield testBasicAwait();

    __TEMP_VARIABLE_00024$$;

    /*await testErrorHandling()*/
    let __TEMP_VARIABLE_00025$$ = yield testErrorHandling();

    __TEMP_VARIABLE_00025$$;

    /*await testSequentialExecution()*/
    let __TEMP_VARIABLE_00026$$ = yield testSequentialExecution();

    __TEMP_VARIABLE_00026$$;

    /*await testParallelExecution()*/
    let __TEMP_VARIABLE_00027$$ = yield testParallelExecution();

    __TEMP_VARIABLE_00027$$;

    /*await testAwaitPrimitives()*/
    let __TEMP_VARIABLE_00028$$ = yield testAwaitPrimitives();

    __TEMP_VARIABLE_00028$$;

    /*await testAsyncIterator()*/
    let __TEMP_VARIABLE_00029$$ = yield testAsyncIterator();

    __TEMP_VARIABLE_00029$$;

    /*await testNestedAsync()*/
    let __TEMP_VARIABLE_00030$$ = yield testNestedAsync();

    __TEMP_VARIABLE_00030$$;
    console.log("✅ All async/await tests passed!");
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
      let iter = gen.next(value);
      // fuck you rhino Cannot read property "__RETURN$$" from undefined `iter.value?.__RETURN$$`
      if (iter.value?.['__RETURN$$']) iter = { done: true, value: iter.value.__VALUE$$ };
      if (iter.done) resolve(iter.value);
      else Promise.resolve(iter.value).then(loop).catch(e => catchMe(e) && loop());
    }
    Promise.resolve().then(loop).catch(e => catchMe(e) && loop());
  });
}