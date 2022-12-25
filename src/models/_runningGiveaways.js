/*
 * equivalent to: CREATE TABLE _runningGiveaways(
 * giveaway_ID INT NOT NULL,
 * message_ID INT NOT NULL,
 * channel_ID INT NOT NULL,
 * started_date Date NOT NULL DEFAULT GETDATE(),
 * expiration_date  Date NOT NULL
 * );
 */
const {DataTypes} = require('@sequelize/core');

module.exports = (sql) => {
    return sql.define(
        '_runningGiveaways',
        {
            freezeTableName: true,
            giveaway_ID: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            message_ID: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            channel_ID: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            started_date: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            expiration_date: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            tableName: '_runningGiveaways',
        }
    );
};
