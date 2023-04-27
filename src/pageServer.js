const express = require('express');
const pageApp = express();
const path = require('path')


pageApp.use(express.static(path.join(__dirname, '../public')));

pageApp.get('/', (req, res) => {
  const filePath = path.join(__dirname, '../index.html');
  res.sendFile(filePath);
});

module.exports = { pageApp }