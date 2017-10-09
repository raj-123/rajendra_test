var Doctors = require('/health-trace/v1/models/Doctors.js');
var Patients = require('/health-trace/v1/models/Patients.js'); 
var Clinics = require('/health-trace/v1/models/Clinics.js'); 
var Practice = require('/health-trace/v1/models/Practice.js'); 
var ObjectId = require('mongodb').ObjectID;


exports.getDoctorbyId = function(req, res){
    logger.debugLevel = 'info';
    logger.log('info', 'Everything started properly.');
    console.log('Processing getDOcbyId API');
    var doctorId = new ObjectId(req.query.doctorId);
    Doctors.find({_id : doctorId}, function(err, doctorData){
        if(err){
            console.log('error');
            res.send(err);
        }
        else{
            console.log(doctorData);
            res.send(doctorData);
        }
    })
}
exports.getDoctorsPatients = function(req, res){
    console.log('Processing getDoctorPatients API');
    doctorId = new ObjectId(req.query.doctorId);
    Doctors.find({_id : doctorId}, function(err, docData){
        if(err){
            console.log(err);
            res.send(err);
        }
        else if(docData.length > 0){
            Patients.find({DOCTORS : doctorId},function(err, patientData){
                if(err){
                    console.log(err);
                    res.send(err);
                }
                else{
                    console.log(patientData);
                    res.send(patientData);
                }
            })
        }
        else
            {
                console.log('Doctor does not exist');
                res.send('Doctor does not exist');
            }
    })
    
}
    
exports.getDoctorsClinics = function(req, res){
    console.log('processing getDoctorsClinics API');
    var doctorId = new ObjectId(req.query.doctorId);
    var clinicIDs = [];
    var clinicDocData = {};
    var doctorName = "";

    var clinicNameArray = new Array();
    Doctors.find({_id : doctorId}, function(err, docData){
        if(err){
            console.log(err); res.send(err);
        }
        else
            {
                console.log(docData);
                for(var i = 0; i <docData.length; i++){
                    var docDocument = docData[i];
                    doctorName = docDocument.NAME;
                    console.log('doctorName : ', doctorName);
                    var clinics = docDocument.CLINICS;
                    console.log('CLINICS : '+clinics);
                    Clinics.find({_id : {$in :clinics }}, function(err, clinicData){
                        if(err){
                            console.log(err);
                            res.send(err);
                        }
                        else
                            {
                                clinicDocData.doctorName = doctorName;
                                clinicDocData.clinics = clinicData;
                                console.log(clinicDocData);
                                res.send(clinicDocData);
                            }
                    })
                }
            }
    })
}

// get whole  doctor details i.e. clinic, practice etc.
exports.getFullDocdetails = function(req, res){
    var doctorId = new ObjectId(req.query.doctorId);
    console.log('Given doctorId : ', doctorId);
    var docsFullData = {};
    var clinicNameArray = new Array();
    var practiceNameArray = new Array();
    Doctors.find({_id : doctorId}, function(err, docsData){
        if(err){
            console.log(err);
            res.send(err);
        }
        else
            {
                for(var i=0; i<docsData.length; i++){
                    var docsDocument = docsData[i];
                    docsFullData.doctorName = docsDocument.NAME;
                    var clinics = docsDocument.CLINICS;
                    var practices = docsDocument.PRACTICES;
                    Clinics.find({ _id : {$in : clinics}}, function(err, clinicData){
                        if(err){
                            console.log(err);
                            //res.send(err);
                        }
                        else
                            {
                                for(var k=0;k<clinicData.length; k++){
                                    var clinicDoc = clinicData[k];
                                    clinicNameArray.push(clinicDoc.NAME);

                                }
                                docsFullData.clinicName = clinicNameArray;
                            }
                    })
                Practice.find({_id : {$in : practices }}, function(err, practiceData){
                    if(err){
                        console.log(err);

                    }
                    else{
                        for(var i =0;i<practiceData.length;i++){
                            var practiceDocument =practiceData[i];
                            practiceNameArray.push(practiceDocument.NAME);
                        }
                        docsFullData.practiceName = practiceNameArray;
                        res.send(docsFullData);
                        
                    }
                })
                }
            }
    }) 
    
}