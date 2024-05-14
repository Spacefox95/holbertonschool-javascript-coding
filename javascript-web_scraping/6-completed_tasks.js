#!/usr/bin/node

const request = require("request");
const url = process.argv[2];
request.get(url, (error, response, body) => {
  if (error) {
    console.error("Error", error);
  } else {
    body = JSON.parse(body);
    const completedTaskbyUser = {};

    for (let i = 0; i < body.length; ++i) {
      const userId = body[i].userId;
      const completed = body[i].completed;
      if (completed && !completedTaskbyUser[userId]) {
        completedTaskbyUser[userId] = 0;
      }
      if (completed) ++completedTaskbyUser[userId];
    }
    console.log(completedTaskbyUser);
  }
});
