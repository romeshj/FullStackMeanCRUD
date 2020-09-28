# FullStackMeanCRUD
Full Stack Mean CRUD Example

npm install mongodb
connect to mongoDB
mongoose.connect('mongodb://localhost:27017/tutorials_db')

create folder - data/db  in project folder like in C:\Romesh\2020\FullStackMeanCRUD\nodejs-express-mongodb\data\db
For windows - just go to Mongodb folder (ex : C:\ProgramFiles\MongoDB\Server\3.4\bin) and open cmd in the folder
and type "mongod.exe --dbpath C:\Romesh\2020\FullStackMeanCRUD\nodejs-express-mongodb\data\db"
All should work fine by now.

run server.js - node server.js
open cmd and navigate to C:\ProgramFiles\MongoDB\Server\3.4\bin and run mongod.exe --dbpath C:\Romesh\2020\FullStackMeanCRUD\nodejs-express-mongodb\data\db

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

Using Postman, you can test all the Apis as listed in tutorial.routes.js

