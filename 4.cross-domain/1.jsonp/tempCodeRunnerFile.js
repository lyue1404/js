
let express = require('express');
let app = express();
app.get('/say', (req,res) => {
    let {kw, callback} = req.query;
    res.setHeader('Content-Type','application/json;charset=utf-8')
    res.end(`${callback}('跨域jsonp')`);
});
app.listen(3000);