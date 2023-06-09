const axios = require('axios');
const sites = require('./sites.json');
const fs = require('fs');

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
      if (details.client.includes('YOUR-APIKEY')) {
        continue;
      }

      const result = await testAPI(details.client);
      sites[api]["clientTime"] = result.time;
      sites[api]["clientData"] = result.data;
    }

    if (details.server && details.server.length > 0) {
      if (details.server.includes('YOUR-APIKEY')) {
        continue;
      }

      const result = await testAPI(details.server);
      sites[api]["serverTime"] = result.time;
      sites[api]["serverData"] = result.data;
    }
  }

  fs.writeFileSync('output.json', JSON.stringify(sites, null, 2));
  return sites;
}

function createMarkdownTableData(data) {
  let markdown = "| API | Clientside Lookup | Serverside Lookup |\n";
  markdown += "| --- | --- | --- |\n"

  for (const [api, details] of Object.entries(data)) {
    const clientData = details.clientData ? JSON.stringify(details.clientData, null, 2).replaceAll("\n", "<br>") : '';
    const serverData = details.serverData ? JSON.stringify(details.serverData, null, 2).replaceAll("\n", "<br>") : '';
    markdown += `| ${api} | <pre>${clientData}</pre> | <pre>${serverData}</pre> |\n`;
  }

  return markdown;
}

testAll().then((data) => {
  // console.log(data);
  // console.log(createMarkdownTableData(data));
  fs.writeFileSync('output.md', createMarkdownTableData(data));
});