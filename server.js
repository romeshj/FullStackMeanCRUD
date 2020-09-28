//https://bezkoder.com/node-express-mongodb-crud-rest-api/
//https://bezkoder.com/angular-10-mongodb-node-express/#Nodejs_Express_MongoDB_Back-end
//https://bezkoder.com/angular-10-crud-app/ - Front End Angular 10
// npm install mongodb
// connect to mongoDB
//mongoose.connect('mongodb://localhost:27017/tutorials_db');
/* For windows - just go to Mongodb folder (ex : C:\ProgramFiles\MongoDB\Server\3.4\bin) and open cmd in the folder and type "mongod.exe --dbpath C:\Romesh\2020\FullStackMeanCRUD\nodejs-express-mongodb\data\db"
if c:\data\db folder doesn't exist then create it by yourself and run above command again.
All should work fine by now.)) */

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var cors = require("cors");
// Setup server port
const port = process.env.PORT || 7777;

// adding middleware - cors
app.use(cors());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// Configuring the database
const dbConfig = require('./app/config/db.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// Connecting to the database
mongoose.connect(dbConfig.url, {
	useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
	console.log("Successfully connected to the database");
}).catch(err => {
  console.log('Could not connect to the database.', err);
  process.exit();
});

// define a root/default route
app.get('/', (req, res) => {
  res.json({"message": "Welcome to Full Stack MEAN CRUD application."});
});

// Require Tutorial routes
const tutorialRoutes = require('./app/routes/tutorial.routes');

// using as middleware
app.use('/api/tutorials', tutorialRoutes);

// listen for requests
app.listen(port, () => {
  console.log(`Node server is listening on port ${port}`);
});

/* 
	open postman
	
	test all the endpoints
	
	http://localhost:4444/api/users
	
	{
		"first_name": "firstName",
		"last_name": "lastName",
		"email": "emailID",
		"phone": "phoneNo"
	}
*/