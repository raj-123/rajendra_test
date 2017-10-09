var mongoose = require('mongoose');
var Schema = mongoose.Schema,
 ObjectId = Schema.ObjectId;
 var patientsSchema = new Schema({
    _id:  ObjectId,
    "_class" : String,
    "NAME" : String,
    "age" : Number,
    "FATHR" : String,
    " SPOUSE_NAME" : String,
    "SEX" : String,
    "ADDR" : {
        "ADDR1" : String,
        "CITY" : String,
        "STATE" : String,
        "ZIP" : String
    },
    "ADHAAR" : String,
    "EMAIL" : String,
    "LANDLINE" : String,
    "PHONE" : String,
    "DOCTORS" : [ 
        ObjectId
    ],
    "DOCTORANDCLINICS" : [ 
        {
            "DOCTORID" : ObjectId,
            "DOCCLINICS" : [ 
               ObjectId
            ],
            "localId" : String,
            "localIdv2" : String
        }
    ],
    "APPOINTMENTS" : {
        "CURRENTPOINTER" : Number
    },
    "MEDICALPROFILE" : {
        "BLOODGROUP" : String,
        "SPECS" : false
    },
    "CREATE_DATE" : Date,
    "UPDATE_DATE" : Date,
    "MEDICALPROFILESCANNED" : false,
    "DELETED" : false,
    "reviewed" : false,
    "REFERENCE_DOB" : Date
  }, { collection: 'Patients' });
  
  var Patients = mongoose.model('Patients', patientsSchema);
  
  // make this available to our users in our Node applications
  module.exports = Patients;

  