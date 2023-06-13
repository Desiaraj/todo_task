//Get the Todo Model for to create data in database
const ToDo = require("../models/toDo");


//function for to get all existing toDo List. Return empty if there is no data
module.exports.home = function(req,res){

    ToDo.find({}).then((result)=>{
        console.log(result);
        return res.render('home',{
            "title":"ToDo App",
            "todo_list":result
        });
    }).catch((error)=>{
        console.log("Todo database get failed");
        return;
    });
}

//function to create new Todo list from user data
module.exports.createToDo = function(req,res){

  console.log(req.body);
  ToDo.create({
    title:req.body.title,
    description:req.body.description,
    date:req.body.date,
    category:req.body.category
  }).then((result)=>{
     console.log("Todo Created successfully");
     res.redirect('back');  
  }).catch((error)=>{
      console.log("Todo not created",error);
      res.redirect('back');
  });
}


//function to delete todo item by Id
module.exports.deleteToDo = function(req,res){
   
    let id = req.query.id;

    ToDo.findByIdAndDelete(id).then((result)=>{
      console.log("Todo Item deleted successfully");
      res.redirect('back');
    }).catch((error)=>{
      console.log("Item not deleted ",error);
      return;
    });
}

