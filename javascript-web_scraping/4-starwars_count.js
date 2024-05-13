#!/usr/bin/node

const request = require("request");
const url = process.argv[2];
let count = 0;
request.get(url, (error, response, body) => {
  if (error) {
    console.error('Error', error);
  } else {
    const datas = JSON.parse(body).results;
    datas.forEach(data => {
      const wedge = data.characters.find(character => character.includes('18'));
    if (wedge) {
      count++;
    }
  });
console.log(count);
}
});
