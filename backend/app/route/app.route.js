module.exports = function(app){
    console.log("route");
    const customers = require('../controller/customer.controller.js');
    const product = require('../controller/product.controller.js');
    const admin = require('../controller/admin.controller.js');
    const user = require('../controller/useraccount.controller.js');
    app.post('/api/login', customers.login);
    //app.post('/api/signup', customers.signup);
    //app.post('/api/admin', adminLogin.admin);
    app.get('/api/productCategories', product.getProductCategories);
    app.get('/api/producTypes', product.getProductTypes);
    app.get('/api/productCuisines', product.getProductCuisines);
    app.get('/api/productPreferences', product.getProductPreferences);
    app.post('/api/addProduct', product.addProductinDB);
    app.post('/api/addAdmin', admin.addAdminToDB);
    app.get('/api/getAllProducts', product.GetAllProducts);
    app.get('/api/getProdDetails', product.GetProductDetails);
    app.post('/api/updateProdDetails', product.UpdateProductDetails);
    app.post('/api/deleteProduct', product.DeleteProduct);
    app.post('/api/imageupload', product.ImageUpload);
    app.get('/api/getAllProdDetails', product.GetAllProdDetails);
    app.get('/api/getUserDetails', user.getUserDetails);
    app.post('/api/updateUserName',user.UpdateUserName);
    app.post('/api/updateUserPwd',user.UpdateUserPwd);
    app.post('/api/updateUserContact',user.UpdateUserContact);
    app.post('/api/updateUserEmail',user.UpdateUserEmail);
    app.post('/api/updateAddress',user.UpdateAddress);
    app.post('/api/addFavProduct',product.AddFavoriteProduct);
    app.get('/api/getFavoriteProds', user.GetFavoriteProducts);
    app.get('/api/getBasket',user.GetBasketProducts);
    app.get('/api/getFavProdIds', user.GetFavProdIds);

}