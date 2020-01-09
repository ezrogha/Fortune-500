const express = require("express")
const fs = require('fs');
const path = require('path')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const compression = require('compression')
const morgan = require('morgan')
const userRoutes = require('./routes/user/get_500')

const app = express()

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT PATCH, DELETE")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization")
    next()
})

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

app.use(helmet())
app.use(compression())
app.use(morgan('combined', {
    stream: accessLogStream
}))



app.use(userRoutes)

app.listen(process.env.PORT || 8080)
