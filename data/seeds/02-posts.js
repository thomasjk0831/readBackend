exports.seed = function (knex) {
    const posts = [
        {
            title: "Hi guys!",
            body: "Let me introduce myself. I am Frodo from the Shire. I am a Hobbit",
            user_id: 1,
            subreadit_id: 1
        },
        {
            title: "Hi guys!",
            body: "Let me introduce myself. I am Luke. I am a Jedi",
            user_id: 2,
            subreadit_id: 1
        },
        {
            title: "what do you do for fun",
            body: "Me, I like to go on adventures",
            user_id: 1,
            subreadit_id: 2
        },

    ];

    return knex("posts").insert(posts);
};
