const http = require('http');
const countStudents = require('./3-read_file_async');

const host = 'localhost';
const port = 1245;
const args = process.argv[2];

const requestListener = async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School');
  } else if (req.url === '/students') {
    try {
      res.write('This is the list of our students\n');
      const result = await countStudents(args);
      res.end(`${result}`);
    } catch (error) {
      res.end(error.message);
    }
  } else {
    res.end('Not found');
  }
};

const app = http.createServer(requestListener);
app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

module.exports = app;
