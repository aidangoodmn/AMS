const port = 3000;

const videojs = require('video.js');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, '/public')));

app.listen(3000, function(){
    console.log('Server started on port 3000');
})