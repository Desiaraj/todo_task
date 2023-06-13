const mongoose = require('mongoose');

const toDoItemSchema = mongoose.Schema({

     title:{
        type:String,
        required:true
     },
     description:{
        type:String,
        required:true
     },
     date:{
        type:String,
        required:true
     },
     category:{
        type:String,
        required:true,
     }
})

const ToDo = mongoose.model('todo',toDoItemSchema);

module.exports = ToDo;
