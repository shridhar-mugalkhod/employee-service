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

 /**
 * @swagger
 * components:
 *   schemas:
 *     getEmployee:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the employee
 *         firstName:
 *           type: string
 *           description: The first name of employee.
 *         lastName:
 *           type: string
 *           description: The last name of employee.
 *         email:
 *           type: string
 *           description: Email of employee.
 *         department:
 *           type: string
 *           description: Employee department.
 *         position:
 *           type: string
 *           description: Employee position.
 *   
 *       example:
 *           _id: 650c2cb26d57e735acfc2363
 *           firstName: Jose
 *           lastName: Lopez
 *           email: Jose@gmail.com
 *           department: development
 *           position: FullStackDeveloper
 * 
 *     Employee:
 *       type: object
 *       required:
 *         - firstName
 *         - lastName
 *         - email
 *         - department
 *         - position
 *       properties:
 *         firstName:
 *           type: string
 *           description: The first name of employee.
 *         lastName:
 *           type: string
 *           description: The last name of employee.
 *         email:
 *           type: string
 *           description: Email of employee.
 *         department:
 *           type: string
 *           description: Employee department.
 *         position:
 *           type: string
 *           description: Employee position.
 *   
 *       example:
 *           firstName: Jose
 *           lastName: Lopez
 *           email: Jose@gmail.com
 *           department: development
 *           position: FullStackDeveloper
 */

/**
 * @swagger
 * tags:
 *   name: Employees
 *   description: The employees managing API
 * /api/v1/employee:
 *   get:
 *     summary: Lists all the employees
 *     tags: [Employees]
 *     responses:
 *       200:
 *         description: The list of the employees
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/getEmployee'
 *   post:
 *     summary: Create a new employee
 *     tags: [Employees]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Employee'
 *     responses:
 *       200:
 *         description: The created employee.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Employee'
 *       500:
 *         description: Some server error
 * /api/v1/employee/{id}:
 *   get:
 *     summary: Get the employee by id
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The employee id
 *     responses:
 *       200:
 *         description: The employee response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/getEmployee'
 *       404:
 *         description: The employee was not found
 *   put:
 *    summary: Update the employee by the id
 *    tags: [Employees]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The employee id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Employee'
 *    responses:
 *      200:
 *        description: The employee was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Employee'
 *      404:
 *        description: The employee was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the employee by id
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The employee id
 *
 *     responses:
 *       200:
 *         description: The employee was deleted
 *       404:
 *         description: The employee was not found
 */

module.exports= router;