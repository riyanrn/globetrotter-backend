const models = require('../models')
const UserScoreModel = models.user_scores

const saveScore = async(toSaveObject) => {
    try {
        return await UserScoreModel.create(toSaveObject).catch(err => { throw err })

    } catch(error) {
        throw error
    }
}

const getScoreByName = async(user_name) => {
    return UserScoreModel.findOne({ where: { user_name }}).catch(err => {throw err})
}

module.exports = {
    saveScore,
    getScoreByName
}