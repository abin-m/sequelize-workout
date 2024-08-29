const { Sequelize } = require('sequelize');

// Setting up a new Sequelize instance
const sequelize = new Sequelize('node_sequelize_api_db', 'root', 'Wakanda@123', {
    host: 'localhost',
    dialect: 'mysql',
});

// Test the connection
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;
