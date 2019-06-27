// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/whoami", function(req, res) {
  let ip = req.ip
  let lang = req.headers["accept-language"]
  let info = req.headers['user-agent']
  res.send({ ipaddress: ip, language: lang, software: info });
});

// listen for requests
var listener = app.listen(process.env.PORT||8080,  () =>{
  console.log('app is listening on port ' + listener.address().port);
});