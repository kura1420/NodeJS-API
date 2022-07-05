const generator = require('../library/generator')
const _logger = require('../library/logger')
const CrudModel = require('../model/CrudModel')

exports.index = async (req, res, next) => {
    try {
        let rows = await CrudModel.rows()

        res
            .status(200)
            .json(rows)
    } catch (error) {
        _logger.write(__filename, 'error', next)

        next(error)
    }
}

exports.store = async (req, res, next) => {
    try {
        let {
            name,
            email,
        } = req.body

        let params = [
            generator.uuidv4(),
            name.trim(),
            email.trim(),
        ]
        
        await CrudModel.insert(params);

        res
            .status(201)
            .json('ok')
    } catch (error) {
        _logger.write(__filename, 'error', next)

        next(error)
    }
}

exports.show = async (req, res, next) => {
    try {
        let { id } = req.params

        let row = await CrudModel.row([id]);

        res
            .status(200)
            .json(row)
    } catch (error) {
        _logger.write(__filename, 'error', error)

        next(error)
    }
}

exports.put = async (req, res, next) => {
    try {
        let { id } = req.params

        let {
            name,
            email,
        } = req.body

        let params = [
            id,
            name,
            email,
        ]

        await CrudModel.update(params);

        res
            .status(200)
            .json('ok')
    } catch (error) {
        _logger.write(__filename, 'error', error)

        next(error)
    }
}

exports.destroy = async (req, res, next) => {
    try {
        let { id } = req.params

        await CrudModel.destroy([id])

        res
            .status(200)
            .json('ok')
    } catch (error) {
        _logger.write(__filename, 'error', error)

        next(error)
    }
}