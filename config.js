module.exports = {
  api:{
    port: process.env.API_PORT || 3000,
  },
  post:{
    port: process.env.POST_PORT || 3002,
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
    host:process.env.MYSQL_SRV_HOST || 'localhost',
    port: process.env.MYSQL_SRV_PORT || 3001,
  },
  cacheService: {
    port: process.env.CACHE_SRV_PORT || 3003,
    host: process.env.CACHE_SRV_HOST || 'localhost',
  }
};
