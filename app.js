const express = require('express');
const app = express();
const port = process.env.port || 3000;

const {getData, getApi, getNasa} = require('./script/api');
const isNPM = require('is-npm');


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res)=>{
    res.render('index');
});

app.get('/about', (req, res)=>{
    res.render('about');
});

app.get('/image',  getNasa);
app.get('/api',  getData);
app.get('/json', getApi);

// handle 404 routing
app.use((req, res, next) => {
    res.status(404).render('404');
});

app.listen(port, ()=>{
    console.log('connmected to port ' + port);
    console.table({isNPM});
});