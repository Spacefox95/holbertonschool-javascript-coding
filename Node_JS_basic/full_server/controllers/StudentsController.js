#!/user/bin/node

const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const studentData = await readDatabase(process.argv[2]);
      let output = 'This is the list of our students';
      const sortedFields = Object.keys(studentData).sort((a, b) => a.toLowerCase(b.toLowerCase()));

      for (const field in sortedFields) {
        if (Object.prototype.hasOwnProperty.call(sortedFields, field)) {
          const count = studentData[field].length;
          const list = studentData[field].join(', ');
          output += `Number of students in ${field}: ${count}. List: ${list}\n`;
        }
      }
      return response.status(200).send(output.trim());
    } catch (error) {
      return response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      return response.status(500).send('Major parameter must be CS or SWE');
    }
    try {
      const majorData = await readDatabase(process.argv[2]);
      const majorStudent = majorData[major];

      if (!majorStudent) {
        return response.status(200).send('List:');
      }

      const list = majorStudent.join(', ');
      return response.status(200).send(`List: ${list}`);
    } catch (error) {
      return response.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
