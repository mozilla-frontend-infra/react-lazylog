require('isomorphic-fetch');

const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/ping', function(req, res) {
  return res.send('pong');
});

app.get('/text', (req, res) => {
  fetch('https://taskcluster-artifacts.net/XEyu7ICDSsGZdSAwPs9Wnw/0/public/logs/live_backing.log')
    .then(resp => resp.text())
    .then(resp => res.send(resp));
});

app.get('/text3', (req, res) => {
  const text = fs.readFileSync(path.join(__dirname, 'test3.txt'), 'utf8');
  res.send(text);
});
app.get('/text2', (req, res) => {
  const text = fs.readFileSync(path.join(__dirname, 'test.txt'), 'utf8');
  res.send(text);
});

app.listen(process.env.PORT || 3002);
