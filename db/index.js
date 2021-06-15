module.exports = require('mysql2').createConnection(process.env.JAWSDB_URL || process.env.LOCAL_URL)
