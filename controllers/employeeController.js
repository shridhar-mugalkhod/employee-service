const Employee  = require('../models/employee');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.getAllEmployees = catchAsync(async (req,res,next) => {
    const employees = await Employee.find();
    res.status(200).json({
        employees: employees
    });
})

exports.getEmployee = catchAsync(async (req,res,next) => {
    const employee = await Employee.findById(req.params.id);
    
    if (!employee) {
        return next(new AppError('Employee not found.', 404));
    }

    res.status(200).json({
        employee:employee
    });
})

exports.createEmployee = catchAsync(async (req,res,next) => {
    const doc = await Employee.create(req.body);

    res.status(201).json({
    message: "Employee created successfuly."
    });
})

exports.deleteEmployee = catchAsync(async (req,res,next) =>{
    const employee = await Employee.findByIdAndDelete(req.params.id);

    if (!employee) {
        return next(new AppError('Employee not found.', 404));
    }

    res.status(200).json({message:"Employee deleted successfully."});
})

exports.updateEmployee = catchAsync(async (req,res,next) =>{
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
        runValidators:true
    });

    if (!employee) {
        return next(new AppError('Employee not found.', 404));
    }

    res.status(200).json({
        message:"Emplyee details updated successful."
    })
})
