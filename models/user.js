/******************************************************************************
 *
 *  user.js - Model for USER
 *
 *****************************************************************************/

var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId;

var userSchema;
userSchema = mongoose.Schema({

    _id: ObjectId,
    uid: String,
    isactive: {type: Boolean, default: true},
    imagedp: String,   // image dp
    role: Number,
    email: String,
    password: String,
    city: String,
    name: String,
    phone: String,
    aboutme: String,    // member-specific
    colorcode: String,

    createdat: {type: Date, default: Date.now}
});

module.exports = mongoose.model('User', userSchema);

/***********************************  END  ***********************************/