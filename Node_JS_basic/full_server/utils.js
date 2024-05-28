#!/user/bin/node

const fs = require('fs');

const readDatabase = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const student = lines.slice(1).map((line) => line.split(','));
    const fields = {};

    student.forEach((element) => {
      const field = element[3];
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(element[0]);
    });
    resolve(fields);
  });
});

module.exports = readDatabase;
