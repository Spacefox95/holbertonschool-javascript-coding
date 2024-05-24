const { readFile } = require('fs').promises;

async function countStudents(path) {
  try {
    const file = await readFile(path, 'utf8');
    const lines = file.split('\n').filter((line) => line.trim() !== '');
    lines.shift();
    const fields = {};
    lines.forEach((line) => {
      const [firstname, , , field] = line.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });
    const totalStudent = lines.length;
    console.log(`Number of students: ${totalStudent}`);
    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        const count = fields[field].length;
        const list = fields[field].join(', ');
        console.log(`Number of students in ${field}: ${count}. List: ${list}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
