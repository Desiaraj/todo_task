//npm install mongoose to perform db related action and server connection
const mongoose = require('mongoose');

//Connect to localhost with Database name
mongoose.connect('mongodb://0.0.0.0:27017/todoList');

const db = mongoose.connection;

//print error if it's not successfully connected to server
db.on('error',console.log.bind(console,"Error Connecting to DB"));

//print success message once connected to server
db.once('open',function(){
  console.log("Successfully connected to databases");
});

