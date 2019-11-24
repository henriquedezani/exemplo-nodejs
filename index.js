const express = require('express');

const app = express();

app.get('/', function(req, res) {
    res.send("Hello World");
});

app.get('/teste', function(req, res) {
    res.send(`Hello World ${req.query.nome}`);
});


const server = app.listen(3000);
console.log(`Servidor executando na porta ${server.PORT}`);
