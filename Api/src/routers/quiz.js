const express = require('express')
const Quiz = require('../models/quiz')
const router = new express.Router()


router.post('/quiz', async (req, res) => {
    const quiz = new Quiz(req.body)

    try {
        await quiz.save()
        res.status(201).send(quiz)
    } catch (e) {
        res.status(400).send(e)
    }
})
module.exports = router