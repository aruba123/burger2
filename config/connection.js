//pull in required dependencies
var mysql = require('mysql');

// create the MySql connection object
var connection;

if (process.env.JASWDB_URL)  {
    //DB is JawsDB on Heroku

    // "production": {
    //     "username": "q734httncql7kcp0",
    //     "password": "iua4j1o7jkbnndiz",
    //     "database": "database_production",
    //     "host": "op2hpcwcbxb1t4z9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    //     "dialect": "mysql"
    //   },




    connection = mysql.createConnection(process.env.JAWSDB_URL);
    



   




    

} else {
        // DB is local on localhost
        connection = mysql.createConnection({
            port :3306,
            host:'localhost',
            user: 'root',
            password: 'root',
            database: 'burgers_db'


        })

};

// Make the connection to MySql

connection.connect(function(err){

    if (err){
    console.error ( 'ERROR: MySQL  connection error --' + err.stack + '\n\n');
    return;

}

console.log('conected to MYSQL database as id ' + connection.threadId + '\n\n');

});

// Export connection for ORM use

module.exports = connection;




