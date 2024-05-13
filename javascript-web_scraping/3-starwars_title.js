#!/usr/bin/node

const request = require("request");
const movie_id = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${movie_id}`;
request.get(url, (error, response, body) => {
	if (error) {
		console.error('Error', error);
	} else {
		const movie_name = JSON.parse(body);
		console.log(movie_name.title);
	}
});
