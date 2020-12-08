exports.seed = function (knex) {
    const comments = [
        {
            body: "Hi Frodo!",
            user_id: 2,
            post_id: 1
        },
        {
            body: "Hi Luke!",
            user_id: 1,
            post_id: 2
        },
        {
            body: "Me too!",
            user_id: 2,
            post_id: 3
        },
        {
            body: "Nice!",
            user_id: 1,
            post_id: 3
        },


    ];

    return knex("comments").insert(comments);
};
