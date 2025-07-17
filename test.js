// we love chat gippity

(function() {
  const results = [];
  let passCount = 0;
  let failCount = 0;

  function test(description, fn) {
    try {
      fn(() => {
        results.push({ description, status: 'PASS' });
        passCount++;
        report();
      }, (e) => {
        results.push({ description, status: 'FAIL', error: e });
        failCount++;
        report();
      });
    } catch (e) {
      results.push({ description, status: 'FAIL', error: e });
      failCount++;
      report();
    }
  }

  function assert(condition, msg) {
    if (!condition) throw new Error(msg || 'Assertion failed');
  }

  function report() {
    if (results.length === totalTests) {
      console.log(`\nResults: ${passCount} passed, ${failCount} failed.\n`);
      results.forEach(r => {
        if (r.status === 'PASS') {
          console.log(`✅ ${r.description}`);
        } else {
          console.error(`❌ ${r.description}\n   ${r.error}`);
        }
      });
    }
  }

  const tests = [];

  // Test 1: Basic resolve
  tests.push(function(resolve, reject) {
    const p = new Promise((res) => res(42));
    p.then(val => {
      assert(val === 42, 'Expected value 42');
      resolve();
    }).catch(reject);
  });

  // Test 2: Basic reject
  tests.push(function(resolve, reject) {
    const p = new Promise((_, rej) => rej('fail'));
    p.then(() => {
      reject('Should not be called');
    }).catch(err => {
      assert(err === 'fail', 'Expected rejection');
      resolve();
    });
  });

  // Test 3: Then chaining
  tests.push(function(resolve, reject) {
    Promise.resolve(1)
      .then(x => x + 1)
      .then(x => {
        assert(x === 2, 'Expected chained value 2');
        resolve();
      })
      .catch(reject);
  });

  // Test 4: Thenable resolution
  tests.push(function(resolve, reject) {
    const thenable = { then: (res) => res('thenable') };
    Promise.resolve(thenable)
      .then(val => {
        assert(val === 'thenable', 'Expected resolved thenable');
        resolve();
      })
      .catch(reject);
  });

  // Test 5: Async execution
  tests.push(function(resolve, reject) {
    let sync = true;
    Promise.resolve().then(() => {
      assert(sync === false, 'Promise callback should be async');
      resolve();
    });
    sync = false;
  });

  // Test 6: Catch works
  tests.push(function(resolve, reject) {
    Promise.reject('boom')
      .catch(err => {
        assert(err === 'boom', 'Expected catch to receive "boom"');
        resolve();
      });
  });

  // Test 7: Finally called
  tests.push(function(resolve, reject) {
    let ran = false;
    Promise.resolve('done')
      .finally(() => ran = true)
      .then(val => {
        assert(ran, 'Finally should be called');
        resolve();
      })
      .catch(reject);
  });

  // Test 8: Promise.all resolve
  tests.push(function(resolve, reject) {
    Promise.all([Promise.resolve(1), Promise.resolve(2)])
      .then(vals => {
        assert(JSON.stringify(vals) === '[1,2]', 'Expected [1,2]');
        resolve();
      })
      .catch(reject);
  });

  // Test 9: Promise.all reject
  tests.push(function(resolve, reject) {
    Promise.all([Promise.resolve(1), Promise.reject('fail')])
      .then(() => {
        reject('Should not resolve');
      })
      .catch(err => {
        assert(err === 'fail', 'Expected "fail" rejection');
        resolve();
      });
  });

  // Test 10: Promise.race
  tests.push(function(resolve, reject) {
    const p1 = new Promise(res => setTimeout(() => res('first'), 20));
    const p2 = new Promise(res => setTimeout(() => res('second'), 50));
    Promise.race([p1, p2])
      .then(val => {
        assert(val === 'first', 'Expected "first"');
        resolve();
      }).catch(reject);
  });

  // Test 11: Promise.resolve static
  tests.push(function(resolve, reject) {
    Promise.resolve(99).then(val => {
      assert(val === 99, 'Expected 99');
      resolve();
    }).catch(reject);
  });

  // Test 12: Promise.reject static
  tests.push(function(resolve, reject) {
    Promise.reject('x').catch(val => {
      assert(val === 'x', 'Expected rejection value "x"');
      resolve();
    });
  });

  // Test 13: Promise.allSettled
  tests.push(function(resolve, reject) {
    Promise.allSettled([Promise.resolve(1), Promise.reject('e')])
      .then(results => {
        assert(results.length === 2, 'Expected 2 results');
        assert(results[0].status === 'fulfilled', 'First should be fulfilled');
        assert(results[1].status === 'rejected', 'Second should be rejected');
        resolve();
      })
      .catch(reject);
  });

  // Test 14: Promise.any
  tests.push(function(resolve, reject) {
    Promise.any([
      Promise.reject('no'),
      Promise.resolve('yes'),
      Promise.reject('nope')
    ]).then(val => {
      assert(val === 'yes', 'Expected "yes"');
      resolve();
    }).catch(reject);
  });

  // Test 15: Promise.any with all rejected
  tests.push(function(resolve, reject) {
    Promise.any([Promise.reject('a'), Promise.reject('b')])
      .then(() => reject('Should not resolve'))
      .catch(err => {
        assert(err.name === 'AggregateError', 'Expected AggregateError');
        resolve();
      });
  });

  // Run all tests
  const totalTests = tests.length;
  tests.forEach(t => test(t.name || 'Unnamed Test', t));
}());