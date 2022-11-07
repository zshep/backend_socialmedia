const User = require('../models/User');


//exporting the following ....CRUD routes?

module.exports = {

    getUsers(req, res) {
        User.find()
          .then((users) => res.json(users))
          .catch((err) => res.status(500).json(err));
      },
      getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
          .select('-__v')
          .populate('posts')
          .then((user) =>
            !user
              ? res.status(404).json({ message: 'No user with that ID' })
              : res.json(user)
          )
          .catch((err) => res.status(500).json(err));
      },
      // create a new user
      createUser(req, res) {
        User.create(req.body)
          .then((dbUserData) => res.json(dbUserData))
          .catch((err) => res.status(500).json(err));
      },

};


//users.create(
//     {
//         username: 'Q',
//         email: 'Quak@gmail.com',
    
//     },
//     (err) => (err ? handleError(err) : console.log('user document created'))

// )








// --------------------------------Extra junk I might not need -------------------------------------------------


//testing routes
// app.get('/', async (req, res) => {
//     console.log('this route has worked');
//     console.log(res);
//   });
  
//   app.get('/all-users', async (req,res) => {
//     //grabing the db to see if it worked
//     await users.find({}, (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.status(200).json(result);
//         console.log('the user have been gotten')
//       }
//       });
//     });