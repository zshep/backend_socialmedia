const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        //to do: figure out how to add in trimmed
        username: {type: String, required: true, unique: true, trimmed: true},
                    // -trimmed
        email: {
            type: String,
            required: true,
            unique: true,
            //must match a valid email adress (look up Mongo how to)
    },
            
            //thoughts:
                //array of id referenceing thought model
            
            
            //friends:
                //array of id reference user model()
            
            
            //friendCount
                // retrieve friendarray.length
        
    }
    
    )
    