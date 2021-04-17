import express from 'express';
import _ from 'express-async-errors';
import houseRouter from './routes/house.router.js'
const app = express();


app.use((req, res, next) => {
    console.log('request to ', req.method + " " + req.path);
    next();
})

//all routers for the application

app.use('/api/houses', houseRouter);
//  


//error middleware

app.use((err, req, res, next) => {
    console.log(err);
    const statusCode = err.status || err.statusCode || 500;
     
    res.status(statusCode).json({message: err.message })
})

//Start the applictaion
app.listen(3500);