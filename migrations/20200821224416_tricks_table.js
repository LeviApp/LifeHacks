
exports.up = function(knex, Promise) {
    return knex.schema.createTable('tricks', function(table) {
        table
            .increments()
            .unsigned();
        table
            .string('user_id')
            .notNullable();
        table
            .string('title')
            .notNullable();
        table
            .string('summary')
            .notNullable();
        table
            .string('body')
            .notNullable();
        table
            .integer('likes')
            .notNullable()
            .unsigned()
            .defaultTo(0);
        table
            .integer('dislikes')
            .notNullable()
            .unsigned()
            .defaultTo(0);
        table
            .integer('tried')
            .notNullable()
            .unsigned()
            .defaultTo(0);
        table
            .integer('views')
            .notNullable()
            .unsigned()
            .defaultTo(0);
        table.specificType('tags', 'text ARRAY');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
  
};
