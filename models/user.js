const mongoose= require('mongoose');
const userSchema= new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
}, {
    //mongoose will keep record of 'createdAt' and 'updatedAt' by using timestamps
    timestamps: true
});

const user= mongoose.model('user', userSchema);
module.exports= user;