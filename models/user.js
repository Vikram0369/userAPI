var mongoose = require('mongoose');
var Schema = mongoose.Schema;

UserSchema = new Schema({
    address : String,
    address_line_2 : String,
    city : String,
    Country : String,
    email : String,
    first_name : String,
    gender : String,
    last_name : String,
    phone_number : String,
    postal_code : String,
    Province : String
});
module.exports = mongoose.model('user', UserSchema, 'user') //the second user is the collection of in which data should be updated