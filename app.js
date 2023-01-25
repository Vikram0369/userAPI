var express  = require('express');
var mongoose = require('mongoose');
var app      = express();
var database = require('./config/database');
var bodyParser = require('body-parser');         // pull information from HTML POST (express4)

var port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

mongoose.connect(database.url);
var User = require('./models/user');

app.get('/', function(req,res){
    // res.send("hello World")
    User.find(function(err,info){
        res.json(info)
    })
})



app.post('/user', function(req,res) {
    console.log(req.body);

    User.create({
        address : req.body.address,
        address_line_2 : req.body.address_line_2,
        city : req.body.city,
        Country : req.body.Country,
        email : req.body.email,
        first_name : req.body.first_name,
        gender : req.body.gender,
        last_name : req.body.last_name,
        phone_number : req.body.phone_number,
        postal_code : req.body.postal_code,
        Province : req.body.Province

    }
    , function(err, user){
        if(err) {
            res.send(err)
        } else {
            User.find(function(err,users) {
                if (err) {
                    res.send(err)
                } else {
                    res.json(users)
                }
                    
            })
        }
    }
    )
})

app.listen(port);
console.log("App listening on port : " + port);