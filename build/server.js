'use strict';

var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var compression = require('compression');
var app = express();
var port = process.env.PORT || 8080;
var path = require('path');
var staticFiles = express.static(path.join(__dirname, '../../client/build'));
var db;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(staticFiles);
app.use(compression());

MongoClient.connect("mongodb://tommy:isane1@ds141812.mlab.com:41812/tommy", { useNewUrlParser: true }, function (err, client) {
  if (err) return console.log(err);

  db = client.db("tommy");

  //Get all the likes
  app.get('/allLikes', function (req, res) {
    db.collection('likes').find({}).toArray(function (err, result) {
      if (err) {
        res.send({ error: true, message: "something went wrong with getting all likes" });
        return null;
      }

      res.send({ error: false, data: result, message: "likes retrieved successfully" });
    });
  });

  //add a like to something
  app.post('/like', function (req, res) {
    //console.log(req.body)
    var query = { id: req.body.id };
    var newVal = { $set: { count: req.body.count } };

    db.collection('likes').updateOne(query, newVal, function (err, result) {
      if (err) return res.send({ error: true, message: "update like failed" });

      //console.log("result",result.result);
      res.send({ error: false, message: "updated like success", data: result.result.ok });
    });
  });

  app.listen(port, function () {
    return console.log('Listening on port ' + port);
  });
});