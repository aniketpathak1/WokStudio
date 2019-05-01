var mysql = require('mysql');
const db = require('../config/db.config.js');
var bcrypt = require('bcrypt');

exports.addAdminToDB = (req, res) => {
  let data = req.body;
  let password = data.pwd;
  let hashPass;
  if (password) {
    hashPass = cryptPassword(password);
  }
  console.log("hashPass", hashPass);
  let query1 = `select 1 from useradmin where username = '${data.username}' or email = '${data.email}'`;
  db.sequelize.query(query1,
    {
      type: db.Sequelize.QueryTypes.SELECT
    }).then((rows) => {
      console.log("if user exists", rows);
      if (rows.length == 0) {
        let query = `insert into useradmin (firstName, lastName, email, username, pwd) value('${data.firstName}',
        '${data.lastName}','${data.email}','${data.username}','${hashPass}')`;
        db.sequelize.query(query,
          {
            type: db.sequelize.QueryTypes.INSERT
          }).then(([results, metadata]) => {
            console.log("rows affected", metadata);
          })
      }
      else{
        console.log("User already exists");
      }
    })
}

cryptPassword = (password) => {
  let hashPass = bcrypt.hashSync(password, 10);
  return hashPass;
};