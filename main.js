const express = require('express');
const server = new express();
const port = process.env.PORT || 8080;

server.use(express.urlencoded({extended:true}));
server.use(express.static('public'));

server.get('/', (req, res) => {
  console.log('sent index.html');
  res.sendFile('index.html', {root: 'public'});
});

server.listen(port, () => {
  console.log(`Hi on port ${port}`);
});