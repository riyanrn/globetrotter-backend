const UserScoreService = require('../services/UserScore.service')

const saveUserScore = async (req, res) => {
    try {
        let body = req.body

        // save data in user score table
        await UserScoreService.saveScore(body)

        res.send({ success: true, message: "User score saved successfully" })

    } catch(error) {
        console.log(error)
        res.send(error)
    }
}

const getUserScore = async(req, res) => {
    try {

        let user_name = req.query.user_name

        let result = await UserScoreService.getScoreByName(user_name)

        res.send({ success: true, result })
        

    } catch(err) {
        console.log(err)
        res.send(err)
    }
}

module.exports = {
    saveUserScore,
    getUserScore
}