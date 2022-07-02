const { Pool } = require('pg')
const {
    DB_HOST,
    DB_PORT,
    DB_NAME,
    DB_USER,
    DB_PASS,
} = process.env

const _pg_pool = new Pool({
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME,
    user: DB_USER,
    password: DB_PASS,
})

module.exports = _pg_pool