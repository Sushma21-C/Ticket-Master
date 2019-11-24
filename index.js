const express = require('express')
const cors = require('cors')
const mongoose = require('./config/database')
const router = require('./config/routes')
const app = express()


const port = 3015

app.use(cors())
app.use(express.json())
app.use('/', router)


app.get('/', (req, res) => {
    res.json({
        note: 'Welcome to Ticket Master App'
    })
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
