const { spawn } = require('child_process');
const { createReadStream } = require('fs');

const child = spawn('node', ['./helper.js'], { stdio: ['pipe', 'pipe', 'inherit'] });

const file = createReadStream('./test.js');
file.pipe(child.stdin);

const chunks = [];
child.stdout.on('data', c => chunks.push(c));
child.stdout.once('end', () => {
  console.log(Buffer.concat(chunks).toString());
});