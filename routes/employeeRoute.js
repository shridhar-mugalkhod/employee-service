const express = require('express');
const employeeController = require('../controllers/employeeController');
const router= express.Router();

router
    .route('/')
    .post(employeeController.createEmployee)
    .get(employeeController.getAllEmployees);

router
    .route('/:id')
    .get(employeeController.getEmployee)
    .put(employeeController.updateEmployee)
    .delete(employeeController.deleteEmployee);

module.exports= router;