const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'az_marketing',
  port: 3306
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    console.error('Error details:', {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'az_marketing',
      port: 3306
    });
    return;
  }
  console.log('Connected to MySQL Database');
});

module.exports = connection;
