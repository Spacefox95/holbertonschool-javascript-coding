const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;
const path = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const result = await countStudents(path);
    res.send(`This is the list of our students\n${result}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  // console.log(`Example app listening on port ${port}`);
});

module.exports = app;
