const express = require('express');
const db = require('./config/connection');
const routes =require('./routes');
//const mongodb = require('mongodb').MongoClient;

const PORT = process.env.PORT ||  3001;
const app = express();


//using express to parse incoming objects
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

 

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Congrats Shepo, your server is running on port ${PORT}!`);
  });
});





