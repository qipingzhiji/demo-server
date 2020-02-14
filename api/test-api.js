const mysqlConfig = require('../database/dbconfig');
var mysql = require('mysql');

var connection = mysql.createConnection(mysqlConfig.mysql);

connection.connect();



module.exports = function (id,successCallback){
        connection.query("select * from teacher where id = ?",[id],(err,result)=>{
            if(err) {
                console.log("查询出错" + err.message);
                return;
            }
            console.log("查询到的数据是" + JSON.stringify(result));
            successCallback(result)
        })
    }