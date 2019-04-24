var mysql = require('mysql');
const db = require('../config/db.config.js');
var bcrypt = require('bcrypt');
const saltRounds = 10;
const Customer = db.customers;


exports.login = (req, res) => {
    let user = req.body;
    let username = req.body.username;
    let password = req.body.password;
    let userId;
    let query = `select id, pwd from customer where username = '${username}'`;
    db.sequelize.query(query,
    {
      type: db.sequelize.QueryTypes.SELECT 
    })
    .then((rows) => {
        //console.log("hash password from db", rows[0]['pwd']);
        bcrypt.compare(password, rows[0]['pwd'], function(err, response) {
          // res == true
          if(response) {
            userId = rows[0]['id'];
            console.log("password matched with user id: ", userId);
            res.json(userId);
          }
          else{
            console.log("wrong password");
          }
      });
    });
    console.log('user', user);
};

cryptPassword = (password) => {
  console.log("password", password);
  let hashPass = bcrypt.hashSync(password, 10);
  console.log("hashPass", hashPass); 
  return hashPass;
};
 