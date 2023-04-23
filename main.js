const express = require('express');
const server = new express();
const port = process.env.PORT || 8080;

server.get('/', (req, res) => {
  console.log(res.body);
  res.send('Hello World!')
});

server.listen(port, () => {
  console.log(`Hi on port ${port}`);
});