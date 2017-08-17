#!/usr/bin/env node

const { createServer } = require('http');

const port = process.env.PORT || 4001;
const host = process.env.HOST || 'localhost';

createServer((request, response) => {
  process.stderr.write('Received incoming streaming request\n');
  response.setHeader('Transfer-Encoding', 'chunked');
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  setInterval(() => response.write(Buffer.from(`${Date.now()}\n`)), 100);
})
.listen(port, host, () => process.stderr.write(`Server started on port ${port}\n`));
