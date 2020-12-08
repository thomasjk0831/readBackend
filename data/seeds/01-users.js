exports.seed = function (knex) {
    const users = [
        {
            username: "Frodo", // id: 1
            password: "Baggins"
        },
        {
            username: "Luke", // id: 2
            password: "Skywalker"
        },
    ];

    return knex("users").insert(users);
};
