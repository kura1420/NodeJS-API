const _api = require("../config/api")
const _logger = require('../library/logger')

exports.index = async (req, res, next) => {
    try {
        let result = await _api.get('/posts')
            .then(res => res)
            .catch(err => console.log(err))

        let status = result.status
        let data = result.data

        res
            .status(status)
            .json(data)
    } catch (error) {
        _logger.write(__filename, 'error', next)

        next(error)
    }
}

exports.store = async (req, res, next) => {
    try {
        let params = {
            title,
            author,
        } = req.body

        let result = await _api.post('/posts', params)
            .then(res => res)
            .catch(err => console.log(err))

        let status = result.status
        let data = result.data

        res
            .status(status)
            .json(data)
    } catch (error) {
        _logger.write(__filename, 'error', next)

        next(error)
    }
}

exports.show = async (req, res, next) => {
    try {
        let { id } = req.params

        let result = await _api.get('/posts/' + id)
            .then(res => res)
            .catch(err => console.log(err))

        let status = result.status
        let data = result.data

        res
            .status(status)
            .json(data)
    } catch (error) {
        _logger.write(__filename, 'error', next)

        next(error)
    }
}

exports.put = async (req, res, next) => {
    try {
        let { id } = req.params

        let params = {
            title,
            author,
        } = req.body

        let result = await _api.put('/posts/' + id, params)
            .then(res => res)
            .catch(err => console.log(err))

        let status = result.status
        let data = result.data

        res
            .status(status)
            .json(data)
    } catch (error) {
        _logger.write(__filename, 'error', next)

        next(error)
    }
}

exports.delete = async (req, res, next) => {
    try {
        let { id } = req.params

        let result = await _api.delete('/posts/' + id)
            .then(res => res)
            .catch(err => console.log(err))

        let status = result.status
        let data = result.data

        res
            .status(status)
            .json(data)
    } catch (error) {
        _logger.write(__filename, 'error', next)

        next(error)
    }
}