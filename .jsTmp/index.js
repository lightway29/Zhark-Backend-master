var app = require('express')();
var http = require('http').Server(app);
var cors = require('cors');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.post('/createTopic', function (req, res) {
    res.sendStatus(200);
});
app.get('/test', function (req, res) {
    res.send('test');
});
