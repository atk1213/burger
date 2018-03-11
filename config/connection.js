var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3300,
  host: "localhost",
  user: "root",
  // remember to remove password when uploading
  password: "",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;