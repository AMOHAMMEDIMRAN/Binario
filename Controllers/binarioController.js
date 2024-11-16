// Import asyncHandler middleware

import asyncHandler from "../Middleware/asyncHandler.js";

// String to Binary Controller
export const stringToBinary = asyncHandler(async (req, res) => {
  const { text } = req.body; // Extract 'text' from the request body

  if (!text) {
    // Validate input
    res.status(400);
    throw new Error("Text input is required");
  }

  // Convert string to binary
  const binary = text
    .split("") // Split string into characters
    .map((char) => char.charCodeAt(0).toString(2)) // Convert each character to binary
    .join(" "); // Join binary values with a space

  // Send the binary representation
  res.status(200).json({ binary });
});

// Binary to String Controller
export const binaryToString = asyncHandler(async (req, res) => {
  const { binary } = req.body; // Extract 'binary' from the request body

  if (!binary) {
    // Validate input
    res.status(400);
    throw new Error("Binary input is required");
  }

  // Convert binary to string
  try {
    const text = binary
      .split(" ") // Split binary input into individual binary values
      .map((bin) => String.fromCharCode(parseInt(bin, 2))) // Convert each binary value to a character
      .join(""); // Join the characters into a string

    // Send the string representation
    res.status(200).json({ text });
  } catch (err) {
    res.status(400);
    throw new Error("Invalid binary input. Please provide valid binary data.");
  }
});

export const apiGuide = asyncHandler(async (req, res) => {
  const guideHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Binary Converter API Guide</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          margin: 0;
          padding: 20px;
          background-color: #f4f4f9;
          color: #333;
        }
        h1 {
          color: #444;
        }
        pre {
          background: #eee;
          padding: 10px;
          border-radius: 5px;
          overflow-x: auto;
        }
        code {
          font-family: "Courier New", Courier, monospace;
          color: #d6336c;
        }
      </style>
    </head>
    <body>
      <h1>Binary Converter API Guide</h1>
      <p>Welcome to the Binary Converter API. Below are the available endpoints:</p>
      
      <h2>1. Convert String to Binary</h2>
      <p><strong>Endpoint:</strong> <code>POST /binario/api/string-to-binary</code></p>
      <p><strong>Request Body:</strong></p>
      <pre>
{
  "text": "hello"
}
      </pre>
      <p><strong>Response:</strong></p>
      <pre>
{
  "binary": "1101000 1100101 1101100 1101100 1101111"
}
      </pre>
      
      <h2>2. Convert Binary to String</h2>
      <p><strong>Endpoint:</strong> <code>POST /binario/api/binary-to-string</code></p>
      <p><strong>Request Body:</strong></p>
      <pre>
{
  "binary": "1101000 1100101 1101100 1101100 1101111"
}
      </pre>
      <p><strong>Response:</strong></p>
      <pre>
{
  "text": "hello"
}
      </pre>
      
      <footer>
        <p>Created with ❤️ by Mohammed Imran.</p>
      </footer>
    </body>
    </html>
  `;
  res.status(200).send(guideHtml);
});
