const port = 3000;

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, '/public')));

app.get('/home', function(req, res){
    res.render('home');
})

app.get('/test', function(req, res){
    res.render('test');
})

app.listen(3000, function(){
    console.log('Server started on port 3000');
})





