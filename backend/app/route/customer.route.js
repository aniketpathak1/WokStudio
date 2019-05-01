module.exports = function(app){
    console.log("route");
    const customers = require('../controller/customer.controller.js');
    const product = require('../controller/product.controller.js');
    const admin = require('../controller/admin.controller.js');
    app.post('/api/customer/login', customers.login);
    //app.post('/api/customer/signup', customers.login)
    //app.post('/api/admin', adminLogin.admin);
    app.get('/api/productCategories', product.getProductCategories);
    app.get('/api/producTypes', product.getProductTypes);
    app.get('/api/productCuisines', product.getProductCuisines);
    app.get('/api/productPreferences', product.getProductPreferences);
    app.post('/api/addProduct', product.addProductinDB);
    app.post('/api/addAdmin', admin.addAdminToDB);

    
}