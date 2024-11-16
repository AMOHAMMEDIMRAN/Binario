# Binario API

A simple Node.js API for converting strings to binary and binary to strings. This project is designed using Express.js with a clean architecture.

---

## Features

- Convert a **string** to its **binary** representation.
- Convert **binary** back to a **string**.
- Lightweight and easy to use.
- Includes an API guide available at the `/` route.

---

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/<your-username>/<repo-name>.git
   cd <repo-name>
   Install dependencies:
   ```

bash
Copy code
npm install
Start the server:

bash
Copy code
npm start
Access the guide:

Open your browser and navigate to http://localhost:5000.

Usage
Endpoints

1. Convert String to Binary
   Endpoint: POST /binario/api/string-to-binary
   Request Body:
   json
   Copy code
   {
   "text": "hello"
   }
   Response:
   json
   Copy code
   {
   "binary": "1101000 1100101 1101100 1101100 1101111"
   }
2. Convert Binary to String
   Endpoint: POST /binario/api/binary-to-string
   Request Body:
   json
   Copy code
   {
   "binary": "1101000 1100101 1101100 1101100 1101111"
   }
   Response:
   json
   Copy code
   {
   "text": "hello"
   }
   Folder Structure
   bash
   Copy code
   ├── controllers
   │ └── binarioController.js # Contains logic for string-to-binary and binary-to-string conversion
   ├── middleware
   │ └── asyncHandler.js # Middleware for handling async errors
   ├── routes
   │ └── binarioRoutes.js # Routes for all API endpoints, including the guide
   ├── server.js # Main server file
   └── README.md # Project documentation
   Error Handling
   This project uses middleware to handle errors and ensure proper responses. If any issue occurs (e.g., missing input or invalid binary), the API will respond with an appropriate error message.

Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/YourFeature).
Commit your changes (git commit -m 'Add your feature').
Push to the branch (git push origin feature/YourFeature).
Open a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for more details.

Author
Developed with ❤️ by Mohammed Imran.
