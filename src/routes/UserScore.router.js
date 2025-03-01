const router = require('express').Router()

const UserScoreController = require('../controllers/UserScore.controller')

router.post('/save/user/score', UserScoreController.saveUserScore)

router.get('/get/user/score', UserScoreController.getUserScore)

module.exports = router