const { travel_dataset } = require('../dataset/data')

const getRandomQuestions = async (req, res) => {
    try {

        let rand_index = Math.floor(Math.random() * 100)
        

        let result = JSON.parse(JSON.stringify(travel_dataset[rand_index])) // doing this to create a copy of the travel_dataset so that any changes in result will not affect the main dataset
        delete result['city'];
        delete result['country'];

        res.send({ succes: true, rand_index, result })
    } catch(error) {
        console.log(error)
        res.send(error)
    }
}

const isAnswerCorrect = async (req, res) => {
    try {

        let { rand_index, selected_answer } = req.body

        // fetch data from dataset using rand_index
        const selected_data = travel_dataset[rand_index]
        
        // check if the selected answer matches with the city from selected dataset
        let is_correct = false
        if(selected_answer == selected_data['city']) {
            is_correct = true
        }

        res.send({ succes: true, is_correct })

    } catch(error) {
        console.log(error)
        res.send(error)
    }
}

module.exports = {
    getRandomQuestions,
    isAnswerCorrect
}