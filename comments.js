// create web server
// 1. load express module
const express = require('express')
// 2. create express object
const app = express()
// 3. create web server
app.listen(3000, function () {
  console.log('server running at http://