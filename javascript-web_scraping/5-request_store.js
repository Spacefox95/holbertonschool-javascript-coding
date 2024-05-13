#!/usr/bin/node

const request = require("request");
const fs = require("fs");
const url = process.argv[2];
const file = process.argv[3];
request.get(url, (error, response, body) => {
  if (error) {
    console.error('Error', error);
  } else {
    fs.writeFile(file, body, 'utf8', (error) => {
      if (error) {
        console.error(error);
      } else {
        return;
      }
    });
  }
});
