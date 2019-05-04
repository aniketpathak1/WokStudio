var mysql = require('mysql');
const db = require('../config/db.config.js');
var bcrypt = require('bcrypt');

exports.getUserDetails = (req, res) => {
    let userId = req.query.userId;
    console.log("user id is", userId);
    let query = `select * from userprofile where id = ${userId}`;
    db.sequelize.query(query,
        {
            type: db.sequelize.QueryTypes.SELECT
        }).then((rows) => {
            console.log("user details", rows);
            res.json(rows);
        })
}

exports.UpdateUserName = (req, res) => {
    let data = req.body;
    let query = `update userprofile set firstName = '${data.firstname}', lastName = '${data.lastname}' where id = ${data.id}`;
    db.sequelize.query(query, {
        type: db.sequelize.QueryTypes.INSERT
    }).then((rowsUpdated) => {
        res.json(rowsUpdated);
    })
}

exports.UpdateUserEmail = (req, res) => {
    let data = req.body;
    let query = `update userprofile set emailAddress = '${data.newemail}' where id = ${data.id}`;
    db.sequelize.query(query, {
        type: db.sequelize.QueryTypes.INSERT
    }).then((rowsUpdated) => {
        res.json(rowsUpdated);
    })
}

exports.UpdateUserContact = (req, res) => {
    let data = req.body;
    let query = `update userprofile set phoneint = '${data.contact}' where id = ${data.id}`;
    db.sequelize.query(query, {
        type: db.sequelize.QueryTypes.INSERT
    }).then((rowsUpdated) => {
        res.json(rowsUpdated);
    })
}

exports.UpdateUserPwd = (req, res) => {
    let data = req.body;
    let hashpwd = cryptPassword(data.newpwd);
    bcrypt.compare(data.confirmpwd, hashpwd, (err, response) => {
        if (response) {
            let query = `update userprofile set pwd = '${hashpwd}' where id = ${data.id}`;
            db.sequelize.query(query, {
                type: db.sequelize.QueryTypes.INSERT
            }).then((rowsUpdated) => {
                res.json(rowsUpdated);
            })
        }
    })
}

cryptPassword = (password) => {
    console.log("password", password);
    let hashPass = bcrypt.hashSync(password, 10);
    console.log("hashPass", hashPass);
    return hashPass;
};

exports.UpdateAddress = (req, res) => {
    let data = req.body;
    let query = `update userprofile set address = '${data.address}' where id = ${data.id}`;
    db.sequelize.query(query, {
        type: db.sequelize.QueryTypes.INSERT
    }).then((rowsUpdated) => {
        res.json(rowsUpdated);
    })
}

exports.GetFavoriteProducts = (req, res) => {
    let productId = req.query.id;
    console.log("productId", productId);
    let query1 = `select p.id,p.stockQty,cuisineName,proteinName,foodPreference,foodType,price,filePath,title from cuisines cu,protein pro,
            foodpreference as fp,foodtype as ft,product as p  where cu.id = (select cuisineId from product where id = ${productId} group by cuisineId) 
            and pro.id = (select protienId from product where id = ${productId} group by protienId) and fp.id = (select foodPrefId from 
            product where id = ${productId} group by foodPrefId) and ft.id = (select typeId from product where id = ${productId} 
            group by typeId) and p.id = ${productId}`;
    db.sequelize.query(query1, {
        type: db.sequelize.QueryTypes.SELECT
    }).then((rows) => {
        res.json(rows[0]);
    })
}

exports.GetBasketProducts = (req, res) => {
    let data = req.query.basket;
    console.log(data);
    let productId = Number(data);
    console.log("productId", productId);
    let query1 = `select p.id,p.stockQty,cuisineName,proteinName,foodPreference,foodType,price,filePath,title from cuisines cu,protein pro,
            foodpreference as fp,foodtype as ft,product as p  where cu.id = (select cuisineId from product where id = ${productId} group by cuisineId) 
            and pro.id = (select protienId from product where id = ${productId} group by protienId) and fp.id = (select foodPrefId from 
            product where id = ${productId} group by foodPrefId) and ft.id = (select typeId from product where id = ${productId} 
            group by typeId) and p.id = ${productId}`;
    db.sequelize.query(query1, {
        type: db.sequelize.QueryTypes.SELECT
    }).then((rows) => {
        res.json(rows[0]);
    })
}

exports.GetFavProdIds = (req, res) => {
    let id = req.query.id;
    let query = `select productId from favorites where userId = ${id}`;
    db.sequelize.query(query, {
        type: db.sequelize.QueryTypes.SELECT
    }).then((rows) => {
        console.log(rows);
        res.json(rows);
    })
}
