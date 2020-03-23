const store = require('../../../store/mysql');

const controller = require('./Controller');

module.exports = controller(store);