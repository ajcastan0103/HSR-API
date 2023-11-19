const Pool = require('pg').Pool;

const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"characters",
    password:"0103",
    port: 5432

});

module.exports = pool;