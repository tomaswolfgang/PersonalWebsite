const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser= require('body-parser');
const app = express();
const port = process.env.PORT || 3001;
const path = require('path');
const staticFiles = express.static(path.join(__dirname, '../../client/build'))
var db;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(staticFiles);

MongoClient.connect("mongodb://tommy:isane1@ds141812.mlab.com:41812/tommy", {useNewUrlParser: true},(err, client) => {
  if(err) return console.log(err);

  db = client.db("tommy");

  //Get all the likes
  app.get('/allLikes', (req,res)=>{
    db.collection('likes').find({}).toArray((err,result) =>{
      if(err) {
        res.send({error: true, message: "something went wrong with getting all likes"});
        return null;
      }

      res.send({error: false, data: result, message: "likes retrieved successfully"});
    })
  })

  //add a like to something
  app.post('/like', (req, res) => {
    //console.log(req.body)
    let query = {id: req.body.id};
    let newVal = {$set: {count: req.body.count}};

    db.collection('likes').updateOne(query, newVal, (err, result) => {
      if(err) return res.send({error: true, message: "update like failed"});

      //console.log("result",result.result);
      res.send({error: false, message: "updated like success", data: result.result.ok});
    })
  })

  app.listen(port, () => console.log(`Listening on port ${port}`));
})
