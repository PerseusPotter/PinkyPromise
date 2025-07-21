const fs = require('fs');
const transform = require('./api');

const input = fs.readFileSync('./test.js').toString();
fs.writeFileSync('./test-out.js', transform(input) + `
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
}`);