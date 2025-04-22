const express = require('express');
const { readFile } = require('fs');
const http = require('http');
const app = express();

app.get('/', (req, res) => {
    readFile('./home.html', 'utf8', (err, html) => {
        if (err) {
            res.status(500).send('Virhe tiedoston lukemisessa');
        }

        res.send(html)
    })
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Palvelin kuuntelee: http://localhost:3000');
});

