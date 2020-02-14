const userData = {
    "user1": {
        "id": 1,
        "name": "tom",
        "password": "hello123",
        "profession": "teacher"
    },
    "user2": {
        "id": 2,
        "name": "jack",
        "password": "123456",
        "profession": "librarian"
    },
    "user3": {
        "id": 3,
        "name": "mike",
        "password": "test",
        "profession": "doctor"
    }
};

const express = require('express');
const body_parse = require('body-parser');
const  api = require('./api/test-api');
const app = express();

app.use(body_parse.json({limit: '1mb'}));  //body-parser 解析json格式数据
app.use(body_parse.urlencoded({            //此项必须在 bodyParser.json 下面,为参数编码
    extended: true
}));

app.get('/api/view', function (req, res) {
    res.end(JSON.stringify(userData));
})

app.post('/api/save',function (req,res) {
    var bodyData = req.body;
    console.log(bodyData);
    res.send({"status":"ok","parameters":bodyData});
})


app.get('/api/get/:id',function (req,res) {
    var params = req.params.id;
    console.log("用户请求的参数为: " + params);
    api(params,(result)=>{
        res.end(JSON.stringify(result));
    });
})



var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("访问地址为 http://%s:%s", host, port)
})

