exports.seed = function (knex) {
    const subreadit = [
        {
            name: "Introductions"  //id:1
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

    ];

    return knex("subreadit").insert(subreadit);
};
