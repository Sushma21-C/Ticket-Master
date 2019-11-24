const Employee = require('../models/employee')

//list
module.exports.list = (req, res) => {
    Employee.find().sort({"createdAt":1}).populate('departmentId')
        .then((employees) => {
            res.json(employees)
        })
        .catch((err) => {
            res.json(err)
        })
}

//create
module.exports.create = (req, res) => {
    const body = req.body
    const employee = new Employee(body)
    employee.save()
        .then((employee) => {
            res.json(employee)
        })
        .catch((err) => {
            res.json(err)
        })
}

//show
module.exports.show = (req, res) => {
    const { id } = req.params
    Employee.findById(id)
        .then((employee) => {
            if(employee) {
                res.json(employee)
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
    const { id } = req.params
    const body = req.body
    Employee.findByIdAndUpdate(id, body, { new: true, runValidators: true})
        .then((employee) => {
            if(employee) {
                res.json(employee)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

//delete
module.exports.destroy = (req, res) => {
    const id = req.params.id
    Employee.findByIdAndDelete(id)
        .then((employee) => {
            if(employee){
                res.json(employee)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}