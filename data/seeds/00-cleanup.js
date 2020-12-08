// this file will clean all tables and reset the primary keys back 1

const cleaner = require("knex-cleaner"); // npm i knex-cleaner

exports.seed = function (knex) {
    return cleaner.clean(knex, {
        mode: "truncate", // resets ids back 1
        ignoreTables: ["knex_migrations", "knex_migrations_lock"], // don't empty migration tables
    });
};
