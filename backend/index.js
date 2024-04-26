//The start of the project for creating the serever
import express, { request } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from 'cors';


const app = express();

//When testing in Thunderclient, there's an error since the body cannot recognize the server we need a middleware to use the JSON body
app.use(express.json());

//Create '/'route, another parameter is a callback function that requests and respones
app.get('/', (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to MERN STACK");
});

app.use('/books', booksRoute);

//connecting the database using mongoose lib
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected to database");
    //statement for listening to the port
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch(() => {
    console.log(error);
  });
