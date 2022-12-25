/*
 * equivalent to: CREATE TABLE _giveawayConfiguration(
 * giveaway_ID INT NOT NULL,
 * winners_Count INT NOT NULL,
 * required_Role INT NOT NULL,
 * embedMessage VARCHAR(255) NOT NULL
 * );
 */

const {DataTypes} = require('@sequelize/core');

module.exports = (sql) => {
    return sql.define(
        '_giveawayConfiguration',
        {
            freezeTableName: true,
            giveaway_ID: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            winners_Count: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            required_Role: {
                type: DataTypes.INTEGER,
                default: null,
                allowNull: true,
            },
            embedMessage: {
                type: DataTypes.STRING,
                default: null,
                allowNull: true,
            },
        },
        {
            tableName: '_giveawayConfiguration',
        }
    );
};
