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
        {
            username: "Darth",
            password: "Vader"
        },
    ];

    return knex("users").insert(users);
};
