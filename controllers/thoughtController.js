const thoughts = require('../models/thought');
const users = require('../models/User');

//creating the methods for each of the routes

module.exports = {

    //get all thoughts
    getThoughts(req, res) {
        thoughts.find()
        .then((thoughts) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },

    //get a single thought by id
    getSingleThought(res, req){
        thoughts.findById(req.body)
            .then((singleThoughtData) =>
            !singleThoughtData
                ? res.status(404).json({ message: 'No user with that ID' }) : res.json(singleThoughtData)
            )
            .catch((err) => res.status(500).json(err));

    },
        //TO DO: figure out how to add to users thought array
    //create a new thought and add to users thought []
    createThought(res, req){
        thoughts.create(req.body)
            .then((dbThoughtData) => res.json(dbThoughtData))
            .catch((err) => res.status(500).json(err));
    },

    
}