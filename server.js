// Import express

import express from "express";

// Import utils

import binarioRoute from "./Routes/binarioRoute.js";
import {
  apiGuide,
} from "./Controllers/binarioController.js";

// Instance express

const app = express();

// Middleware

app.use(express.json());

// Declare PORT number

const PORT = 5000;

// API routes

app.get("/", apiGuide)

app.use("/binario/api", binarioRoute);

// App listening

app.listen(PORT, () => {
  console.log(`Server is started running on port ${PORT}`);
});
