
exports.up = function (knex) {
    return (knex.schema
        .createTable("users", tbl => {
            tbl.increments();
            tbl.string("username").unique().notNullable();
            tbl.string("password").notNullable();



        })
        .createTable("subreadit", tbl => {
            tbl.increments()
            tbl.string("name", 128).unique().notNullable()
        })

        .createTable("posts", tbl => {

            tbl.increments()
            tbl.string("title", 128).notNullable()
            tbl.text("body", 512).notNullable()
            tbl.integer("likes").defaultTo(0)
            tbl.integer("user_id")
                .unsigned()
                .notNullable()
                .references('users.id')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
            tbl.integer("subreadit_id")
                .unsigned()
                .notNullable()
                .references('subreadit.id')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
        })
        .createTable("comments", tbl => {
            tbl.increments()
            tbl.text("body", 512).notNullable()
            tbl.integer("likes").defaultTo(0)
            tbl.integer('user_id')
                .unsigned()
                .notNullable()
                .references('users.id')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
            tbl.integer('post_id')
                .unsigned()
                .notNullable()
                .references('posts.id')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
        })
    )
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users').dropTableIfExists('posts').dropTableIfExists('comments').dropTableIfExists('subreadit')
};
