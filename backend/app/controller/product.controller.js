const db = require('../config/db.config.js');

exports.getProductCategories = (req, res) => {
    let query = `select proteinName from protein`;
    db.sequelize.query(query,
        {
            type: db.sequelize.QueryTypes.SELECT
        })
        .then((rows) => {
            let data = [];
            data.push('Select the protein');
            //console.log("rows", rows);
            if (rows.length > 0) {
                for (let i in rows) {
                    data.push(rows[i]['proteinName']);
                }
            }
            //console.log("data", data);
            res.json(data);
        });
};
exports.getProductTypes = (req, res) => {
    let query = `select foodType from foodtype`;
    db.sequelize.query(query,
        {
            type: db.sequelize.QueryTypes.SELECT
        })
        .then((rows) => {
            let data = [];
            data.push('Select the food type');
            //console.log("rows", rows);
            if (rows.length > 0) {
                for (let i in rows) {
                    data.push(rows[i]['foodType']);
                }
            }
            //console.log("data", data);
            res.json(data);
        });
};
exports.getProductCuisines = (req, res) => {
    let query = `select cuisineName from cuisines`;
    db.sequelize.query(query,
        {
            type: db.sequelize.QueryTypes.SELECT
        })
        .then((rows) => {
            let data = [];
            data.push('Select the cuisine');
            //console.log("rows", rows);
            if (rows.length > 0) {
                for (let i in rows) {
                    data.push(rows[i]['cuisineName']);
                }
            }
            //console.log("data", data);
            res.json(data);
        });
};
exports.getProductPreferences = (req, res) => {
    let query = `select foodpreference from foodpreference`;
    db.sequelize.query(query,
        {
            type: db.sequelize.QueryTypes.SELECT
        })
        .then((rows) => {
            let data = [];
            data.push('Select the food preference');
            //console.log("rows", rows);
            if (rows.length > 0) {
                for (let i in rows) {
                    data.push(rows[i]['foodpreference']);
                }
            }
            //console.log("data", data);
            res.json(data);
        });
};

exports.addProductinDB = (req, res) => {
    let data = req.body;
    console.log("data", data);
    let cuisineId;
    let foodPrefId;
    let typeId;
    let proteinId;
    let query = `Insert into product(title,price) values('${data.title}',${data.price})`;
    db.sequelize.query(query,
        {
            type: db.sequelize.QueryTypes.INSERT
        })
        .then(([results, metadata]) => {
            db.sequelize.query(`select id from cuisines where cuisineName='${data.cuisine}'`,
                {
                    type: db.sequelize.QueryTypes.SELECT
                })
                .then((rows) => {
                    //console.log("rows", rows);
                    this.cuisineId = rows[0]['id'];
                    //console.log(this.cuisineId);
                    db.sequelize.query(`insert into product (cuisineId) values('${this.cuisineId}')`,
                        {
                            type: db.sequelize.QueryTypes.INSERT
                        }).then(([results, metadata]) => {
                            console.log("rows affected", metadata);
                        });
                });

            db.sequelize.query(`select id from foodpreference where foodpreference='${data.foodPref}'`,
                {
                    type: db.sequelize.QueryTypes.SELECT
                })
                .then((rows) => {
                    //console.log("rows", rows);
                    this.foodPrefId = rows[0]['id'];
                    //console.log(this.cuisineId);
                    db.sequelize.query(`insert into product (foodPrefId) values('${this.foodPrefId}')`,
                        {
                            type: db.sequelize.QueryTypes.INSERT
                        }).then(([results, metadata]) => {
                            console.log("rows affected", metadata);
                        });
                })
            db.sequelize.query(`select id from foodtype where foodType='${data.type}'`,
                {
                    type: db.sequelize.QueryTypes.SELECT
                })
                .then((rows) => {
                    this.typeId = rows[0]['id'];
                    db.sequelize.query(`insert into product (typeId) values('${this.typeId}')`,
                        {
                            type: db.sequelize.QueryTypes.INSERT
                        }).then(([results, metadata]) => {
                            console.log("rows affected", metadata);
                        });
                })
            db.sequelize.query(`select id from protein where proteinName='${data.protein}'`,
                {
                    type: db.sequelize.QueryTypes.SELECT
                })
                .then((rows) => {
                    this.proteinId = rows[0]['id'];
                    db.sequelize.query(`insert into product (protienId) values('${this.proteinId}')`,
                        {
                            type: db.sequelize.QueryTypes.INSERT
                        }).then(([results, metadata]) => {
                            console.log("rows affected", metadata);
                        });
                })
            res.json(metadata);
        })
};