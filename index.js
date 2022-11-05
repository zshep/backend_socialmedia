const express = require('express');
const db = require('./config/connection');
//const mongodb = require('mongodb').MongoClient;
const { user } = require('./models/user');

const PORT = process.env.PORT ||  3001;
const app = express();




//using express to parse incoming objects
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/all-users', (req,res) => {
  //grabing the db to see if it worked
  user.find({}, (err, result) => {
    if (err) {
      res.status(500).send({ message: 'we could not grab the users'});
    } else {
      res.status(200).json(result);
      console.log('the user have been gotten')
    }
    });
  });



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


