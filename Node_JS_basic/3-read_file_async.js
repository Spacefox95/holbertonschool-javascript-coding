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
    let result = `Number of students: ${totalStudent}\n`;
    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        const count = fields[field].length;
        const list = fields[field].join(', ');
        result += `Number of students in ${field}: ${count}. List: ${list}\n`;
      }
    }
    return result.trim();
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
