const express = require('express');
const employeeRouter = require('./routes/employeeRoute');

const app =  express()


app.use(express.json());

app.use('/api/v1/employee', employeeRouter );

app.all('*', (req,res) => {
    res.status(404).json({message:`Can't find ${req.originalUrl} on this server!`})
})

module.exports=app;