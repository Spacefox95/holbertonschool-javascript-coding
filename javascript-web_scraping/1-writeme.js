#!/usr/bin/node

const fs = require('fs');
const path = process.argv[2];
const argument = process.argv[3];

fs.writeFile(path, argument, 'utf8', (error) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
