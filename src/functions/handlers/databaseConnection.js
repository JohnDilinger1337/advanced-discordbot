const sql = require('../../sql')
module.exports = (client) => {
    client.databaseConnection = async () => {
        try {
            await sql.authenticate();
            await sql.sync({force: false})
            console.log(`Database connection has been established successfully!!!`);
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    };

}