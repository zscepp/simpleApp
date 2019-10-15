const fetch = require('node-fetch');
const https = require('https');


module.exports = {
  getData: (req, res) => {
    fetch('https://api.github.com/users/github')
      .then(res => res.json())
      .then(json =>{
        res.render('api.ejs', {
          title: 'GitHub API Test',
          record: json
        });
      });

  },
  getApi:(req, res) => {
    fetch('https://api.github.com/users/github')
      .then(res => res.json())
      .then(json =>{
        res.send(json);
      });
  },
  getNasa:(req, res) =>{
    https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', resp =>{
    let data = '';
    resp.on('data', chunk =>{
        data += chunk;
    });
    resp.on('end', () =>{
        let url = JSON.parse(data).hdurl;
        let date = JSON.parse(data).date;
        let des = JSON.parse(data).explanation;
        let title =JSON.parse(data).title;
        res.render('image.ejs', {
          title: title,
          date: date,
          des: des,
          record: url
        });
    });
}).on('error', err =>{
    console.log('error: ' + err.message);
});
  }
};