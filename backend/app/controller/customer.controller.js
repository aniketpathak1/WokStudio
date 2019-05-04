var mysql = require('mysql');
const db = require('../config/db.config.js');
var bcrypt = require('bcrypt');
exports.login = (req, res) => {
  let user = req.body;
  let username = req.body.username;
  let password = req.body.password;
  let adminCheck = req.body.dropdownCheck;
  console.log("adminCheck", adminCheck);
  let userId;
  if(!adminCheck){
    let query = `select id from userprofile where username = '${username}' AND pwd='${password}'`;
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
    //      res.send({token});
          
    }
    }
  );
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

}
;


cryptPassword = (password) => {
console.log("password", password);
let hashPass = bcrypt.hashSync(password, 10);
console.log("hashPass", hashPass); 
return hashPass;
};


exports.userSignUp = (req, res) => {
  console.log("customer.controller.js");
  let signUp = req.body;
  let username = signUp.username;
  let firstname = signUp.firstname;
  let lastname = signUp.lastname;
  let email = signUp.email;
  let phone = signUp.phone;
  let password = signUp.pwd;
  let confirmpwd = signUp.confirmpwd;
  let hashPass;

  let data = req.body;
  let hashpwd = cryptPassword(data.newpwd);
  bcrypt.compare(data.confirmpwd, hashpwd, (err, response) => {
      if (response) {
     //     let query = `update userprofile set pwd = '${hashpwd}' where id = ${data.id}`;


 // if(password == confirmpwd){
  //   hashPass = bcrypt.genSalt(10, function(err, salt) {
  //     if (err) 
  //       return callback(err);
  
  //     bcrypt.hash(password, salt, function(err, hash) {
  //       return callback(err, hash);
  //     });
  //   });
  // }
  // if(hashPass){
  //   console.log("in hashPass");
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
} )
}
}
