import { WebServiceClient } from "@maxmind/geoip2-node";
import axios from "axios";
import cors from "cors";
import express from "express";
import { loadEnvFile } from "node:process";
import sites from "./docs/sites.json" with { type: "json" };
try {
  loadEnvFile();
} catch {
  // No .env file; rely on variables already set in the environment.
}
const geoipKey = process.env.maxmind;
const maxmindaccount = process.env.maxmindaccount;
console.log("Using maxmind account id: " + maxmindaccount);
const geoipClient = new WebServiceClient(maxmindaccount, geoipKey);
const geoliteClient = new WebServiceClient(maxmindaccount, geoipKey, {
  host: "geolite.info",
});

const app = express();
const port = 3000;
// Runs behind Traefik (Docker network) with Cloudflare in front: trust
// X-Forwarded-* headers from private/loopback addresses so req.ip resolves
// to the client instead of the proxy, without trusting spoofed headers from
// clients that reach the app directly.
app.set("trust proxy", ["loopback", "linklocal", "uniquelocal"]);
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

app.get("/ip", (req, res) => {
  // Cloudflare puts the real client address in CF-Connecting-IP
  const ip = req.get("CF-Connecting-IP") ?? req.ip;
  res.send(ip);
});

app.get("/", (req, res) => {
  res.send("Site not found");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
