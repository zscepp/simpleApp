const https = require('https');

https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', resp =>{
    let data = '';
    resp.on('data', chunk =>{
        data += chunk;
    });
    resp.on('end', () =>{
        let url = JSON.parse(data).hdurl;
        console.log(url);
    });
}).on('error', err =>{
    console.log('error: ' + err.message);
});