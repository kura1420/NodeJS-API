class Logger {

    constructor () {
        this.path = require('path')
        this.log = require('../config/log')
    }

    write (thisfile, level, message) {
        let filename = this.path.resolve(thisfile);

        switch (level) {
            case 'error':
                this.log.error({
                    label: filename,
                    message: message
                })                
                break;
        
            default:
                break;
        }
    }

}

module.exports = new Logger