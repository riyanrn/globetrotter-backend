const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const RandomQuestionRouter = require('./src/routes/RandomQuestions.router')
const UserScoreRouter = require('./src/routes/UserScore.router')
const app = express()

app.use(cors())

app.use(bodyParser.json())

app.use('/globetrotter/', RandomQuestionRouter)

app.use('/globetrotter/scoring', UserScoreRouter)

app.listen(8000, () => {
    console.log('server is listening on port', 8000)
})