const fetch = require('node-fetch');

fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
.then(Response =>Response.json())
.then(json => {
    console.log(json.title)
}).catch(console.error());
