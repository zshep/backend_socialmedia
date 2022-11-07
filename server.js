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


// // -------------------------trying stuff ---------------------
// app.post('/create', (req, res) => {
  
//   //creating data to see if I can pull it up somewhere
//   db.collection('userCollection').insertOne(
//     {username: 'zshepers', email: 'zshep@gmail.com' },
//     (err, results) => {
//       if (err) throw err;
//       res.json(results);
//       console.log(results);
//     }
//   )
// });


