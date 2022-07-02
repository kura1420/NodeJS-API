const { createLogger, format, transports } = require('winston')
const dateFormatter = require('../library/date_formatter')

const { combine, timestamp, label, printf } = format;
var directory = './storage/logs'

let today = dateFormatter.today()
directory = directory + '/' + today

const myFormat = printf(({ level, message, label, timestamp }) => {
    return `### ${timestamp}, [${label}] ### \n ${level}: ${message} \n### END LINE ### \n\n`;
})

const config = {
    format: combine(
        timestamp({format: dateFormatter.timeStamp()}),
        myFormat
      ),
    transports: [
        new transports.File({ filename: directory + '/error.log', level: 'error' }),
        new transports.File({ filename: directory + '/info.log', level: 'info' }),
    ],
}

const _log = createLogger(config)

if (process.env.APP_MODE !== 'production') {
    _log.add(new transports.Console({
        format: format.simple(),
    }));
}

module.exports = _log