var users = require('/health-trace/v1/models/users.js');
var ObjectId = require('mongodb').ObjectID;
console.log('GET USER DETAILS API CALIING STARTING ............');
exports.getUserDeails = function(req, res)
{
    var userId =  new ObjectId(req.query.userId);
    console.log('Fetching input parameter');
    users.find({_id  : userId}, function(err, userData){
    if (err)
    {
        console.log(err);
        res.send(err);
        
        
    }
    else
    {
        console.log('Fetching users');
        console.log(userData);
        res.send(userData);
    }
    }
            )
    

};

