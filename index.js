const express = require('express')
var cors = require('cors')
const app = express();
app.use(cors())
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
var moment = require('moment');
moment().format();


const url = ''
const dbName = 'Library';

app.get('/', (req, res) => {   
    res.send('Hello World!')
})

app.get('/api', (req, res) => {  

    MongoClient.connect(url, function(err, client) 
    {assert.equal(null, err);
    
    const db = client.db(dbName);
    
    db.collection('Books').insertOne({
      userid:'1213',
      Temp:'50',
      HeartBear: '72',
      BPup : '120',
      BPD: '80',
      Entry: moment().format('MMMM Do YYYY, h:mm:ss a')
    })
      client.close();
    }); 
    res.send('Added')
})


app.get('/apiresult', (req, res) => {   
    MongoClient.connect(url, function(err, client) 
    {assert.equal(null, err);
      console.log("Connected successfully to server");
     
      const db = client.db(dbName);
      db.collection('Books').find().toArray().then(data=>{
        res.send(data)
      });
      client.close();
    }); 
    
})
app.listen(process.env.PORT || 5000, () => console.log("Ready"))