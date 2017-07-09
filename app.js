const express = require('express');
const mustache = require('mustache-express');
const bodyParser = require('body-parser');
const fs = require('fs');
var app = express();

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/medAppDB');

const User = require("./models/User");
const Med = require("./models/Medication")

app.engine('mustache', mustache());
app.set('view engine', 'mustache');

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000, function() {
  console.log("Is this thing on?")
});


app.get("/", function(req,res) {
  
  // const med = new Med( // puts a false Morphine med into the Medications collection
  //   {name: "Morphine"}
  // );
  // med.save()
  // .then(function(newMed){
  //   console.log('New med added to DB.');
    res.render('home');
  // })

  // const user = new User( // puts a false Barbara Johnson user into the Users collection
  //   {firstName: "Barbara",
  //   lastName: "Johnson",
  //   dob: "1950-07-08",
  //   email: "barbara.johnson@email.com",
  //   memberId: 123456789,
  //   cardholder: true});
  //   user.save()
  //   .then(function (newUser) {
      // response.redirect("/");
    // });
})

app.get("/login", function(req,res) {

  res.render('login')
})

app.get("/signup", function(req,res) {

  res.render('signup')
})

app.get("/userprofile",function(req,res){

  res.render('user-profile')
})

app.get("/settings",function(req,res){

  res.render('settings')
})
