const mongoose = require('mongoose');




            //thoughts:
                //array of id referenceing thought model
            

            
            //friends:
                //array of id reference user model()



const userSchema = new mongoose.Schema(
    {
        //to do: figure out how to add in trimmed
        username: {type: String, required: true, unique: true, trimm: true},
                   
        email: {type: String, required: true, unique: true,    trim: true},
        // use match to make sure it's a valid email address.
            
            
            //friendCount
                // retrieve friendarray.length
        
    }
    
    )
    