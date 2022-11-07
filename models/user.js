const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        // different keys to the userSchema 
        username: {
            type: String, 
            required: true, 
            unique: true, 
            trimm: true
        },
        email: {
            type: String, 
            required: true, 
            unique: true,    
            trim: true,
            lowercase: true,
            immutable: false,
            //match: '/.+\@.+\..+/',
        },
        
        //array of id referenceing thought model
        thoughts: [],
                      
        //array of id reference user model()
        friends: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Users'
            //friendCount
                // retrieve friendarray.length
         }

    }     
);

const users = mongoose.model('user', userSchema);


//handle error (if any)
const handleError = (err) => console.error(err);


module.exports = users;
    