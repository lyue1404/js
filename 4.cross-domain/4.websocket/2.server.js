const express =  require('express');
const Websocket =  require('ws');
const app = express();

let wss = new Websocket.Server({port:4000});
wss.on('connection', function(ws) {
    ws.on('message', function(data) {
        console.log(data);
        ws.send('我收到消息了')
    })
})
