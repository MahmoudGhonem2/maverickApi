const express = require('express')
const Outcomes = require('../models/outcomes')
const router = new express.Router()


router.post('/outcomes', async (req, res) => {
    const outcomes = new Outcomes(req.body)

    try {
        await outcomes.save()
        res.status(201).send(outcomes)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router