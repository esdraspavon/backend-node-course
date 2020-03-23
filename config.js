module.exports = {
  api:{
    port: process.env.API_PORT || 3000,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'secretomaximo',
  },
  mysql: {
    host: process.env.MYSQL_HOST || 'remotemysql.com',
    user: process.env.MYSQL_USER || 'gcgRLNsc1X',
    password: process.env.MYSQL_PASS || 'lcgosh979Y',
    database: process.env.MYSQL_DB || 'gcgRLNsc1X',
  },
  mysqlService: {
    port: process.env.MYSQL_SRV_PORT || 3001,
  }
};
