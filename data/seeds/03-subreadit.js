exports.seed = function (knex) {
    const subreadit = [
        {
            name: "introductions"  //id:1
        },
        {
            name: "hobbies"
        },
        {
            name: "movies"
        },
        {
            name: "tv"
        },
        {
            name: "programming"
        },

    ];

    return knex("subreadit").insert(subreadit);
};
