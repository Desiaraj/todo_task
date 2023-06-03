//This is root file of the project.In this file we will initialize express and connect the server.
//This file is used to redirect the all urls to specific routes 

//initialize the express 
const express = require('express');
const port = 8000;  // listen this port 

const app = express();

app.listen(port,function(err){
  if(err){
    console.log(`Can't able to connect the server with ${port} and the error is ${err}`);
    //print the error in console and close 
    return;
  }
  //through the success message in console
  console.log(`Successfully connected to the server with port df ${port}`);
});