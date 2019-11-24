const Ticket = require('../models/Ticket')


//list
module.exports.list = (req, res) => {
    Ticket.find().populate('departmentId')
        .then((tickets) => {
            res.json(tickets)
        })
        .catch((err) => {
            res.json(err)
        })
}

//create
module.exports.create = (req, res) => {
    const { body } = req
    const ticket = new Ticket(body)
    ticket.save()
        .then((ticket) => {
            res.json(ticket)
        })
        .catch((err) => {
            res.json(err)
        })
}

//show
module.exports.show = (req, res) => {
    const { id } = req.params
    Ticket.findById(id)
        .then((ticket) => {
            if(ticket) {
                res.json(ticket)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

//update
module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Ticket.findByIdAndUpdate(id, body, { new: true, runValidators: true})
        .then((ticket) => {
            if(ticket) {
                res.json(ticket)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

//destroy
module.exports.destroy = (req, res) => {
    const id = req.params.id
    Ticket.findByIdAndDelete(id)
        .then((ticket) => {
            if(ticket) {
                res.json(ticket)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}