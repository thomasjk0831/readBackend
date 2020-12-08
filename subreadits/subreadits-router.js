const router = require("express").Router()
const restricted = require("../auth/restricted-middleware.js")
const Subs = require("./subreadits-model")

router.get('/', (req, res) => {
    Subs.find()
        .then(subs => {
            res.status(200).json(subs)
        })
        .catch(err => {
            res.json({ msg: err })
        })
})

router.post('/', restricted, (req, res) => {
    Subs.add(req.body.name)
        .then(sub => {
            res.status(200).json(sub)
        })
        .catch(err => {
            res.json({ msg: err })
        })
})

//find posts of subreadit id 
router.get('/:id', (req, res) => {
    console.log(req.params.id)
    Subs.findPostsByName(req.params.id)
        .then(posts => {
            res.status(200).json(posts)
        })
        .catch(err => {
            res.status(200).json({ msg: err.message })
        })
})

module.exports = router