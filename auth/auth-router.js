const bcryptjs = require('bcryptjs')
const jwt = require("jsonwebtoken")
const config = require('../api/config')
const Users = require('../users/users-model')
const router = require('express').Router()
const { isValid } = require('./auth-service')

// module.exports = {
//     add,
//     find,
//     findById
// }



router.post('/register', (req, res) => {
    const credentials = req.body
    if (isValid(credentials)) {
        const rounds = process.env.BCRYPT_ROUNDS || 8
        const hash = bcryptjs.hashSync(credentials.password, rounds)
        credentials.password = hash
        Users.add(credentials)
            .then(user => {
                res.status(201).json({ data: user })
            })
            .catch(err => {
                res.status(500).json({ msg: err.message })
            })
    }
    else {
        res.status(400).json({ msg: "error. need username and password. password shoulf be alphanumeric" })
    }

})

router.post('/login', (req, res) => {
    const { username, password } = req.body
    if (isValid(req.body)) {
        Users.findBy({ username })
            .then(([user]) => {
                if (user && bcryptjs.compareSync(password, user.password)) {
                    const token = getJwt(user)
                    res.status(200).json({ msg: "Welcome to out Api", user, token })
                }
                else {
                    res.status(401).json({ message: "Invalid credentials" });
                }
            })
            .catch(err => {
                res.json({ msg: err.message })
            })
    }
    else {
        res.status(400).json({
            message: "please provide username and password and the password shoud be alphanumeric",
        });
    }
})

function getJwt(user) {
    const payload = {
        username: user.username,
    };

    const jwtOptions = {

    };

    return jwt.sign(payload, config.jwtSecret, jwtOptions);
}


module.exports = router