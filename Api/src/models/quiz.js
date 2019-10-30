const mongoose = require('mongoose')


const Quiz = mongoose.model('Quiz', {
    name: {
        type: String,
        trim: true
    },
    img :{
        type: String,
        trim: true

    },
    title: {
        type: String,
        trim: true
    },
    
    description:{
        type: String,
        
        trim: true
    },
    social: {
        type: Boolean,
        default: false
    },
    statpage: {
        type: Boolean,
        default: false
    },
    userstatus: {
        type: Boolean,
        default: false
    },

})

module.exports = Quiz