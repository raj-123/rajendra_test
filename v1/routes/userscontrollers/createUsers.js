var users = require('/health-trace/v1/models/users.js');
var ObjectId = require('mongodb').ObjectID;

exports.createUser = function(req, res){
console.log('CreateUser API processing .....');
var username = req.body.username;
console.log(username);
users.find({"username" : username}, function(err, getData){
    if(err){
            console.log(err);
            res.send(err);
    }
    else if(getData.length){
        console.log('User already exists');
        res.send('User already exists');
    }
    else
        {
            var newUser = users(req.body);
            var ID = new ObjectId();
            newUser._id = ID;
            newUser.save(function(err){
                if(err){
                    console.log(err);
                    res.send(err);
                }
                else{
                console.log('Document saved.');
                res.send('Document saved');
                }
            })
        }

    
} )


}


