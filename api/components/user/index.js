// const store = require('../../../store/mysql');
const store = require('../../../store/remote-mysql');
let cache = require('../../../store/redis');

const controller = require('./controller');

module.exports = controller(store, cache);