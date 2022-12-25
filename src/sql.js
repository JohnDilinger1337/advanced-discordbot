const {Sequelize} = require('sequelize');
const {database} = process.env;


//register database
const sequelize = new Sequelize({
    dialect: 'sqlite',
    logging: false,
    // SQLite only
    storage: `database/${database}`,
});
module.exports = sequelize;
