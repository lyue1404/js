const express = require('express');

let app = express();

app.put('/getData', (res,req) => {
    console.log(res.header);
    res.end('前端架构');

})

app.listen(3000)