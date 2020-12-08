const db = require('../data/connection')

module.exports = {
    add,
    find,
    findBy,
    findById
}

function find() {
    return db('users')
}

function findBy(filter) {
    return db("users").where(filter)
}

function findById(id) {
    return db('users').where({ id }).first()
}

function add(user) {
    return db('users').insert(user, "id")
        .then(ids => {
            return findById(ids[0])
        })
}