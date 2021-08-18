const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv/config')

const routes = require('./routes')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => app.listen(5000, (req, res) => {
console.log('Houston, connection was made.')
}))
.catch(err => console.log(err))

//routs go here
app.use(routes)