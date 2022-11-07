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

      //delete user
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



