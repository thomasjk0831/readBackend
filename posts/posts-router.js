const router = require('express').Router()
const Post = require("./posts-model")
const restricted = require("../auth/restricted-middleware.js")


// module.exports = {
//     add,
//     find,
//     findById
// }

router.get('/', (req, res) => {
    Post.find()
        .then(post => {
            res.status(200).json(post)
        })
        .catch(err => {
            res.status(400).json({ msg: err })
        })
})

router.get('/:id', (req, res) => {
    Post.findById(req.params.id)
        .then(post => {
            res.status(200).json(post)
        })
        .catch(err => {
            res.status(400).json({ msg: err })
        })

})

//find all comments of posts
router.get('/:id/comments', (req, res) => {
    Post.findComments(req.params.id)
        .then(comments => {
            res.status(200).json(comments)
        })
        .catch(err => {
            res.status(400).json({ msg: err })
        })
})

//upvote a post
router.put('/upvote/:id', (req, res) => {
    Post.upVotePost(req.params.id)
        .then(count => {
            if (count) {
                res.status(201).json({ msg: "like upvoted" })
            }
            else {
                res.status(400).json({ msg: "error upvoted" })
            }
        })
        .catch(err => {
            res.status(500).json({ msg: "error updating like on server" })
        })
})

//downvote a post
router.put('/downvote/:id', (req, res) => {
    Post.downVotePost(req.params.id)
        .then(count => {
            if (count) {
                res.status(201).json({ msg: "like downvoted" })
            }
            else {
                res.status(400).json({ msg: "error downvoted" })
            }
        })
        .catch(err => {
            res.status(500).json({ msg: "error updating like on server" })
        })
})

router.post('/', restricted, (req, res) => {
    //title, body, user_id required, subreadit_id
    if (!req.body.title || !req.body.body || !req.body.user_id || !req.body.subreadit_id) {
        res.json({ msg: "title, body, user_id, req.body.subreadit_id required" })
    }
    else {
        Post.add(req.body)
            .then(post => {
                res.status(200).json(post)
            })
            .catch(err => {
                res.status(400).json({ msg: "error adding post to server" })
            })
    }
})

router.delete('/:id', restricted, (req, res) => {
    Post.trash(req.params.id)
        .then(count => {
            if (count) {
                res.status(200).json({ msg: "deleted" })
            }
            else {
                res.status(400).json({ msg: "error deleting" })
            }
        })
        .catch(err => {
            res.status(400).json({ msg: "error deleting post from server" })
        })
})

module.exports = router