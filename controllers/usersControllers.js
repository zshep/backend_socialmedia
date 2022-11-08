const User = require('../models/User');


//exporting the following ....CRUD routes?

module.exports = {
  //get all users
    getUsers(req, res) {
        User.find()
          .then((users) => res.json(users))
          .catch((err) => res.status(500).json(err));
      },
      // get a single user by id
      getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })        
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
      // update user
      updateUser(req, res) {
        User.findOneAndUpdate(
            {_id: req.params.userId},
            {$set: req.body},  
        )
            .then((user) =>
            !user
            ? res.status(404).json({ message: 'No user with that ID' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));  
      },

      //delete user by id
      deleteUser(req, res) {
        User.findByIdAndDelete(
            {_id: req.params.userId},
        )
            .then((user) =>
                !user
                ? res.status(404).json({ message: 'No user with that ID' }) : res.json(user)
        )
            .catch((err) => res.status(500).json(err));

        }
};



// //create new friend to a user
// createNewfriend(req, res) {
//   thoughts.create(req.body)
//       .then((dbThoughtData) => res.json(dbThoughtData))
//       .catch((err) => res.status(500).json(err));
// },

