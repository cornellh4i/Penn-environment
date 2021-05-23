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
      bill_number: String,
      bill_name: String,
      bill_intro_date: String,
      bill_summary: String,
      bill_sponsor: String,
      bill_pdf: String,
      sponsor_district: String,
      sponsor_party: String,
      bill_updated: String,
      bill_status: String,
      bill_memo: String,
      featured: Boolean
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
  MongoClient.connect(dbConfig.url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("pennWebsiteInfo");
    dbo.collection("pennWebsiteInfo").insertOne(myData, function(err, res) {
      console.log(myData);
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
})

// --------------------------------------------------------------------------------------------
app.get('/showall', function(req,res){

  MongoClient.connect(dbConfig.url, { useNewUrlParser: true }, function(err, db) {
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
  MongoClient.connect(dbConfig.url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
  var dbo = db.db("pennWebsiteInfo");
  var myquery = { bill_name: req.body.bill_name  };

  dbo.collection("pennWebsiteInfo").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    res.send("1 document deleted");
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
