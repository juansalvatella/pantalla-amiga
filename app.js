// Copyright 2015, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser());
var path = require('path');

// [START hello_world]
// Say hello!
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/css/main.css', function(req, res) {
  res.sendFile(path.join(__dirname + req.url));
});

app.get('/css/normalize.min.css', function(req, res) {
  res.sendFile(path.join(__dirname + req.url));
});
app.get('/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js', function(req, res) {
  res.sendFile(path.join(__dirname + req.url));
});
app.get('/js/main.js', function(req, res) {
  res.sendFile(path.join(__dirname + req.url));
});

app.post('/i-am-sitting-in', function(req, res) {
  var color = [1,0,1,0,1,0];
  var row = ~~(req.body.seat/7);
  var col = (req.body.seat-1) % 6;
  var c = color[col];
  if(row % 2)
  {
    if(color[col]) res.sendFile(path.join(__dirname + '/blue.html'));
    else res.sendFile(path.join(__dirname + '/red.html'));
  }
  else
  {
    if(color[col] == 0) res.sendFile(path.join(__dirname + '/blue.html'));
    else res.sendFile(path.join(__dirname + '/red.html'));
  }
});

app.post('/i-am-sitting-in/:seat', function(req, res) {
  res.send(getColor(req.body.seat));
});

app.get('/img/background.jpg', function(req, res) {
  res.sendFile(path.join(__dirname + req.url));
});
// [END hello_world]


// [START server]
// Start the server
var server = app.listen(process.env.PORT || 8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});
// [END server]
