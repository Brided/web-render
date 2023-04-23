const express = require('express');
const server = new express();

server.get('/', (req, res) => {
  console.log(res.body);
  res.send('Hello World!')
});

server.listen(8080, () => {
  console.log("Hi!");
});