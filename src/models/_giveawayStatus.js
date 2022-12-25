/*
 * equivalent to: CREATE TABLE _giveawayStatus(
 * giveaway_ID INT NOT NULL,
 * status VARCHAR(255) NOT NULL,
 * );
 */
const {DataTypes} = require('@sequelize/core');

module.exports = (sql) => {
    return sql.define(
        '_giveawayStatus',
        {
            freezeTableName: true,
            giveaway_ID: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            status: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            tableName: '_giveawayStatus',
        }
    );
};
