const fetch = require('node-fetch');


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
  }
};
