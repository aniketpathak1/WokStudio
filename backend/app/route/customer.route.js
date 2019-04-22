module.exports = function(app){
    const customers = require('../controller/customer.controller.js');

    //Create a new customer
    app.post('/api/customer/login', customers.login);
}