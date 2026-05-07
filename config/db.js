const mysql = require("mysql2");
const env = require("dotenv").config();

// Create connection pool (better than single connection)
const db = mysql.createPool({
  host: process.env.HOST ,
  user: process.env.USER ,
  password: process.env.PASSWORD , 
  database: process.env.DATABASE,
  waitForConnections: process.env.WAITFORCONNECTIONS,
  connectionLimit: parseInt(process.env.CONNECTIONLIMIT),
  queueLimit: parseInt(process.env.QUEUELIMIT)
});

// Optional: Test connection
db.getConnection((err, connection) => {
  if (err) {
    console.error("❌ Database connection failed:", err.message);
  } else {
    console.log("✅ MySQL Connected...");
    connection.release();
  }
});

module.exports = db;