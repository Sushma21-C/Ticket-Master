const Department = require('../models/department')

//list
module.exports.list = (req, res) => {
    Department.find()
        .then((departments) => {
            res.json(departments)
        })
        .catch((err) => {
            res.json(err)
        })
}

//show
module.exports.show = (req, res) => {
    const { id } = req.params
    Department.findById(id)
        .then((department) => {
            if(department) {
                res.json(department)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

//create
module.exports.create = (req, res) => {
    const { body } = req
    const department = new Department(body)
    department.save()
        .then((department) => {
            res.json(department)
        })
        .catch(err => {
            res.json(err)
        })
}

//update
module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Department.findByIdAndUpdate(id, body, { new: true, runValidators: true})
        .then((department) => {
            if(department) {
                res.json(department)
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
    const { id } = req.params
    Department.findByIdAndDelete(id)
        .then((department) => {
            if(department){
                res.json(department)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}


