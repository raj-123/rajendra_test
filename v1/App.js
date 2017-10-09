var express     = require('express');
var basicAuth = require('express-basic-auth');
var basicAuth = require('basic-auth');
var path = require('path');
var auth = require('auth');
var app = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var fs = require('fs')
var mongoose = require('mongoose');
var config = require('./config')
var app = express();
var users = require('/health-trace/v1/models/users.js'); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})
// function for authentication
var isAuthenticated = function(username , password , callback){
    users.find({"username" : username, "password" : password }, function(err, usersData){
        var status = false;
        if(err){
                status = false;
        }
        else{
            if(userData.length > 0){
                status = true;
            }
            else{
                status = false;
            }
        }
        return callback(status);
    })
}

// setup the logger
//app.use(morgan('combined', {stream: accessLogStream}))
app.use(morgan('{"remote_addr": ":remote-addr", "remote_user": ":remote-user", "date": ":date[clf]", "method": ":method", "url": ":url", "http_version": ":http-version", "status": ":status", "result_length": ":res[content-length]", "referrer": ":referrer", "user_agent": ":user-agent", "response_time": ":response-time"}', {stream: accessLogStream}));

mongoose.connect(config.database);
var port = process.env.PORT || 9000;
app.get('/health-trace/v1/test', function(req, res){
    console.log("Hi");
    console.log('Hello');
    res.send("Hi Welcome to node.js");

})
// create users
createUser = require('./routes/userscontrollers/createUsers');
app.post('/health-trace/v1/createuser', createUser.createUser);
// find User by _id
getUserbyId = require('./routes/userscontrollers/getUserById');
app.get('/health-trace/v1/getUserbyId?', getUserbyId.getUserDeails);

//update User by _id
updateUserbyId = require('./routes/userscontrollers/updateUserbyId');

app.put('/health-trace/v1/updateUserbyId?',updateUserbyId.updateUserbyId);

// find doctor by Id
getDocById = require("./routes/doctorsControllers/doctorCOntrollers");
app.get('/health-trace/v1/getDoctorbyId?',getDocById.getDoctorbyId);
// getPatients by doctorId 
getPatientsbyDocId = require("./routes/doctorsControllers/doctorCOntrollers");
app.get('/health-trace/v1/getPatientsbydocId?',getPatientsbyDocId.getDoctorsPatients );
// getdoctors clinics 
getDocsClinics = require("./routes/doctorsControllers/doctorCOntrollers");
app.get('/health-trace/v1/getClinicsbydocId?',getDocsClinics.getDoctorsClinics);

// getFull doctor info
getFulldocInfo = require("./routes/doctorsControllers/doctorCOntrollers");
app.get('/health-trace/v1/getfullDocInfobyId?',getFulldocInfo.getFullDocdetails );
app.listen(port);



    