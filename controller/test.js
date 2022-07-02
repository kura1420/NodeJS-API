const pg_pool = require("../config/database")

exports.index = async (req, res, next) => {
    try {
        pg_pool
            .query('SELECT NOW()')
            .then(res => console.log(res))
            .catch(err => console.log(err))
        
        res
            .status(200)
            .send('ok')
    } catch (error) {
        next(error)
    }
}