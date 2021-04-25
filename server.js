const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

var MongoClient = require('mongodb').MongoClient;


const dbConfig = require('./config/database.config');

// --------------------------------------------------------------------------------------------

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url,{ useNewUrlParser: true });
var nameSchema = new mongoose.Schema({
    bill_number: Number,
    bill_name: String,
    bill_intro_date: Date,
    bill_summary: String,
    bill_sponsor: String,
    sponsor_link: String,
    sponsor_title: String,
    sponsor_district: String,
    bill_cosponsor: String,
    bill_status: String
});
var entry = mongoose.model("entry", nameSchema);


// --------------------------------------------------------------------------------------------

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// --------------------------------------------------------------------------------------------
app.post('/insert', function(req,res){
	console.log(req.body)
  var myData = new entry(req.body);
      myData.save()
          .then(item => {
              res.send("Name saved to database");
          })
          .catch(err => {
              res.status(400).send("Unable to save to database");
          });
})

// --------------------------------------------------------------------------------------------
app.get('/showall', function(req,res){

  MongoClient.connect(dbConfig.url, function(err, db) {
    	useNewUrlParser: true
    if (err) throw err;
    var dbo = db.db("pennWebsiteInfo");
    dbo.collection("pennWebsiteInfo").find({}).toArray(function(err, result) {
      if (err) throw err;
      res.send(result);
      db.close();
    });
  });

})

//--------------------------------------------------------------------------------------------
app.post('/delete', function(req,res){

  MongoClient.connect(dbConfig.url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("pennWebsiteInfo");
  var myquery = { bill_number: req.body.bill_number };
  dbo.collection("pennWebsiteInfo").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    res.send("1 document deleted");
    db.close();
  });
});
})
//--------------------------------------------------------------------------------------------
app.get('/titles', function(req,res){

  MongoClient.connect(dbConfig.url, function(err, db) {
    	useNewUrlParser: true
    if (err) throw err;
    var dbo = db.db("pennWebsiteInfo");
    var mysort = { title: -1 };
    dbo.collection("pennWebsiteInfo").find({},{ projection: { _id: 0, bill_number: 1} }).sort(mysort).toArray(function(err, result) {
      if (err) throw err;
      res.send(result);
      db.close();
    });
  });

})
//--------------------------------------------------------------------------------------------
app.post('/updatecontent', function(req,res){

  MongoClient.connect(dbConfig.url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("pennWebsiteInfo");
  var myquery = { bill_number: req.body.bill_number };
  var newvalues = { $set: {bill_number: req.body.bill_number,content: req.body.content} };
  dbo.collection("movies").updateOne(myquery, newvalues, function(err, result) {
    if (err) throw err;
    res.send("1 document updated with title: "+req.body.bill_number);
    db.close();
  });
});
})
//--------------------------------------------------------------------------------------------
app.post('/updatetitle', function(req,res){

  MongoClient.connect(dbConfig.url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("pennWebsiteInfo");
  var myquery = { bill_number: req.body.bill_number };
  var newvalues = { $set: {bill_number: req.body.bill_number} };
  dbo.collection("pennWebsiteInfo").updateOne(myquery, newvalues, function(err, result) {
    if (err) throw err;
    res.send("1 document updated with title: "+req.body.bill_number);
    db.close();
  });
});

})
//--------------------------------------------------------------------------------------------
// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Easyweapons application."});
});

// listen for requests
app.listen(3001, () => {
    console.log("Server is listening on port 3001");
});
