/*
 * equivalent to: CREATE TABLE _giveawayParticipatings(
 * user_ID INT NOT NULL,
 * user_name VARCHAR(255) NOT NULL,
 * role_ID INT NOT NULL
 * );
 */

const {DataTypes} = require('@sequelize/core');

module.exports = (sql) => {
    return sql.define(
        '_giveawayParticipating',
        {
            user_ID: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            user_Name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            role_ID: {
                type: DataTypes.STRING,
                default: null,
                allowNull: true,
            },
            role_Name: {
                type: DataTypes.STRING,
                default: null,
                allowNull: true,
            },
        },
        {
            tableName: '_giveawayParticipating',
        }
    );
};
