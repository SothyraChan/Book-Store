//The start of the project for creating the serever
import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";

const app = express();

//Create '/'route, another parameter is a callback function that requests and respones
app.get('/', (req, res) => {
    console.log(req)
    return res.status(234).send('Welcome to MERN STACK');
});



//connecting the database using mongoose lib
mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('Connected to database');
        //statement for listening to the port
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch(() => {
        console.log(error);
    });