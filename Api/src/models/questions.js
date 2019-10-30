const mongoose = require('mongoose')
//const validator = require('validator')


const Questions = mongoose.model('Questions', {
    Quest: {
        type: String,
        required: true,
        trim: true
    },
    Answertype :{
        type: Number,
        trim: true

    },
    num: {
        type: Number,
        trim: true
    },
    
    answer:{
        type: String,
        
        trim: true
    },
    

})

module.exports = Questions