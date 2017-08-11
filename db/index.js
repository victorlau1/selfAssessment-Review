const mysql = require('mysql');
const Promise = require('bluebird');
var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'plantlife',
  database: 'review'
})

const db = Promise.promisifyAll(conn);

const save = function(data) {
  var options = {
  sql: 'INSERT INTO videos () VALUES (?)',
  values: [data]
  }

  return db.queryAsync(options)

}


const get = function(request) {

  var options = {
  sql: 'SELECT * FROM ? WHERE ?',
  values: request
  }

  return db.query(options)

}

module.exports.save = save;
module.exports.db = db;
module.exports.get = get;