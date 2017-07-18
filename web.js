var express = require("express");
// var mysql = require('mysql');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
response.send('Hello World!!!! HOLA MUNDO!!!! Samir') ;
}) ;
/*
var connection = mysql.createConnection({
    host: 'us-cdbr-iron-east-03.cleardb.net',
    user: 'b460130c5167cb',
    password: '823ae753s',
    database: 'heroku_68e2a378e2e9fea'
});

connection.connect();
*/
/*

app.get('/', function(request, response) {
	    connection.query('SELECT * from t_users', function(err, rows, fields) {
        if (err) {
            console.log('error: ', err);
            throw err;
        }
        response.send(['Hello World!!!! HOLA MUNDO!!!! Samir', rows]);
    });
});
*/
var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
