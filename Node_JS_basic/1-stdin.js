const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  console.log(`Your name is: ${name}`);
});
rl.on('close', () => {
  console.log('This important software is now closing');
  process.exit();
});
