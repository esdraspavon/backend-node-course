const mysql = require('mysql');

const config = require('../config');

const dbConfig = {
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
};
console.log(dbConfig);
let connection;

function handleCon() {
  connection = mysql.createConnection(dbConfig);

  connection.connect((err) => {
    if (err) {

      console.error('[db error] ',err);
      setTimeout(handleCon, 2000);
    } else {
      console.log('DB Connected!');
    }
  });

  connection.on('error', err => {
    console.error('[db error] ',err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleCon();
    } else {
      throw err;
    }
  })
}

handleCon();

function list(table) {
  return new Promise((resolve, reject) => {
    connection.query(`Select * FROM ${table}`, (err, data) => {
      if (err) return reject(err)
      resolve(data)
    })
  })
}

module.exports = {
  list,
}