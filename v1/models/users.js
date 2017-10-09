var mongoose = require('mongoose');
var Schema = mongoose.Schema,
 ObjectId = Schema.ObjectId;


var usersSchema = new Schema({
     "_id" : ObjectId,
    "_class" : String,
    "username" : String,
    "password" : String,
    "status" : Number,
    "enabled" : Boolean,
    "verificationCodeValid" : Boolean,
    "ipAddress" : String,
    "portNumber" : Number,
    "role" : String,
    "loggedin" : Boolean,
    "loginTime" : Date,
    "ipUpdateDateTime" : Date,
    "tokenGenerationTime" : Date,
    "lastRequestTime" : Date,
    "sessionToken" : String,
    "gcmId" : String,
    "isMedOffersEnabled" : Boolean,
    "isTermsChecked" : Boolean,
    "isFCMEnabled" : Boolean

}, { collection: 'users' });

var users = mongoose.model('users', usersSchema);

// make this available to our users in our Node applications
module.exports = users;


