const Employee  = require('../models/employee');

exports.getAllEmployees = async (req,res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json({
            employees: employees
          });
    } catch (error) {
        res.status(500).json({message:`Something went wrong: ${error}`});
    }    
};

exports.getEmployee = async (req,res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        
        if (!employee) {
            return res.status(404).json({
                message:"Employee not found."
            })
        }

        res.status(200).json({
            employee:employee
        })
    } catch (error) {
        res.status(500).json({message:`Something went wrong: ${error}`});
    }
};

exports.createEmployee = async (req,res) => {
    try {
        const doc = await Employee.create(req.body);

        res.status(201).json({
        message: "Employee created successfuly (done)."
        });

    } catch (error) {
        res.status(500).json({message:`Something went wrong: ${error}`});
    }
};

exports.deleteEmployee = async (req,res) =>{
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id);

        if (!employee) {
            return res.status(404).json({message:"Employee not found."})
        }

        res.status(200).json({message:"Employee deleted successfully."});

    } catch (error) {
        res.status(500).json({message:`Something went wrong: ${error}`});
    }
};

exports.updateEmployee = async (req,res) =>{
    try {
        const employee = await Employee.findByIdAndUpdate(req.params.id, req.body,{
            new:true,
            runValidators:true
        });

        if (!employee) {
            return res.status(404).json({
                message:"Employee not found."
            })
        }

        res.status(200).json({
            message:"Emplyee details updated successful."
        })

    } catch (error) {
        res.status(500).json({message:`Something went wrong: ${error}`});
    }
};
