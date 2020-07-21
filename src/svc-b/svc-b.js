const express = require('express')
const app = express()

app.get('/', function (req, res, next) {
    res.send("hello from svc b");
})

app.get('/health', (req, res, next) => {
    res.sendStatus(200);
});

app.get('/data', (req, res, next) => {
    res.send("This is the data");
});

app.listen(3002, "0.0.0.0")
console.log("svc b is up and running")