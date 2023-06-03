const axios = require('axios');
const sites = require('./sites.json');

async function testAPI(api, url) {
  const start = Date.now();
  try {
    const response = await axios.get(url);
    const end = Date.now();
    const data = response.data;
    console.log(`| ${api} | ${end - start}ms | ${JSON.stringify(data, null, 2)} |`);
  } catch (error) {
    console.error(`| ${api} | Error | ${error.message} |`);
  }
}

console.log('| API | Response Time | Output |');
console.log('| --- | --- | --- |');

for (const [api, details] of Object.entries(sites)) {
  const url = details.server || details.client;
  testAPI(api, url);
}