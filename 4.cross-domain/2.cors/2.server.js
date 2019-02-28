let express = require('express');

let app = express();
let  whiteList = ['http://localhost:3000'];
app.use((req,res,next) => {
    let origin = req.headers.origin;
    if(whiteList.includes(origin)){
        res.setHeader('Access-Control-Allow-Origin',origin);
        res.setHeader('Access-Control-Allow-Methods','PUT');
        res.setHeader('Access-Control-Allow-Credentials',true);
        res.setHeader('Access-Control-Allow-Headers','name');
        res.setHeader('Access-Control-Max-Age',6);
        res.setHeader('Access-Control-Expose-Headers','name');

        res.setHeader('Content-Type','application/json;charset=utf-8');
        if(res.method === 'OPTIONS') {
            res.end();
        }
    }
    next();
});

app.put('/getData', (req,res) => {
    res.end('前端架构');
})

app.listen(4000);