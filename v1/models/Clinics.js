var mongoose = require('mongoose');
var Schema = mongoose.Schema,
 ObjectId = Schema.ObjectId;
 var clinicsSchema = new Schema({
    _id:  ObjectId,
    "_class" : String,
    "NAME" : String,
    "VERSIONNUMBER" : String,
    "ADDR" : {
        "ADDR1" : String,
        "ADDR2" : String,
        "CITY" : String,
        "ZIP" : String
    },
    "PHONE" : [ 
        String
    ],
    "PRCTC" : ObjectId,
    "DOCs" : [ 
        {
            "DOCTORID" : ObjectId,
            "tax_rate" : Number,
            "Services" : [ 
                {
                    "_id" : ObjectId,
                    "service" : String,
                    "charge" : Number,
                    "category" : String
                }
            ],
            "SCAN_ASSIST" : ObjectId,
            "GUARDBANDTIME" : Number,
            "DOCTORSESSION" : [ 
                {
                    "SESSIONDAY" : Number,
                    "DOCTORSESSION" : [ 
                        {
                            "STARTTIMEV2" : Number,
                            "ENDTIMEV2" : Number,
                            "actualSession" : {
                                "STARTTIME" : Number,
                                "ENDTIME" : Number
                            },
                            "alottedToPatient" : [ 
                                {
                                    "STARTTIME" : Number,
                                    "ENDTIME" : Number
                                }
                            ],
                            "ASSISTANTID" : ObjectId,
                            "SESSION_TYPE" : Number,
                            "APPOINTMENT_TOKEN_START_NUMBER" : Number,
                            "WALKIN_TOKEN_START_NUMBER" : Number
                        }
                    ]
                }
                
            ],
            "messageTimingList" : [ 
                Number
            ],
            "invoice_num" : Number,
            "validityDaysForBill" : Number,
            "validVisits" : Number,
            "notificationDoc" : false,
            "docCommunicationDisabled" : false
        }
    ],
    "ASTTs" : [ 
        {
            "ASTTID" : Object,
            "DOCs" : [ 
                ObjectId
            ]
        }
    ],
    "CREATE_DATE" : Date
}
   , { collection: 'Clinics' });
  
  var Clinics = mongoose.model('Clinics', clinicsSchema);
  
  // make this available to our users in our Node applications
  module.exports = Clinics;


  