"use strict";

const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename)
const Sequelize = require('sequelize')

const db = {}
let sequelize = new Sequelize(
    'globetrotter',
    "root",
    "",
    {
        host: "localhost",
        port: "3306",
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 2,
            acquire: 30000,
            idle: 10000
        },
        define: {
            underscored: false,
            charset: 'utf8',
            dialectOptions: {
                collate: 'utf8_general_ci'
            },
            // timestamps: true,
            // createdAt: "created_at",
            // updatedAt: "updated_at"
        }
    }
)

sequelize
    .authenticate()
    .then(() => {
        console.log('Database connection establishes successfully')
    })
    .catch(err => {
        console.log('Unable to connect', err)
    })

fs.readdirSync(__dirname)
    .filter((file) => {
        return ( file.indexOf(".") !== 0 && file !==basename && file.slice(-3) === '.js' )
    }) 
    .forEach((file) => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize)
        db[model.name] = model
    })

Object.keys(db).forEach((modelName) => {
    if(db[modelName].associate) {
        db[modelName].associate(db)
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db