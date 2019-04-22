const db = require('../config/db.config.js');
var bcrypt = require('bcrypt');
const Customer = db.customers;


exports.login = (req, res) => {
    let cust = req.body;
    let username = req.body.username;
    let pass = req.body.password;
    console.log('customer', cust, 'username', username, 'password', pass);
};

exports.cryptPassword = (password, callback) => {
    bcrypt.genSalt(10, function(err, salt) {
     if (err) 
       return callback(err);
 
     bcrypt.hash(password, salt, function(err, hash) {
       return callback(err, hash);
     });
   });
 };
 
 exports.comparePassword = (plainPass, hashword, callback) => {
    bcrypt.compare(plainPass, hashword, function(err, isPasswordMatch) {   
        return err == null ?
            callback(null, isPasswordMatch) :
            callback(err);
    });
 };