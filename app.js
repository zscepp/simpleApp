const express = require('express');
const app = express();
const port = process.env.port || 3000;

const {getData, getApi} = require('./script/api');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res)=>{
    res.render('index');
});

app.get('/about', (req, res)=>{
   
    res.render('about');
});

app.get('/api',  getData);
app.get('/json', getApi);

app.listen(port, ()=>{
    console.log('connmected to port ' + port);
});