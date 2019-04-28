var mysql = require('mysql');
const db = require('../config/db.config.js');
//const session = require('express-session');
var bcrypt = require('bcrypt');
/*
app.use(passport.initialize());
app.use(passport.session());
*/
const saltRounds = 10;
const Customer = db.customers;

const jwt = require('jsonwebtoken')

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
      // if(rows.length>0) {
      //   //console.log("hash password from db", rows[0]['pwd']);
      //   bcrypt.compare(password, rows[0]['pwd'], function(err, response) {
      //     // res == true
      //     if(response) {
      //       userId = rows[0]['id'];
      //       console.log("password matched with user id: ", userId);
      //       const token = jwt.sign({ _id: 'abc123'}, 'ujvfuincyfugugv')
      //       res.json(token);
      //     }
      //     else{
      //       console.log("wrong password");
      //     }
      // });
      // }

      
            const token = jwt.sign({ _id: 'abc123'}, 'ujvfuincyfugugv')
            res.json(token);
    });
    console.log('user', user);
};


cryptPassword = (password) => {
  console.log("password", password);
  let hashPass = bcrypt.hashSync(password, 10);
  console.log("hashPass", hashPass); 
  return hashPass;
};


