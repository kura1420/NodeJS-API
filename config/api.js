const axios = require('axios')

const {
    API_HOST
} = process.env

const _api = axios.create({
    baseURL: API_HOST,
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
    // withCredentials: false,
    // auth: {
    //     username: 'janedoe',
    //     password: 's00pers3cret'
    // },
});

module.exports = _api