const { Schema, model, default: mongoose}= require('mongoose');




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
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought'
                
            }
        ],
                      
        //array of id reference user model()
        friends: [
            {
            type: Schema.Types.ObjectId,
            ref: 'Users',
            
            }
        ],
    },
    {
        toJson: {
            virtuals: true,
        },
        id: false,
    },
    
);

//adding virtual to find total number of friends 
userSchema.virtual('friendCount').get(function(){
    return this.friends.length;

});


const users = mongoose.model('users', userSchema);

module.exports = users;
    