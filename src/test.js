var express = require('express');
var app = express();
app.all('*', function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "X-Requested-With");
res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
res.header("X-Powered-By",' 3.2.1')
res.header("Content-Type", "application/json;charset=utf-8");
next();
});
var mysql = require('mysql');
var connection = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'video'
    });
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var movieinfo = () => new Promise(function(resolve,reject){
    connection.query(
        "SELECT * FROM Movietype",
        function select(err, results) {
            if (results) {
                resolve(results);
            }
            if (err) {
                console.log(err);
            }
           
        }
    );
});
app.get('/movieinfo', function (req, res) {
movieinfo().then(function(value){
res.end(JSON.stringify(value))});
})
var server = app.listen(8081, function () {
var host = server.address().address;
var port = server.address().port;
console.log("应用实例，访问地址为 http://%s:%s", host, port);})
process.on('uncaughtException', function (err) {
  //打印出错误
  console.log(err);
  //打印出错误的调用栈方便调试
  console.log(err.stack);
});

