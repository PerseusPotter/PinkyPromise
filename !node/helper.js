const transform = require('./api');

const chunks = [];
process.stdin.on('data', c => chunks.push(c));
process.stdin.once('end', () => {
  const input = Buffer.concat(chunks).toString();

  const output = transform(input);
  process.stdout.write(output);
  process.stdout.end();
});