# Binary Converter API

Live Demo: [Binary Converter API](https://binarioo.onrender.com/)

A lightweight Node.js API for converting strings to binary and binary to strings. Built with Express.js, this project includes endpoints for seamless conversions and an API guide available on the root route (`/`).

---

## Features

- Convert a **string** to its **binary** representation.
- Convert **binary** back to a **string**.
- In-app API guide available at the `/` route.
- Designed with a simple and clean structure.

---

## Prerequisites

Before starting, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AMOHAMMEDIMRAN/Binario.git
   cd Binario
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

4. Open your browser and navigate to [http://localhost:5000](http://localhost:5000) to view the API guide.

---

## Usage

### Endpoints

#### 1. **API Guide**
   - **Endpoint:** `GET /`
   - **Description:** Displays a list of available API routes and their usage.

#### 2. **Convert String to Binary**
   - **Endpoint:** `POST /binario/api/string-to-binary`
   - **Request Body:**
     ```json
     {
       "text": "hello"
     }
     ```
   - **Response:**
     ```json
     {
       "binary": "1101000 1100101 1101100 1101100 1101111"
     }
     ```

#### 3. **Convert Binary to String**
   - **Endpoint:** `POST /binario/api/binary-to-string`
   - **Request Body:**
     ```json
     {
       "binary": "1101000 1100101 1101100 1101100 1101111"
     }
     ```
   - **Response:**
     ```json
     {
       "text": "hello"
     }
     ```

---

## Folder Structure

```
├── Controllers
│   └── binarioController.js  # Contains logic for string-to-binary and binary-to-string conversion, and the API guide
├── Routes
│   └── binarioRoute.js       # Defines API routes
├── server.js                 # Main server file
└── README.md                 # Project documentation
```

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/YourFeature`.
3. Commit your changes: `git commit -m 'Add your feature'`.
4. Push to the branch: `git push origin feature/YourFeature`.
5. Submit a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Author

Developed with ❤️ by [Mohammed Imran](https://github.com/AMOHAMMEDIMRAN).
