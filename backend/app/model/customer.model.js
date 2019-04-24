module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define('customer', {
        username: {
            type: Sequelize.STRING
        },
        pwd: {
            type: Sequelize.STRING
        }
    });

    return Customer;
}