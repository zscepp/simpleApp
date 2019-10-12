const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('pages/index');
});

app.get('/about', (req, res)=>{
    res.render('pages/about');
});

app.listen(port, ()=>{
    console.log('connmected to port ' + port);
});