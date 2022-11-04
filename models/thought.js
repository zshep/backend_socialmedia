const mongoose =require('mongoose');


const thoughtSchema = new mongoose.Schema(
    {
        thoughtText: {type: String, require: true,},
        //add in requirement for text to be 1-280 characters
        createdAt :{ type: Date,
        },
        //set deault value to the current timestamp
        //use a getter method to format the timestamd on query

        username: {type: String, require: true}


    }
)