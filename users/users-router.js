const router = require("express").Router()

const Users = require("./users-model.js")
const restricted = require("../auth/restricted-middleware.js")


router.get('/', restricted, (req, res) => {
    Users.find()
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => {
            res.json({ msg: err })
        })
})

module.exports = router
