const express = require('express')
const router = express.Router()

const customersController = require('../app/controllers/customersController')
const departmentsController = require('../app/controllers/departmentsController')
const employeesController = require('../app/controllers/employeesController')
const ticketsController = require('../app/controllers/ticketsController')

//customer
router.get('/customers', customersController.list)
router.post('/customers', customersController.create)
router.put('/customers/:id', customersController.update)
router.get('/customers/:id', customersController.show)
router.delete('/customers/:id', customersController.destroy)


//department
router.get('/departments', departmentsController.list)
router.get('/departments/:id', departmentsController.show)
router.post('/departments', departmentsController.create)
router.put('/departments/:id', departmentsController.update)
router.delete('/departments/:id', departmentsController.destroy)

//employee
router.get('/employees', employeesController.list)
router.get('/employees/:id', employeesController.show)
router.post('/employees', employeesController.create)
router.put('/employees/:id', employeesController.update)
router.delete('/employees/:id', employeesController.destroy)

//ticket
router.get('/tickets', ticketsController.list)
router.get('/tickets/:id', ticketsController.show)
router.put('/tickets/:id', ticketsController.update)
router.post('/tickets', ticketsController.create)
router.delete('/tickets/:id', ticketsController.destroy)

module.exports = router