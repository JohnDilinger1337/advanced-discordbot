const { Sequelize } = require('sequelize');
const config = require('./config');
const { DATABASE } = config;


//register database
const sequelize = new Sequelize({
    dialect: 'sqlite',
    logging: false,
    // SQLite only
    storage: `database/${DATABASE}`,
});
module.exports = sequelize;
