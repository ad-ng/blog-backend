const { json } = require("express");
const jwt = require("jsonwebtoken");

function auth(req, res, next) {
    const authHeader = req.headers['authorization']; // Changed req.header to req.headers
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(401).send('Not authorized'); // Added res.status(401).send

    jwt.verify(token, 'hello', (err, user) => {
        if (err) return res.sendStatus(401); // Added res.
        req.user = user;
        next();
    });
    
}

module.exports = auth;
