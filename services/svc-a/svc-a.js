const express = require('express')
const app = express()
const Client = require('node-rest-client').Client;
const client = new Client();
require('dotenv').config()

app.get('/', function (req, res, next) {
  res.send("hello from svc a")
})

app.get('/health', (req, res, next) => {
  res.sendStatus(200);
});

app.get('/getDataFromSvcB', (req, res, next) => {
  client.get(`http://${process.env.SERVICEA}/data`, function (data, response) {
    console.log(data);
    res.send(data)
  });
});

app.listen(3001, "0.0.0.0")
console.log("svc a is up and running")