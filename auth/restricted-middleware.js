const jwt = require("jsonwebtoken");

const { jwtSecret } = require("../api/config.js");

module.exports = (req, res, next) => {
    const token = req.headers.authorization

    if (token) {
        jwt.verify(token, jwtSecret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ you: "wrong password!" })
            }
            else {
                req.jwt = decodedToken
                next()
            }
        })
    }
    else {
        res.status(401).json({ you: "You need a token!" });

    }
}