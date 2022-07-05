class CrudModel {

    constructor () {
        this._pg_pool = require('../config/database')
        this._logger = require('../library/logger')

        this.table = 'public.test'
    }

    async rows () {
        let result = await this._pg_pool
            .query(`SELECT * FROM ${this.table}`)
            .then(res => res.rows)
            .catch(err => {
                this._logger.write(__filename, 'error', err)
                next(error)
            })

        return result;
    }

    async insert (params) {
        let query = {
            text: `INSERT INTO ${this.table}
                (id, name, email)
            VALUES($1, $2, $3);`,
            values: params,
        }

        let result = await this._pg_pool
            .query(query)
            .then(res => res.rows)
            .catch(err => {
                this._logger.write(__filename, 'error', err)
                next(error)
            })

        return result
    }
    
    async row (params) {
        let query = {
            text: `SELECT * FROM ${this.table} WHERE id = $1`,
            values: params,
        }

        let result = await this._pg_pool
            .query(query)
            .then(res => res.rows)
            .catch(err => {
                this._logger.write(__filename, 'error', err)
                next(error)
            })

        return result
    }

    async update (params) {
        let query = {
            text: `UPDATE ${this.table}
                SET name=$2, email=$3
            WHERE id=$1`,
            values: params,
        }

        let result = await this._pg_pool
            .query(query)
            .then(res => res.rows)
            .catch(err => {
                this._logger.write(__filename, 'error', err)
                next(error)
            })

        return result
    }

    async destroy (params) {
        let query = {
            text: `DELETE FROM ${this.table} WHERE id=$1;`,
            values: params,
        }

        let result = await this._pg_pool
            .query(query)
            .then(res => res.rows)
            .catch(err => {
                this._logger.write(__filename, 'error', err)
                next(error)
            })

        return result
    }

}

module.exports = new CrudModel