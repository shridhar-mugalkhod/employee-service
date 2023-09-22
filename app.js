const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');

const employeeRouter = require('./routes/employeeRoute');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const options = {
    definition: {
        openapi: "3.1.0",
        info: {
        title: "Employee service RESTful API Document.",
        version: "0.1.0",
        description:
            "This document describes Employee service RESTful API in details.",
        // contact: {
        //     name: "Shridhar",
        //     url: "https://shridhar-mugalkhod.github.io/portfolio/",
        //     email: "mshridhar167@gmail.com",
        // },
        },
        servers: [
        {
            url: "https://employee-rest-service-1403e48268f3.herokuapp.com",
        },
        ],
    },
    apis: ["./routes/*.js"],
};

const app =  express()

app.use(express.json());

const specs = swaggerJsdoc(options);

app.use(cors());
app.options('*', cors());

// Set security HTTP headers
app.use(helmet());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Limit requests from same API
const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: 'Too many requests from this IP, please try again in an hour!'
});
app.use('/api', limiter);

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
  );

app.use('/api/v1/employee', employeeRouter );

app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports=app;