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
const Tutorial = require('../models/tutorial.model.js');

// Create and Save a new Tutorial
exports.create = (req, res) => {

  // Validate request
	if(!req.body) {
	  return res.status(400).send({ message: "Please fill all required field" });
	}
	
	// Create a new Tutorial	
	const tutorial = new Tutorial({
		title: req.body.title,
		description: req.body.description,
		published: req.body.published ? req.body.published : false
	});
	
	// Save tutorial in the database
	tutorial.save()
	.then(data => {
		res.send(data);
	}).catch(err => {
		res.status(500).send({ message: err.message || "Something went wrong while creating new tutorial." })
	})
  
};


//Retrieve objects (with condition)
//Retrieve all Tutorials/ find by title from the database:

exports.findAllByTitle = (req, res) => {
	const title = req.query.title;
	var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
	Tutorial.find(condition).then(tutorials => {
		res.send(tutorials);
	}).catch(err => {
		res.status(500).send({ message: err.message || "Something went wrong while getting list of tutorials." })
	})
};


// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  Tutorial.find({ 'published': true }).then(tutorials => {
		res.send(tutorials);
	}).catch(err => {
		res.status(500).send({ message: err.message || "Something went wrong while getting list of tutorials." })
	})
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
	Tutorial.find().then(tutorials => {
		res.send(tutorials);
	}).catch(err => {
		res.status(500).send({ message: err.message || "Something went wrong while getting list of tutorials." })
	})
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  Tutorial.findById(req.params.id).then(tutorial => {
		if(!tutorial) {
			return res.status(404).send({ message: "Tutorial not found with id " + req.params.id });
		}
		res.send(tutorial);
	}).catch(err => {
		if(err.kind === 'ObjectId') {
			return res.status(404).send({ message: "Tutorial not found with id " + req.params.id });
		}
		return res.status(500).send({ message: "Error getting tutorial with id " + req.params.id });
	})
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  // Validate request
	if(!req.body) {
	  return res.status(400).send({ message: "Please fill all required field" });
	}
	
	// Find tutorial and update it with the request body
	Tutorial.findByIdAndUpdate(req.params.id, {
		title: req.body.title,
		description: req.body.description,
		published: req.body.published
	},{new: true}).then(tutorial => {
		if(!tutorial) {
			return res.status(404).send({ message: "tutorial not found with id " + req.params.id });
		}
		res.send(tutorial);
	}).catch(err => {
		if(err.kind === 'ObjectId') {
			return res.status(404).send({ message: "Tutorial not found with id " + req.params.id });
		}
		return res.status(500).send({ message: "Error updating tutorial with id " + req.params.id });
	})
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  Tutorial.findByIdAndRemove(req.params.id).then(tutorial => {
		if(!tutorial) {
			return res.status(404).send({ message: "tutorial not found with id " + req.params.id });
		}
		res.send({message: "tutorial deleted successfully!"});
	}).catch(err => {
		if(err.kind === 'ObjectId' || err.name === 'NotFound') {
			return res.status(404).send({ message: "tutorial not found with id " + req.params.id });
		}
		return res.status(500).send({ message: "Could not delete tutorial with id " + req.params.id });
	});
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Tutorial.deleteMany({}).then(tutorial => {
		res.send({message: `${tutorial.deletedCount} Tutorials were deleted successfully!`});
	}).catch(err => {
		return res.status(500).send({ message: "Some error occurred while removing all tutorials." });
	});
};
