
const express = require('express');

//initialize the express router

const router = express.Router();

//check whether router is connected from root index.js file 

//Get the controller to call from  routes
//Initialize the HomeController and call the home function on start
const homeController = require("../controllers/home_controller");

router.get('/',homeController.home);

router.post('/create-todo',homeController.createToDo);

router.get('/delete-todo',homeController.deleteToDo);

module.exports = router;