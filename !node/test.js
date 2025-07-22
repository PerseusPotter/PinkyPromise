// ty chat gippity

// Helper delay function
function delay(ms, value, shouldReject = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      shouldReject ? reject(new Error('Rejected: ' + value)) : resolve(value);
    }, ms);
  });
}

async function edge() {
  await delay(1);
  const test = 1;
  return await (async () => {
    const v1 = await delay(1, 1);
    const v2 = delay(1, 1);
    const v3 = (1, 1);
    if (v3 === v2) return false;
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
          if (i === j) await delay(1);
        }
      }
      return true;
    }
    const f1 = async () => await delay(1, 1);
  })();
}

// 1. Basic async/await
async function testBasicAwait() {
  async function getValue() {
    return 42;
  }
  const val = await getValue();
  console.assert(val === 42, '❌ Basic await failed');
}

// 2. Error handling
async function testErrorHandling() {
  async function throwError() {
    throw new Error('Boom');
  }
  try {
    await throwError();
    console.assert(false, '❌ Error was not thrown');
  } catch (e) {
    console.assert(e.message === 'Boom', '❌ Error message mismatch');
  }
}

// 3. Sequential execution
async function testSequentialExecution() {
  const start = Date.now();
  const a = await delay(100, 'a');
  const b = await delay(100, 'b');
  const duration = Date.now() - start;
  console.assert(duration >= 200, '❌ Sequential execution failed');
  console.assert(a === 'a' && b === 'b', '❌ Sequential result mismatch');
}

// 4. Parallel execution
async function testParallelExecution() {
  const start = Date.now();
  const [a, b] = await Promise.all([delay(100, 'a'), delay(100, 'b')]);
  const duration = Date.now() - start;
  console.assert(duration < 150, '❌ Parallel execution too slow');
  console.assert(a === 'a' && b === 'b', '❌ Parallel result mismatch');
}

// 5. Await with primitive/non-Promise values
async function testAwaitPrimitives() {
  const a = await 5;
  const b = await 'hello';
  const c = await true;
  console.assert(a === 5 && b === 'hello' && c === true, '❌ Awaiting primitives failed');
}

// 6. Await in loop with async iterator
// async function* asyncRange(n) {
//   for (let i = 0; i < n; i++) {
//     await delay(10); // simulate delay
//     yield i;
//   }
// }
const asyncRange = (n) => ({
  [Symbol.asyncIterator]() {
    let i = 0;
    return {
      async next() {
        if (i >= n) {
          return { done: true };
        }
        await delay(10);
        return { value: i++, done: false };
      },
    };
  }
});

async function testAsyncIterator() {
  const results = [];
  label:
  for await (const val of asyncRange(3)) {
    results.push(val);
    if (1 === 2) break label;
  }
  console.assert(JSON.stringify(results) === '[0,1,2]', '❌ Async iterator failed');
}

// 7. Nested async functions
async function testNestedAsync() {
  async function inner() {
    return await delay(10, 'nested');
  }
  async function outer() {
    return await inner();
  }
  const result = await outer();
  console.assert(result === 'nested', '❌ Nested async failed');
}

// 8. Top-level await simulation with IIFE
(async function runAllTests() {
  await edge();
  console.log('Running async/await tests...');
  await testBasicAwait();
  await testErrorHandling();
  await testSequentialExecution();
  await testParallelExecution();
  await testAwaitPrimitives();
  await testAsyncIterator();
  await testNestedAsync();
  console.log('✅ All async/await tests passed!');
})();
