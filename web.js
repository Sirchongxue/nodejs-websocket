var ws=require('nodejs-websocket');
var SerialPort = require('serialport')

var server = ws.createServer(function (conn, res) {
    conn.on("text",function(str){
        //broadcast(server,str.split(','));
        //console.log(str);
        //conn.sendText(str);
        //console.log('connect to server success')
        //server.emit('my other event', { my: 'data' });
        hander(str,conn);
    });
    conn.on("close",function(code,reason){
        console.log('connection closed');
    })
    //处理错误事件信息
    conn.on('error',function(err){
        console.log('throw err',err);
    })
}).listen(5000);
 
function hander(str,conn) {  
        //发送数据到客户端
    //console.log(str);
    var arr = str.split('');
    if(arr[2]==1){//close
        arr[2]=0;
    }else{
        arr[2]=1;
    }
    //console.log(arr.join(''));
      conn.sendText(arr.join(''));   
}
