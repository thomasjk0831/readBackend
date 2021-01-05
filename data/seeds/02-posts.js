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
        {
            title: "what is your favorite movie?",
            body: "Mine is star wars",
            user_id: 3,
            subreadit_id: 3
        },
        {
            title: "what is your favorite show?",
            body: "Mine is Game of thrones",
            user_id: 2,
            subreadit_id: 4
        },

    ];

    return knex("posts").insert(posts);
};
