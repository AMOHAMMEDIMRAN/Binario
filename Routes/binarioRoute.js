// Import express

import express from "express";

// Import controller

import {
  stringToBinary,
  binaryToString,
  apiGuide,
} from "../Controllers/binarioController.js";

// Instance express router

const router = express.Router();



// String to binary route

router.post("/string-to-binary", stringToBinary);

// Binary to string

router.post("/binary-to-string", binaryToString);

export default router;
