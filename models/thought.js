const mongoose =require('mongoose');


const thoughtSchema = new mongoose.Schema(
    {
        thoughtText: {
            type: String, 
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        
        createdAt: {
            type :Date,
            default: () => Date.now(),
        },
        //use a getter method to format the timestamd on query

        username: {
            type: String, 
            required: true
        },

        reactions: {}
        //array of nested documents created with the reactionSchema


    }
)
// creating a model of the thought schema
const thoughts = mongoose.model('thought', thoughtSchema);
//exporting
module.exports = thoughts;