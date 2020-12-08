const db = require('../data/connection')

module.exports = {
    find,
    findPostsByName,
    add
}

function find() {
    return db('subreadit')
}

function add(name) {
    return db("subreadit").insert({ name }, "id")
        .then(ids => {
            return find()
        })
}

//name is subreadit name. returns all posts 
// select p.*, s.name, u.username
// from subreadit as s
// join posts as p on s.id = p.subreadit_id
//join users as u on u.id = p.user_id
// where s.name = "Introductions"
function findPostsByName(name) {
    //     select p.*, s.name, u.username, u.id
    // from subreadit as s
    // join posts as p on s.id = p.subreadit_id
    // join users as u on u.id = p.user_id
    // where s.name = "hobbies"
    return db
        // .select("p.id", "p.title", "p.body", "p.likes", "u.username")
        .select("p.*", "s.name", "u.username")
        .from("posts as p")
        .join("subreadit as s", "s.id", "=", "p.subreadit_id")
        .join("users as u", "u.id", "=", "p.user_id")
        .where("s.name", "=", name)
}