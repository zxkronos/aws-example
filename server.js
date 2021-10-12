const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('<h1>hello world con express!</h1>'))

app.listen(80);
console.log('Server on port 80');