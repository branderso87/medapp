const express = require('express');
const mustache = require('mustache-express');
const bodyParser = require('body-parser');
const fs = require('fs');
var app = express();
let user=false;
var session = require('express-session')

app.engine('mustache', mustache() )
app.set('view engine', 'mustache');

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.listen(3000, function() {
  console.log("Is this thing on?")
});

app.get("/", function(req,res) {

  res.render('home')
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

app.get("/doctorsview",function(req,res){

  res.render('doctorsview')
})

app.post("/doctorsSearch", function(req,res) {
  
  res.render('doctorsview')
})
