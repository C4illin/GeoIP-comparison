const express = require("express");
const cors = require("cors");
const sites = require("./docs/sites.json");
const axios = require("axios");
const WebServiceClient = require("@maxmind/geoip2-node").WebServiceClient;
require("dotenv").config();
const geoipKey = process.env.maxmind;
const maxmindaccount = process.env.maxmindaccount;
console.log("Using maxmind account id: " + maxmindaccount);
const geoipClient = new WebServiceClient(maxmindaccount, geoipKey);
const geoliteClient = new WebServiceClient(maxmindaccount, geoipKey, {
	host: "geolite.info",
});

const app = express();
const port = 3000;
app.use(cors());

app.get("/:site/:ip", (req, res) => {
	const site = req.params.site;
	const ip = req.params.ip;

	if (site == "geoip2") {
		geoipClient
			.city(ip)
			.then((response) => {
				res.send(response);
			})
			.catch((error) => {
				res.send("Error with request to " + site);
			});
	} else if (site == "geolite2") {
		geoliteClient
			.city(ip)
			.then((response) => {
				res.send(response);
			})
			.catch((error) => {
				res.send("Error with request to " + site);
			});
	} else if (site in sites) {
		let url = sites[site]["server"].replace("8.8.8.8", ip);

		// fetch url and return response
		axios
			.get(url)
			.then((response) => {
				res.send(response.data);
			})
			.catch((error) => {
				res.send("Error with request to " + site);
			});
	} else {
		res.send("Site not found");
	}
});

app.get("/", (req, res) => {
	res.send("Site not found");
});

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`);
});
