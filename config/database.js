const mongoose = require('mongoose')

//db configuration
mongoose.Promise = global.Promise

    mongoose.connect('mongodb://localhost:27017/july2019-mern-ticket-master', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('connected to db')
        })
        .catch((err) => {
            console.log(err)
        })

module.exports = mongoose