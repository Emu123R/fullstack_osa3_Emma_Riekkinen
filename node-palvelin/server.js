const express = require('express');
const { readFile } = require('fs').promises;
const http = require('http');
const app = express();

app.get('/', async (req, res) => {
    response.send( await readFile('home.html', 'utf8'));
});

app.listen(process.env.DATABASE_PORT || 3000, () => {
    console.log('Palvelin kuuntelee: http://localhost:3000');
});

