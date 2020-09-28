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

/*module.exports = app => {

	const tutorials = require("../controllers/tutorial.controller.js");
	console.log(tutorials)
	var router = require("express").Router();
	
  // Create a new Tutorial
  router.post("/", tutorials.create);

}*/

/*
we don’t need to write CRUD functions, Mongoose Model supports all of them:

create a new Tutorial: object.save()
find a Tutorial by id: findById(id)
retrieve all Tutorials: find()
update a Tutorial by id: findByIdAndUpdate(id, data)
remove a Tutorial: findByIdAndRemove(id)
remove all Tutorials: deleteMany()
find all Tutorials by title: find({ title: { $regex: new RegExp(title), $options: “i” } })
These functions will be used in our Controller.

Create the Controller with these CRUD functions:

create
findAll
findOne
update
delete
deleteAll
findAllPublished
*/

const express = require('express');
const router = express.Router();
const tutorialController = require('../controllers/tutorial.controllers');


// Retrieve all tutorials
router.get('/', tutorialController.findAll);

// Create and Save a new Tutorial
router.post('/', tutorialController.create);

// Retrieve Tutorials by Title
router.get("/bytitle", tutorialController.findAllByTitle);

// Retrieve all published Tutorials
router.get("/published", tutorialController.findAllPublished);


// Retrieve a single tutorial with id
router.get('/:id', tutorialController.findOne);

// Update a tutorial with id
router.put('/:id', tutorialController.update);

//Delete a tutorial with id
router.delete('/:id', tutorialController.delete);

// Delete all Tutorials from the database.
router.delete("/", tutorialController.deleteAll);

 module.exports = router;
 