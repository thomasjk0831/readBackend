const db = require('../data/connection')


module.exports = {
    add,
    find,
    findById,
    upVote,
    downVote,
    trash
}

// select c.*, u.username
// from comments as c
// join users as u on u.id = c.user_id
function find() {
    return db.select("c.*", "u.username")
        .from("comments as c")
        .join("users as u", "u.id", "=", "c.user_id")
}

// select c.*
// from comments as c
// where post_id = 3
//find comments based on postid
function findById(post_id) {
    return db.select("c.*", "u.username")
        .from("comments as c")
        .join("users as u", "u.id", "=", "c.user_id")
        .where({ post_id })
}

//insert into comments() values()
function add(comment) {
    return db("comments").insert(comment, "id")
        .then(ids => {
            return findById(comment.post_id)
        })
}

function trash(id) {
    return db("comments").del().where({ id })
}

function findCommentLikes(id) {
    return db.select("c.likes").from("comments as c").where({ id })
}

// // update posts set likes = likes+1 where id=1
// async function upVotePost(id) {
//     let [temp] = await findPostLikes(id)
//     temp.likes = temp.likes + 1

//     return db("posts")
//         .update({ likes: temp.likes })
//         .where({ id })
// }

async function upVote(id) {
    let [temp] = await findCommentLikes(id)
    temp.likes = temp.likes + 1
    return db('comments').update({ likes: temp.likes }).where({ id })
}
async function downVote(id) {
    let [temp] = await findCommentLikes(id)
    temp.likes = temp.likes - 1
    return db('comments').update({ likes: temp.likes }).where({ id })
}
