const { Schema, model, default: mongoose}= require('mongoose');
const moment = require('moment');

const reactionSchema = new mongoose.Schema(
    {
        reactionsId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId,

        },

        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
        },
        username: {
            type: String,
            rquired: true,

        },

        createdAt: {
            type: Date,
            default: () => Date.now(),
            get: (time) => moment(time).format('MMMM Do YYYY, h:mm:ss a'),
        }

    },
    {
        toJson: {
            virtuals: true,
            getters: true,
        },
        id: false,
    },

)

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
            get: (time) => moment(time).format('MMMM Do YYYY, h:mm:ss a'),
        },

        username: {
            type: String, 
            required: true
        },

        //array of nested documents created with the reactionSchema
        reactions: [reactionSchema]
    },
    {
        toJson: {
            virtuals: true,
            getters: true,
        },
        id: false,
    },
)

// virtual to get the total amount of reactions in a given thought

thoughtSchema.virtual('reactionCounter').get(function(){
    return this.reactions.length;
});


// creating a model of the thought schema
const thoughts = mongoose.model('thoughts', thoughtSchema);
//exporting
module.exports = thoughts;