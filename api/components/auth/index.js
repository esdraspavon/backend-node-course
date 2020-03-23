// const store = require('../../../store/mysql');
const store = require('../../../store/remote-mysql');

const controller = require('./Controller');

module.exports = controller(store);