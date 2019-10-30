const express = require('express')
require('./db/mongoose')
const quizRouter = require('./routers/quiz')
const outcomesRouter = require('./routers/outcomes')

const questRouter = require('./routers/questions')

const cors = require('cors')




const app = express()
app.use(cors())


app.use(express.json())
app.use(quizRouter)
app.use(outcomesRouter)
app.use(questRouter)


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

//const bcrypt = require('bcryptjs')
/*
const myFunction = async () => {
    const password = 'Red12345!'
    const hashedPassword = await bcrypt.hash(password, 8)

    console.log(password)
    console.log(hashedPassword)

    const isMatch = await bcrypt.compare('red12345!', hashedPassword)
    console.log(isMatch)
}

myFunction()
*/