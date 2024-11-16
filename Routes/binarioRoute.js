// Import express

import express from "express";

// Import controller

import {
  stringToBinary,
  binaryToString,
  apiGuide,
} from "../Controller/binarioController.js";

// Instance express router

const router = express.Router();

// Home route

router.get("/", apiGuide);

// String to binary route

router.post("/string-to-binary", stringToBinary);

// Binary to string

router.post("/binary-to-string", binaryToString);

export default router;
