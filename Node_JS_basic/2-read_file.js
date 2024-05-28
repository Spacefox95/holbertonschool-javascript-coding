const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n');
    lines.shift();
    const fields = {};
    lines.forEach((line) => {
      const student = line.split(',');
      const field = student[3];
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(student[0]);
    });
    const totalStudent = lines.length;
    console.log(`Number of students: ${totalStudent}`);
    Object.keys(fields).forEach((field) => {
      const count = fields[field].length;
      const list = fields[field].join(', ');
      console.log(`Number of students in ${field}: ${count}. List: ${list}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
