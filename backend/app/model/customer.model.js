module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define('customer', {
        username: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }
    });

    return Customer;
}