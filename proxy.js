const express = require('express');
const cors = require('cors')
const sites = require('./docs/sites.json');
const axios = require('axios');

const app = express();
const port = 3000;
app.use(cors())

app.get('/:site/:ip', (req, res) => {
  const site = req.params.site;
  const ip = req.params.ip;
  if (site in sites) {
    let url = sites[site]["server"].replace('8.8.8.8', ip);

    // fetch url and return response
    axios.get(url)
      .then(response => {
        res.send(response.data);
      })
      .catch(error => {
        res.send('Error with request to ' + site);
      });
  } else {
    res.send('Site not found');
  }
});

app.get('/', (req, res) => {
  res.send('Site not found');
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})