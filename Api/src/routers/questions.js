const express = require('express')
const Questions = require('../models/questions')
const router = new express.Router()


router.post('/questions', async (req, res) => {
    const questions = new Questions(req.body)

    try {
        await questions.save()
        res.status(201).send(questions)
    } catch (e) {
        res.status(400).send(e)
    }
})
module.exports = router