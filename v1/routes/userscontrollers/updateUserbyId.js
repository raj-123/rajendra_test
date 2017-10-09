var users = require('/health-trace/v1/models/users.js');
var ObjectId = require('mongodb').ObjectID;
console.log('UPDATE USER API CALIING STARTING ............');
exports.updateUserbyId = function(req, res)
{
    req.setEncoding('utf8');
    var username = req.body.username;
    console.log(req.body);
    var userId =  new ObjectId(req.query.userId);
    console.log('Fetching input parameter');
    console.log(req.body.username);
    users.update({_id : userId}, {$set : {username : req.body.username}}
        
        , function(err, userData){
    if (err)
    {
        console.log(err);
        res.send(err);
        
        
    }
    else
    {
        console.log('updating....');
        console.log(userData);
        console.log('Updated');
        res.send(userData);
    }
    }
            )
    

};

