var mongoose = require('mongoose');
var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;

var practiceSchema = new Schema(
        {
"_id" : ObjectId,
 "_class" : String,
 "VERSIONNUMBER" : String,
 "NAME" : String,
 "OWNER" : String,
 "SERVICETYPE" : String,
 "ADDR" : {
     "ADDR1" : String,
     "ADDR2" : String,
     "CITY" : String,
     "ZIP" : String
 },
 "PHONE" : [ 
     String
 ],
 "SPCLZs" : [ 
     String
 ],
 "APPTHR" : Number,
 "TTL" : Number,
 "DOCs" : [ 
     ObjectId
 ],
 "ASSTs" : [ 
     ObjectId
 ],
 "CLNCs" : [ 
     ObjectId
 ],
 "ASSISTANTHELPERs" : [ 
     ObjectId
 ],
 "CREATE_DATE" : Date,
 "updateDate" : Date
        }, { collection: 'Practice' });
   
var PracticeCollection = mongoose.model('Practice', practiceSchema);

// make this available to our users in our Node applications
module.exports = PracticeCollection;

        