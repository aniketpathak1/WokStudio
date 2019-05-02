var mysql = require('mysql');
const db = require('../config/db.config.js');
var bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

exports.login = (req, res) => {
  let user = req.body;
  let username = req.body.username;
  let password = req.body.password;
  let adminCheck = req.body.dropdownCheck;
  console.log("adminCheck", adminCheck);
  let userId;
  if(!adminCheck){
    let query = `select id, pwd from customer where username = '${username}' AND pwd='${password}'`;
    db.sequelize.query(query,
    {
      type: db.sequelize.QueryTypes.SELECT 
    })
    .then((rows) => {
      if(rows.length>0) {
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
          const token = jwt.sign({ _id: username}, 'ujvfuincyfugugv')
          console.log(token);
          let response = {user: 'user'};
          console.log(response);
          res.json(response);
          
    }
    }
  );
  //console.log('user', user);
}
else{
      let query = `select id, pwd from useradmin where username = '${username}' AND pwd='${password}'`;
      db.sequelize.query(query,
      {
        type: db.sequelize.QueryTypes.SELECT 
      })
      .then((rows) => {
        if(rows.length>0) {
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
              const token = jwt.sign({ _id: username}, 'ujvfuincyfugugv')
              console.log(token);
              let response = {user: 'admin'};
              console.log(response);
              res.json({user: 'admin'});
              
        }
    }
  );
  //console.log('user', user);

}
;


cryptPassword = (password) => {
console.log("password", password);
let hashPass = bcrypt.hashSync(password, 10);
console.log("hashPass", hashPass); 
return hashPass;
};


exports.UserSignUp = (req, res) => {
  let signUp = req.body;
  let username = signUp.username;
  let firstname = signUp.firstname;
  let lastname = signUp.lastname;
  let email = signUp.email;
  let phone = signUp.phone;
  let password = signUp.pwd;
  let confirmpwd = signUp.confirmpwd;
  let hashPass;

  if(password == confirmpwd){
    hashPass = bcrypt.genSalt(10, function(err, salt) {
      if (err) 
        return callback(err);
  
      bcrypt.hash(password, salt, function(err, hash) {
        return callback(err, hash);
      });
    });
  }
  if(hashPass){
    let query1 = `insert into userprofile (userId, firstName, lastName, emailAddress, phoneint) values (${username}, ${firstname}, ${lastname}, ${email}, ${phone} )`;
    let query2 = `insert into customer (username, pwd) values (${username}, ${hashPass})`;
    db.sequelize.query(query1,
    {
      type: db.sequelize.QueryTypes.INSERT 
    })
    db.sequelize.query(query2,
      {
        type: db.sequelize.QueryTypes.INSERT 
      })
  }
} 
}