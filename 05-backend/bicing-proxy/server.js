const express = require('express')
const request = require('request');
const app = express()
const port = 3000

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, myResponse) =>  {
  request('http://wservice.viabicing.cat/v2/stations',{ json: true }, (err, res, body) => {
    if (err) { return console.log(err)}
    myResponse.send(body)
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
