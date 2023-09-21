const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
});

dotenv.config({path:'./config.env'});
const app = require('./app');

mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
}).then(() => {
    console.log('DB connection successful!');
}).catch((e) => {
    console.error(`Failed to connect to DB: ${e}`);
})

const port = process.env.PORT || 3002

const server = app.listen(port, () => {
    console.log(`App is running on port ${port} ...!`);
})

process.on('unhandledRejection', err => {
    console.log('UNHANDLED REJECTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    server.close(() => {
      process.exit(1);
    });
  });
  
process.on('SIGTERM', () => {
    console.log('👋 SIGTERM RECEIVED. Shutting down gracefully');
    server.close(() => {
        console.log('💥 Process terminated!');
    });
});

