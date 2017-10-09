var mongoose = require('mongoose');
var Schema = mongoose.Schema,
 ObjectId = Schema.ObjectId;


var doctorSchema = new Schema({
  _id:  ObjectId,
  _class: String,
  versionNumber:   String,
  NAME: String,
  DOB: Date,
  SEX: String,
  ADDR: {ADDR1 : String, ADDR2 : String, CITY : String, STATE: String, ZIP : String },
  FATHR : String,
  ADHAAR : String,
  EMAIL : String,
  PHONE : [ 
      {type : String}
    ],
 SPECIALIZATIONS : [ 
      { type : String}
    ],
 QUALIFICATION : [ 
     {type : String}
    ],
 PRACTICES : [ 
     {type : ObjectId}
    ],
 CLINICS : [ 
     {type : ObjectId}
    ],
 UID : String,
 picURL : String,
 CREATE_DATE : Date,
 ASSISTANTS : [ 
        ObjectId
    ]

}, { collection: 'Doctors' });

var Doctors = mongoose.model('Doctors', doctorSchema);

// make this available to our users in our Node applications
module.exports = Doctors;

