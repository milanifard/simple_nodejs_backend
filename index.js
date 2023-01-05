const dotEnv = require("dotenv");
const express = require('express')
const app = express()

dotEnv.config({ path: "./config/config.env" });

// BodyPaser
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'API-Key, accept, Content-Type, JWT');
    res.setHeader('Access-Control-Max-Age', 1728000);
    res.setHeader('Content-Length', 0);
    next();
  });

// This is a built-in middleware function that parses incoming requests with JSON payloads
// only parses JSON and only looks at requests where the Content-Type header matches the type option.
// A new body object containing the parsed data is populated on the request object after the middleware
app.use(express.json())

// Routes
app.use("/auth", require("./routers/auth"));

// 404 Page
app.use((req, res) => { res.send("404", "Not Found"); });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));