const express = require("express");
const router = require('./router');
const bodyParser = require('body-parser');

const app = express();
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Credentials", true)
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8")
    next()
  })
app.use(bodyParser.json()); //将请求转换成json格式
app.use('/api', router);

app.listen(3002, ()=>{
    console.log(3002);
})

