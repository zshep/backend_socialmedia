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
            //match: '/.+\@.+\..+/',
        },
        
        //array of id referenceing thought model
        thoughts: [],
                      
        //array of id reference user model()
        friends: [mongoose.SchemaTypes.ObjectId],
        
            //friendCount
                // retrieve friendarray.length
    } 
);

const user = mongoose.model('user', userSchema);
if(user){
    user.collection.drop();
    
} else {
    console.log('better hold on to your buts')
};

//handle error (if any)
const handleError = (err) => console.error(err);

user.create(
    {
        username: 'Q',
        email: 'Q@gmail.com',
    
    },
    (err) => (err ? handleError(err) : console.log('user document created'))

)

module.exports = user;
    