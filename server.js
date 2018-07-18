var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var PORT = process.env.PORT || 3001;
var db = require("./models");
var app = express();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(express.static("public"));
mongoose.connect("mongodb://localhost/userDb");

//When the server starts create and save a new user document to the db

   //Routes for getting all wine orders from the db

   
   //Route for retriving all users

   
  // Router for saving a new wine purchase to the db and then associating it with a user

  app.post("/api/dailyOffering", function(req,res){
    console.log(req.body)
    db.User.create(req.body)
    .then(function(dbUser){
      res.json(dbUser);
    })
    .catch(function(err){
      res.json(err);
    });
  });

  // Route to get all users and populate them with their wine orders

  app.get("/populateduser", function(req,res){
    db.User.find({})
    .populate("Wine")
    .then(function(dbUser){
      res.json(dbUser);
    })
    .catch(function(err){
      res.json(err);

    });
  });

  app.listen(PORT, function(){
    console.log("app running on port" + PORT +"!")
  });