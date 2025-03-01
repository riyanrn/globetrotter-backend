const router = require('express').Router()
const RandomQuestionController = require('../controllers/RandomQuestions.controller')

router.get('/get/random/question', RandomQuestionController.getRandomQuestions)

router.post('/check/answer', RandomQuestionController.isAnswerCorrect)

module.exports = router;