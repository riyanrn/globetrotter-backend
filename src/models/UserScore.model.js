'use strict';

module.exports = (sequelize, DataTypes) => {
    const UserScore = sequelize.define('user_scores', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        correct_answer: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        incorrect_answer: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
    }, {
        modelName: "user_scores",
        timestamps: false

    })

    return UserScore
}