import express from 'express';
import houseRouter from './routes/house.router.js'
const app = express();


app.use((req, res, next) => {
    console.log('request to ', req.method + " " + req.path);
    next();
})

//all routers for the application

app.use('/api/houses', houseRouter);
//  


//error handler

//Start the applictaion
app.listen(3500);