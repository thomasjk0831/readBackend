exports.seed = function (knex) {
    const subreadit = [
        {
            name: "Introductions"  //id:1
        },
        {
            name: "hobbies"
        },
    ];

    return knex("subreadit").insert(subreadit);
};
