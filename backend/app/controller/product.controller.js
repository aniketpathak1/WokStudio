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
    //console.log("data", data);
    let cuisineId;
    let foodPrefId;
    let typeId;
    let proteinId;
    let filePath = data.imagePath;
    let query = `Insert into product(title,price,filePath) values('${data.title}',${data.price},'${filePath}')`;
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
                    if (rows.length > 0) {
                        this.cuisineId = rows[0]['id'];
                        db.sequelize.query(`insert into product (cuisineId) values('${this.cuisineId}')`,
                            {
                                type: db.sequelize.QueryTypes.INSERT
                            }).then(([results, metadata]) => {
                                //console.log("rows affected", metadata);
                            })
                    }
                });

            db.sequelize.query(`select id from foodpreference where foodpreference='${data.foodPref}'`,
                {
                    type: db.sequelize.QueryTypes.SELECT
                })
                .then((rows) => {
                    if (rows.length > 0) {
                        this.foodPrefId = rows[0]['id'];
                        db.sequelize.query(`insert into product (foodPrefId) values('${this.foodPrefId}')`,
                            {
                                type: db.sequelize.QueryTypes.INSERT
                            }).then(([results, metadata]) => {
                                //console.log("rows affected", metadata);
                            });
                    }

                })
            db.sequelize.query(`select id from foodtype where foodType='${data.type}'`,
                {
                    type: db.sequelize.QueryTypes.SELECT
                })
                .then((rows) => {
                    if (rows.length > 0) {
                        this.typeId = rows[0]['id'];
                        db.sequelize.query(`insert into product (typeId) values('${this.typeId}')`,
                            {
                                type: db.sequelize.QueryTypes.INSERT
                            }).then(([results, metadata]) => {
                                //console.log("rows affected", metadata);
                            });
                    }

                })
            db.sequelize.query(`select id from protein where proteinName='${data.protein}'`,
                {
                    type: db.sequelize.QueryTypes.SELECT
                })
                .then((rows) => {
                    if (rows.length > 0) {
                        this.proteinId = rows[0]['id'];
                        db.sequelize.query(`insert into product (protienId) values('${this.proteinId}')`,
                            {
                                type: db.sequelize.QueryTypes.INSERT
                            }).then(([results, metadata]) => {
                                //console.log("rows affected", metadata);
                            });
                    }

                })
            res.json(metadata);
        })
};

exports.GetAllProducts = (req, res) => {
    let query = `select title from product where flag = 1`;
    db.sequelize.query(query,
        {
            type: db.sequelize.QueryTypes.SELECT
        }).then((rows) => {
            let data = [];
            if (rows.length > 0) {
                for (let i in rows) {
                    data.push(rows[i]['title']);
                }
            }
            console.log("all products", data);
            res.json(data);
        })
}

exports.GetProductDetails = (req, res) => {
    let prodName = req.query.productName;

    console.log("product name", prodName);
    let query = `select cuisineName,proteinName,foodPreference,foodType,price,filePath,title from cuisines cu,protein pro,foodpreference as fp,
    foodtype as ft,product as p  where cu.id = (select cuisineId from product where title = '${prodName}' group by cuisineId) 
    and pro.id = (select protienId from product where title = '${prodName}' group by protienId) and fp.id = (select foodPrefId from 
    product where title = '${prodName}' group by foodPrefId) and ft.id = (select typeId from product where title = '${prodName}' 
    group by typeId) and p.title = '${prodName}'`;
    db.sequelize.query(query,
        {
            type: db.sequelize.QueryTypes.SELECT
        }).then((rows) => {
            console.log("prod details", rows);
            res.json(rows);
        })
}

exports.UpdateProductDetails = (req, res) => {
    let data = req.body;
    console.log("data ", data);
    let query = `update product set title = '${data.Name}', cuisineId = (select id from cuisines where cuisineName = '${data.updateCuisine}' 
    group by id), foodPrefId = (select id from foodpreference where foodPreference = '${data.updateFoodPref}' group by id), protienId = 
    (select id from protein where proteinName = '${data.updateCategory}' group by id), typeId = (select id from foodtype where 
    foodType = '${data.updateFoodType}' group by id), price = ${data.price}, filePath = '${data.imagePath}' where title = '${data.prodTitle}'`;
    db.sequelize.query(query, {
        type: db.sequelize.QueryTypes.INSERT
    }).then((rowsUpdated) => {
        res.json(rowsUpdated);
    })
}

exports.DeleteProduct = (req, res) => {
    let data = req.body.prodTitle;
    console.log("data ", data);
    let query = `update product set flag = 0 where title = '${data}'`;
    db.sequelize.query(query, {
        type: db.sequelize.QueryTypes.INSERT
    }).then((rowsUpdated) => {
        res.json(rowsUpdated);
    })
}

exports.ImageUpload = (req, res) => {
    let data = req.body;
    console.log(data);
}

exports.GetAllProdDetails = (req, res) => {
    console.log("all prod");
    let query = `select p.id, p.title, p.price, p.avgRating, p.stockQty, p.filePath, cu.cuisineName, fp.foodPreference, ft.foodType, pro.proteinName from product p join cuisines cu on p.cuisineId = cu.id join foodpreference fp on p.foodPrefId = fp.id join foodtype ft on p.typeId = ft.id join protein pro on p.protienId = pro.id where p.flag = 1` ;
    db.sequelize.query(query, {
        type: db.sequelize.QueryTypes.SELECT
    }).then((rows) => {
        console.log(rows);
        res.json(rows);
    })
}

exports.AddFavoriteProduct = (req, res) => {
    let data = req.body;
    let query = `insert into favorites (userId, productId) values(${data.userId},(select id from product where title='${data.prodName}'))`;
    db.sequelize.query(query, {
        type: db.sequelize.QueryTypes.INSERT
    }).then(([results, metadata]) => {
        res.json(metadata);
    })
}