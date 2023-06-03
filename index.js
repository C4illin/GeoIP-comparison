const axios = require('axios');
const sites = require('./sites.json');
const fs = require('fs');

async function testAPI(url) {
  const start = Date.now();
  try {
    await axios.get(url).then((response) => {
      const end = Date.now();
      const data = response.data;
      console.log(data);
      return { "time": (end - start), "data": JSON.stringify(data) };
    });

  } catch (error) {
    console.error(error);
  }
}


(async () => {
  for (const [api, details] of Object.entries(sites)) {
    if (details.client && details.client.length > 0) {
      if (details.client.includes('YOUR-APIKEY')) {
        continue;
      }

      testAPI(details.client).then((result) => {
        console.log(result)
        sites.api["clientTime"] = result.time;
        sites.api["clientData"] = result.data;
      });
    }

    if (details.server && details.server.length > 0) {
      if (details.server.includes('YOUR-APIKEY')) {
        continue;
      }

      testAPI(details.server).then((result) => {
        sites.api["serverTime"] = result.time;
        sites.api["serverData"] = result.data;
      });
    }
  }
})();

fs.writeFileSync('output.json', JSON.stringify(sites, null, 2));
