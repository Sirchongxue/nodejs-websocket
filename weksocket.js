var express = require('express');
var wsio = require('websocket.io');
var app = express.createServer();
var server = wsio.attach(app);
 
    server.on("text",function(str){
        //broadcast(server,str.split(','));
        console.log('connect to server success')
        server.emit('my other event', { my: 'data' });
    });
    conn.on("close",function(code,reason){
        console.log('connection closed');
    });
    //处理错误事件信息
    conn.on('error',function(err){
        console.log('throw err',err);
    });

 app.listen(5000);