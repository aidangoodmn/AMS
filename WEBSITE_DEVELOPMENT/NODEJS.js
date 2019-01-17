const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const videojs = require('video.js');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', function (req,res){
    res.sendFile(__dirname + 'public/style.CSS');
});

fs.readFile('hub.html', (err, html) => {
    if(err){
        throw err;
    }

    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        res.write(html);
        res.end();
    });

    server.listen(port,hostname, () =>{
        console.log('server started on port '+port);
    });
})
