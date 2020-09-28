/* 

When a client sends request for an endpoint using HTTP request (GET, POST, PUT, DELETE), 
we need to determine how the server will response by setting up the routes.

These are our routes:

/api/tutorials: GET, POST, DELETE
/api/tutorials/:id: GET, PUT, DELETE
/api/tutorials/published: GET

Using Postman, we’re gonna test all the Apis below.
https://jsonplaceholder.typicode.com/users
https://www.youtube.com/watch?v=O76FbfTbPH4
https://www.guru99.com/postman-tutorial.html
*/

module.exports = app => {

	const tutorials = require("../controllers/tutorial.controller.js");
	console.log(tutorials)
	var router = require("express").Router();
	
  // Create a new Tutorial
  router.post("/", tutorials.create);

}