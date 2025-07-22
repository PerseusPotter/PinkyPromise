const fs = require('fs');
(async () => {
  const transform = (await import('./api.mjs')).default;

  const input = fs.readFileSync('./test.js').toString();
  fs.writeFileSync('./test-out.js', transform(input) + `
function __GENERATOR_TO_PINKY_PROMISE$$(func, that) {
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
      // fuck you rhino Cannot read property "__RETURN$$" from undefined \`iter.value?.__RETURN$$\`
      if (iter.value?.['__RETURN$$']) iter = { done: true, value: iter.value.__VALUE$$ };
      if (iter.done) resolve(iter.value);
      else Promise.resolve(iter.value).then(loop).catch(e => catchMe(e) && loop());
    }
    Promise.resolve().then(loop).catch(e => catchMe(e) && loop());
  });
}`);
})();