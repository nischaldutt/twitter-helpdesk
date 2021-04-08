const mysql = require("mysql");

const CONSTANTS = require("../properties/constants");

const connection = mysql.createConnection({
  host: "localhost",
  user: "nischal",
  password: "root",
  database: "twitter-helpdesk",
});

connection.connect((err) => {
  if (err) {
    console.log({ status: CONSTANTS.DATABASE_CONNECTION_ERROR, error: err });
  } else {
    console.log({ status: CONSTANTS.DATABASE_CONNECTED });
  }
});
