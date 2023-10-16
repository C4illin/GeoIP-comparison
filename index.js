const axios = require('axios');
const sites = require('./docs/sites.json');
const fs = require('fs');
require('dotenv').config()

async function testAPI(url) {
  const start = Date.now();
  try {
    const response = await axios.get(url);
    const end = Date.now();
    const data = response.data;
    return { "time": (end - start), "data": data };
  } catch (error) {
    console.error(error);
  }
}

async function testAll() {
  for (const [api, details] of Object.entries(sites)) {
    if (details.client && details.client.length > 0) {
      let url = details.client;
      if (url.includes('YOUR-APIKEY')) {
        url = url.replace('YOUR-APIKEY', process.env[api])
      }

      const result = await testAPI(url);
      sites[api]["clientTime"] = result.time;
      sites[api]["clientData"] = result.data;
    }

    if (details.server && details.server.length > 0) {
      let url = details.server;
      if (url.includes('YOUR-APIKEY')) {
        url = url.replace('YOUR-APIKEY', process.env[api])
      }

      const result = await testAPI(url);
      sites[api]["serverTime"] = result.time;
      sites[api]["serverData"] = result.data;
    }
  }

  fs.writeFileSync('output.json', JSON.stringify(sites, null, 2));
  return sites;
}

function markdownTableForSites(data) {
  let markdown = "## Sites\n| Url | Https | Limit | Clientside | Client lookup delay | Serverside delay |\n";
  markdown += "| --- | --- | --- | --- | --- | --- |\n"


  for (const [api, details] of Object.entries(data)) {
    markdown += `| ${details.homepage} | <ul><li>- ${details.https ? '[x]' : '[ ]'} </li></ul> | ${details.limit} | <ul><li>- ${details.client ? '[x]' : '[ ]'} </li></ul> | ${details.clientTime ? details.clientTime + " ms" : 'n/a'} | ${details.serverTime ? details.serverTime + " ms" : ''} |\n`;
  }

  return markdown;
}

function markdownTableResponses(data) {
  let markdown = "## Example response\n| API | Serverside Lookup |\n";
  markdown += "| --- | --- |\n"

  for (const [api, details] of Object.entries(data)) {
    // const clientData = details.clientData ? JSON.stringify(details.clientData, null, 2).replaceAll("\n", "<br>") : '';
    const serverData = details.serverData ? JSON.stringify(details.serverData, null, 2).replaceAll("\n", "<br>") : '';
    markdown += `| ${api} | <pre>${serverData}</pre> |\n`;
  }

  return markdown;
}

testAll().then((data) => {
  let header = fs.readFileSync('header.md', 'utf8')
  fs.writeFileSync('readme.md', header + markdownTableForSites(data) + markdownTableResponses(data));
});