const thoughts = require('../models/thought');
const users = require('../models/User');

//creating the methods for each of the routes

module.exports = {

    //get all thoughts
    getThoughts(req, res) {
        thoughts.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },

    //get a single thought by id
    getSingleThought(req, res){
        thoughts.findOne({ _id: req.params.thoughtId })
            .then((singleThoughtData) =>
            !singleThoughtData
                ? res.status(404).json({ message: 'No thought with that ID' }) : res.json(singleThoughtData)
            )
            .catch((err) => {res.status(500).json(err)
                console.error(err);
                })

    },
    //create a new thought and add to users thought []
    createThought(req, res){
        thoughts.create(req.body)
       
            .then((dbThoughtData) => users.findOneAndUpdate(
                {_id: req.body.userId},
                {$addToSet: { thoughts: dbThoughtData._id } },
                { new : true },
                ))
                .then((user) => !user ? res.status(404).json({ message: 'user is not found',}) : res.json(user)
                )

            .catch((err) => {res.status(500).json(err)
            console.error(err);
            });
    },
    // put route to update a thought by id
    updateThought(req, res) {
        thoughts.findOneAndUpdate (
            {_id: req.params.thoughtsId},
            {$set: req.body}, 
        )
            .then((updatedThought) => !updatedThought ? res.status(404).json({message: 'No thought with that id'}) : res.json(updatedThought)
        )
            .catch((err) => {res.status(500).json(err)
            console.error(err);
            });
    },
    // delete route to remove a thought by id
    deleteThought(req, res) {
        thoughts.findByIdAndDelete(
            {_id: req.params.thoughtsId},
        ) 
            .then((thought) =>
            !thought
            ? res.status(404).json({ message: 'No user with that ID' }) : res.json(thought)
        )
            .catch((err) => {res.status(500).json(err)
            console.error(err);
            });
    },
    //creating the reaction and addinging to the appropriate array
    createReaction(req, res) {
        thoughts.findOneAndUpdate(
            {_id: req.params.thoughtsId },
            { $addToSet: { reactions: req.body } },
            { new : true},
            )

            .then((reaction) => !reaction ? res.status(404).json({ message: 'could not make a new reaction'}) : res.status(200).json(reaction))
            
            .catch((err) => {res.status(500).json(err)
            console.error(err);
            });

    },
    //deleting reaction by id
    deleteReaction(req, res) {
        thoughts.findOneAndUpdate(
            {_id: req.params.thoughtsId},
            {$pull: { reactions: {_id: req.body.reactionId }}},
            { new: true},

        )
        .then((thought) =>
            !thought
            ? res.status(404).json({ message: 'No thought with that ID' }) : res.json(thought)
        )
            .catch((err) => {res.status(500).json(err)
            console.error(err);
            });

    }

};