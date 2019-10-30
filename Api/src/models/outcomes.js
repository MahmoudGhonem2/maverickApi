const mongoose = require('mongoose')
//const validator = require('validator')


const Outcomes = mongoose.model('Outcomes', {
    title: {
        type: String,
        required: true,
        trim: true
    },
    outtype :{
  type:Number,

    },
    url: {
        type: String,
        trim: true
    },
    cdata: {
        type: Boolean,
        default: false
    },
    paragraph:{
        type: String,
        
        trim: true
    }
})

module.exports = Outcomes