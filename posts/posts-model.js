const db = require('../data/connection')


module.exports = {
    add,
    find,
    findById,
    findComments,
    trash,
    upVotePost,
    downVotePost
}

// select p.*, u.username, s.name as subreadit
// from posts as p
// join users as u on p.user_id = u.id
// join subreadit as s on s.id = p.subreadit_id
function find() {
    return db.select("p.*", "u.username", "s.name as subreadit")
        .from("posts as p")
        .join("users as u", "p.user_id", "=", "u.id")
        .join("subreadit as s", "s.id", "=", "p.subreadit_id")
}

function findPostLikes(id) {
    return db.select("p.likes").from("posts as p").where({ id })
}

// update posts set likes = likes+1 where id=1
async function upVotePost(id) {
    let [temp] = await findPostLikes(id)
    temp.likes = temp.likes + 1

    return db("posts")
        .update({ likes: temp.likes })
        .where({ id })
}
async function downVotePost(id) {
    let [temp] = await findPostLikes(id)
    temp.likes = (temp.likes - 1)
    return db("posts")
        .update({ likes: temp.likes })
        .where({ id })
}

// select p.*, u.username, s.name as subreadit
// from posts as p
// join users as u on p.user_id = u.id
// join subreadit as s on s.id = p.subreadit_id
// where p.id = 2
function findById(id) {
    return db.select("p.*", "u.username", "s.name as subreadit")
        .from("posts as p")
        .join("users as u", "p.user_id", "=", "u.id")
        .join("subreadit as s", "s.id", "=", "p.subreadit_id")
        .where("p.id", "=", id)
        .first()
}

//
// select c.*, u.username
// from comments as c
// join users as u on c.user_id = u.id
// where post_id = id
function findComments(id) {
    return db.select("c.*", "u.username")
        .from('comments as c')
        .join("users as u", "c.user_id", "=", "u.id")
        .where("c.post_id", "=", id)
}

//insert into posts() values()
function add(post) {
    return db("posts").insert(post, "id")
        .then(ids => {
            return findById(ids[0])
        })
}

function trash(id) {
    return db("posts").del().where({ id })
}