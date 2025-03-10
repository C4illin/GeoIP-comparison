# GeoIP-api comparison

Comparison of some different mostly free GeoIP APIs I found around the internet.

Go to https://geoip.emrik.org to do your own benchmark or lookup an IP address using multiple APIs.

Accuracy is harder to test. But the only service that seems to achieve intercity tracking is ipgeolocation.io in my limited tests. Test on https://geoip.emrik.org to see for yourself :)

Feel free to add any APIs you find to the list by creating a pull request or an issue.
## Sites
| Url | Https | Limit | Clientside | Client lookup delay | Serverside delay |
| --- | --- | --- | --- | --- | --- |
| http://ip-api.com/ | <ul><li>- [ ] </li></ul> | 45/min | <ul><li>- [x] </li></ul> | 360 ms | 166 ms |
| https://ipapi.co/ | <ul><li>- [x] </li></ul> | 1000/day | <ul><li>- [x] </li></ul> | 317 ms | 221 ms |
| https://ipbase.com/ | <ul><li>- [x] </li></ul> | 150/month | <ul><li>- [x] </li></ul> | 138 ms | 53 ms |
| https://ipgeolocation.io/ | <ul><li>- [x] </li></ul> | 1000/day | <ul><li>- [ ] </li></ul> | n/a | 156 ms |
| https://ipstack.com/ | <ul><li>- [ ] </li></ul> | 1000/month | <ul><li>- [x] </li></ul> | 308 ms | 137 ms |
| https://ipwhois.io/ | <ul><li>- [x] </li></ul> | 10000/month | <ul><li>- [x] </li></ul> | 120 ms | 24 ms |
| https://getgeoapi.com/ | <ul><li>- [x] </li></ul> | 300/day | <ul><li>- [x] </li></ul> | 170 ms | 90 ms |
| https://geo.ipify.org/ | <ul><li>- [x] </li></ul> | 333/account | <ul><li>- [ ] </li></ul> | n/a | 268 ms |
| https://www.ip2location.io/ | <ul><li>- [x] </li></ul> | 30000/month | <ul><li>- [x] </li></ul> | 123 ms | 53 ms |
| https://ipinfo.io/ | <ul><li>- [x] </li></ul> | 50000/month | <ul><li>- [ ] </li></ul> | n/a | 185 ms |
| https://dev.maxmind.com/geoip/geoip2/geolite2/ | <ul><li>- [x] </li></ul> | Unlimited | <ul><li>- [ ] </li></ul> | n/a | 350 ms |
| https://www.maxmind.com/en/geoip2-city-database | <ul><li>- [x] </li></ul> | 16667/account | <ul><li>- [ ] </li></ul> | n/a | 155 ms |
| https://www.geojs.io/ | <ul><li>- [x] </li></ul> | Unlimited | <ul><li>- [x] </li></ul> | 184 ms | 301 ms |
| https://reallyfreegeoip.org/ | <ul><li>- [x] </li></ul> | Unlimited | <ul><li>- [x] </li></ul> | 273 ms | 236 ms |
| https://freeipapi.com | <ul><li>- [x] </li></ul> | 60/min | <ul><li>- [x] </li></ul> | 89 ms | 40 ms |
| https://ipquery.io/ | <ul><li>- [x] </li></ul> | Unlimited | <ul><li>- [x] </li></ul> | 409 ms | 149 ms |
| https://bgpview.io | <ul><li>- [x] </li></ul> | Unlimited | <ul><li>- [ ] </li></ul> | n/a | 224 ms |
## Example response
| API | Serverside Lookup |
| --- | --- |
| ip-api.com | <pre>{<br>  "status": "success",<br>  "country": "United States",<br>  "countryCode": "US",<br>  "region": "VA",<br>  "regionName": "Virginia",<br>  "city": "Ashburn",<br>  "zip": "20149",<br>  "lat": 39.03,<br>  "lon": -77.5,<br>  "timezone": "America/New_York",<br>  "isp": "Google LLC",<br>  "org": "Google Public DNS",<br>  "as": "AS15169 Google LLC",<br>  "query": "8.8.8.8"<br>}</pre> |
| ipapi.co | <pre>{<br>  "ip": "8.8.8.8",<br>  "network": "8.8.8.0/24",<br>  "version": "IPv4",<br>  "city": "Mountain View",<br>  "region": "California",<br>  "region_code": "CA",<br>  "country": "US",<br>  "country_name": "United States",<br>  "country_code": "US",<br>  "country_code_iso3": "USA",<br>  "country_capital": "Washington",<br>  "country_tld": ".us",<br>  "continent_code": "NA",<br>  "in_eu": false,<br>  "postal": "94043",<br>  "latitude": 37.42301,<br>  "longitude": -122.083352,<br>  "timezone": "America/Los_Angeles",<br>  "utc_offset": "-0700",<br>  "country_calling_code": "+1",<br>  "currency": "USD",<br>  "currency_name": "Dollar",<br>  "languages": "en-US,es-US,haw,fr",<br>  "country_area": 9629091,<br>  "country_population": 327167434,<br>  "asn": "AS15169",<br>  "org": "GOOGLE"<br>}</pre> |
| ipbase.com | <pre>{<br>  "data": {<br>    "ip": "8.8.8.8",<br>    "hostname": null,<br>    "type": "v4",<br>    "range_type": {<br>      "type": "PUBLIC",<br>      "description": "Public address"<br>    },<br>    "connection": {<br>      "asn": 15169,<br>      "organization": "Google LLC",<br>      "isp": "Google LLC",<br>      "range": "8.8.8.0/24"<br>    },<br>    "location": {<br>      "geonames_id": 85922355,<br>      "latitude": 37.386051177978516,<br>      "longitude": -122.08384704589844,<br>      "zip": "94035",<br>      "continent": {<br>        "code": "NA",<br>        "name": "North America",<br>        "name_translated": "North America",<br>        "geonames_id": 6255149,<br>        "wikidata_id": "Q49"<br>      },<br>      "country": {<br>        "alpha2": "US",<br>        "alpha3": "USA",<br>        "calling_codes": [<br>          "+1"<br>        ],<br>        "currencies": [<br>          {<br>            "symbol": "$",<br>            "name": "US Dollar",<br>            "symbol_native": "$",<br>            "decimal_digits": 2,<br>            "rounding": 0,<br>            "code": "USD",<br>            "name_plural": "US dollars",<br>            "type": "fiat"<br>          }<br>        ],<br>        "emoji": "🇺🇸",<br>        "ioc": "USA",<br>        "languages": [<br>          {<br>            "name": "English",<br>            "name_native": "English"<br>          }<br>        ],<br>        "name": "United States",<br>        "name_translated": "United States",<br>        "timezones": [<br>          "America/New_York",<br>          "America/Detroit",<br>          "America/Kentucky/Louisville",<br>          "America/Kentucky/Monticello",<br>          "America/Indiana/Indianapolis",<br>          "America/Indiana/Vincennes",<br>          "America/Indiana/Winamac",<br>          "America/Indiana/Marengo",<br>          "America/Indiana/Petersburg",<br>          "America/Indiana/Vevay",<br>          "America/Chicago",<br>          "America/Indiana/Tell_City",<br>          "America/Indiana/Knox",<br>          "America/Menominee",<br>          "America/North_Dakota/Center",<br>          "America/North_Dakota/New_Salem",<br>          "America/North_Dakota/Beulah",<br>          "America/Denver",<br>          "America/Boise",<br>          "America/Phoenix",<br>          "America/Los_Angeles",<br>          "America/Anchorage",<br>          "America/Juneau",<br>          "America/Sitka",<br>          "America/Metlakatla",<br>          "America/Yakutat",<br>          "America/Nome",<br>          "America/Adak",<br>          "Pacific/Honolulu"<br>        ],<br>        "is_in_european_union": false,<br>        "fips": "US",<br>        "geonames_id": 85633793,<br>        "hasc_id": "US",<br>        "wikidata_id": "Q30"<br>      },<br>      "city": {<br>        "fips": "0649670",<br>        "alpha2": null,<br>        "geonames_id": 85922355,<br>        "hasc_id": null,<br>        "wikidata_id": "Q486860",<br>        "name": "Mountain View",<br>        "name_translated": "Mountain View"<br>      },<br>      "region": {<br>        "fips": "US06",<br>        "alpha2": "US-CA",<br>        "geonames_id": 85688637,<br>        "hasc_id": "US.CA",<br>        "wikidata_id": "Q99",<br>        "name": "California",<br>        "name_translated": "California"<br>      }<br>    },<br>    "tlds": [<br>      ".us"<br>    ],<br>    "timezone": {<br>      "id": "America/Los_Angeles",<br>      "current_time": "2025-03-10T04:46:31-07:00",<br>      "code": "PDT",<br>      "is_daylight_saving": true,<br>      "gmt_offset": -25200<br>    },<br>    "security": {<br>      "is_anonymous": null,<br>      "is_datacenter": null,<br>      "is_vpn": null,<br>      "is_bot": null,<br>      "is_abuser": null,<br>      "is_known_attacker": null,<br>      "is_proxy": null,<br>      "is_spam": null,<br>      "is_tor": null,<br>      "proxy_type": null,<br>      "is_icloud_relay": null,<br>      "threat_score": null<br>    },<br>    "domains": {<br>      "count": null,<br>      "domains": []<br>    }<br>  }<br>}</pre> |
| ipgeolocation.io | <pre>{<br>  "ip": "8.8.8.8",<br>  "continent_code": "NA",<br>  "continent_name": "North America",<br>  "country_code2": "US",<br>  "country_code3": "USA",<br>  "country_name": "United States",<br>  "country_name_official": "United States of America",<br>  "country_capital": "Washington, D.C.",<br>  "state_prov": "California",<br>  "state_code": "US-CA",<br>  "district": "Santa Clara",<br>  "city": "Mountain View",<br>  "zipcode": "94043-1351",<br>  "latitude": "37.42240",<br>  "longitude": "-122.08421",<br>  "is_eu": false,<br>  "calling_code": "+1",<br>  "country_tld": ".us",<br>  "languages": "en-US,es-US,haw,fr",<br>  "country_flag": "https://ipgeolocation.io/static/flags/us_64.png",<br>  "geoname_id": "6301403",<br>  "isp": "Google LLC",<br>  "connection_type": "",<br>  "organization": "Google LLC",<br>  "country_emoji": "🇺🇸",<br>  "currency": {<br>    "code": "USD",<br>    "name": "US Dollar",<br>    "symbol": "$"<br>  },<br>  "time_zone": {<br>    "name": "America/Los_Angeles",<br>    "offset": -8,<br>    "offset_with_dst": -7,<br>    "current_time": "2025-03-10 04:46:31.176-0700",<br>    "current_time_unix": 1741607191.176,<br>    "is_dst": true,<br>    "dst_savings": 1,<br>    "dst_exists": true,<br>    "dst_start": {<br>      "utc_time": "2025-03-09 TIME 10",<br>      "duration": "+1H",<br>      "gap": true,<br>      "dateTimeAfter": "2025-03-09 TIME 03",<br>      "dateTimeBefore": "2025-03-09 TIME 02",<br>      "overlap": false<br>    },<br>    "dst_end": {<br>      "utc_time": "2025-11-02 TIME 09",<br>      "duration": "-1H",<br>      "gap": false,<br>      "dateTimeAfter": "2025-11-02 TIME 01",<br>      "dateTimeBefore": "2025-11-02 TIME 02",<br>      "overlap": true<br>    }<br>  }<br>}</pre> |
| ipstack.com | <pre>{<br>  "ip": "8.8.8.8",<br>  "type": "ipv4",<br>  "continent_code": "NA",<br>  "continent_name": "North America",<br>  "country_code": "US",<br>  "country_name": "United States",<br>  "region_code": "OH",<br>  "region_name": "Ohio",<br>  "city": "Glenmont",<br>  "zip": "44628",<br>  "latitude": 40.5369987487793,<br>  "longitude": -82.12859344482422,<br>  "msa": null,<br>  "dma": "510",<br>  "radius": null,<br>  "ip_routing_type": "fixed",<br>  "connection_type": "ocx",<br>  "location": {<br>    "geoname_id": null,<br>    "capital": "Washington D.C.",<br>    "languages": [<br>      {<br>        "code": "en",<br>        "name": "English",<br>        "native": "English"<br>      }<br>    ],<br>    "country_flag": "https://assets.ipstack.com/flags/us.svg",<br>    "country_flag_emoji": "🇺🇸",<br>    "country_flag_emoji_unicode": "U+1F1FA U+1F1F8",<br>    "calling_code": "1",<br>    "is_eu": false<br>  }<br>}</pre> |
| ipwhois.io | <pre>{<br>  "ip": "8.8.8.8",<br>  "success": true,<br>  "type": "IPv4",<br>  "continent": "North America",<br>  "continent_code": "NA",<br>  "country": "United States",<br>  "country_code": "US",<br>  "region": "California",<br>  "region_code": "CA",<br>  "city": "Mountain View",<br>  "latitude": 37.3860517,<br>  "longitude": -122.0838511,<br>  "is_eu": false,<br>  "postal": "94039",<br>  "calling_code": "1",<br>  "capital": "Washington D.C.",<br>  "borders": "CA,MX",<br>  "flag": {<br>    "img": "https://cdn.ipwhois.io/flags/us.svg",<br>    "emoji": "🇺🇸",<br>    "emoji_unicode": "U+1F1FA U+1F1F8"<br>  },<br>  "connection": {<br>    "asn": 15169,<br>    "org": "Google LLC",<br>    "isp": "Google LLC",<br>    "domain": "google.com"<br>  },<br>  "timezone": {<br>    "id": "America/Los_Angeles",<br>    "abbr": "PDT",<br>    "is_dst": true,<br>    "offset": -25200,<br>    "utc": "-07:00",<br>    "current_time": "2025-03-10T04:46:31-07:00"<br>  }<br>}</pre> |
| getgeoapi.com | <pre>{<br>  "ip": "8.8.8.8",<br>  "type": "IPv4",<br>  "location": {<br>    "latitude": 37.386051,<br>    "longitude": -122.083847<br>  },<br>  "postcode": "94035",<br>  "area": {<br>    "code": "US-CA",<br>    "geonameid": 5332921,<br>    "name": "California"<br>  },<br>  "asn": {<br>    "number": 15169,<br>    "organisation": "GOOGLE"<br>  },<br>  "city": {<br>    "geonameid": 5375480,<br>    "name": "Mountain View",<br>    "population": 80435<br>  },<br>  "continent": {<br>    "geonameid": 6255149,<br>    "name": "North America",<br>    "code": "NA"<br>  },<br>  "country": {<br>    "geonameid": 6252001,<br>    "name": "United States of America",<br>    "code": "US",<br>    "capital": "Washington",<br>    "area_size": "9629091.00 sq. km",<br>    "population": 327167434,<br>    "phone_code": "1",<br>    "is_in_eu": false,<br>    "languages": {<br>      "en": "English language",<br>      "es": "Spanish language",<br>      "haw": "Hawaiian language",<br>      "fr": "French language"<br>    },<br>    "flag": {<br>      "file": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_United_States.svg",<br>      "emoji": "🇺🇸",<br>      "unicode": "U+1F1FA U+1F1F8"<br>    },<br>    "tld": ".us"<br>  },<br>  "currency": {<br>    "code": "USD",<br>    "name": "United States dollar"<br>  },<br>  "security": {<br>    "is_tor": false,<br>    "is_proxy": false,<br>    "is_crawler": false,<br>    "is_threat": false,<br>    "is_thread": false<br>  },<br>  "time": {<br>    "timezone": "America/Los_Angeles",<br>    "gtm_offset": -25200,<br>    "gmt_offset": -25200,<br>    "is_daylight_saving": true,<br>    "code": "PDT"<br>  },<br>  "status": "success"<br>}</pre> |
| geo.ipify.org | <pre>{<br>  "ip": "8.8.8.8",<br>  "location": {<br>    "country": "US",<br>    "region": "California",<br>    "city": "Mountain View",<br>    "lat": 32.69922,<br>    "lng": -117.11281,<br>    "postalCode": "",<br>    "timezone": "-07:00",<br>    "geonameId": 5375481<br>  },<br>  "domains": [<br>    "0806efa20d27f8c451c39745817461ff.dlszywz.com",<br>    "0x57696c6c.com",<br>    "100asking.com",<br>    "10rd.ru",<br>    "11582c88dc.dlszywz.com"<br>  ],<br>  "as": {<br>    "asn": 15169,<br>    "name": "GOOGLE",<br>    "route": "8.8.8.0/24",<br>    "domain": "https://about.google/intl/en/",<br>    "type": "Content"<br>  },<br>  "isp": "Google LLC",<br>  "proxy": {<br>    "proxy": false,<br>    "vpn": false,<br>    "tor": false<br>  }<br>}</pre> |
| ip2location.io | <pre>{<br>  "ip": "8.8.8.8",<br>  "country_code": "US",<br>  "country_name": "United States of America",<br>  "region_name": "California",<br>  "city_name": "Mountain View",<br>  "latitude": 37.38605,<br>  "longitude": -122.08385,<br>  "zip_code": "94035",<br>  "time_zone": "-08:00",<br>  "asn": "15169",<br>  "as": "Google LLC",<br>  "is_proxy": false<br>}</pre> |
| ipinfo.io | <pre>{<br>  "ip": "8.8.8.8",<br>  "hostname": "dns.google",<br>  "city": "Mountain View",<br>  "region": "California",<br>  "country": "US",<br>  "loc": "38.0088,-122.1175",<br>  "org": "AS15169 Google LLC",<br>  "postal": "94043",<br>  "timezone": "America/Los_Angeles",<br>  "anycast": true<br>}</pre> |
| geolite2 | <pre>{<br>  "continent": {<br>    "code": "NA",<br>    "geonameId": 6255149,<br>    "names": {<br>      "ru": "Северная Америка",<br>      "zh-CN": "北美洲",<br>      "de": "Nordamerika",<br>      "en": "North America",<br>      "es": "Norteamérica",<br>      "fr": "Amérique du Nord",<br>      "ja": "北アメリカ",<br>      "pt-BR": "América do Norte"<br>    }<br>  },<br>  "country": {<br>    "isoCode": "US",<br>    "geonameId": 6252001,<br>    "names": {<br>      "pt-BR": "EUA",<br>      "ru": "США",<br>      "zh-CN": "美国",<br>      "de": "USA",<br>      "en": "United States",<br>      "es": "Estados Unidos",<br>      "fr": "États Unis",<br>      "ja": "アメリカ"<br>    }<br>  },<br>  "registeredCountry": {<br>    "isoCode": "US",<br>    "geonameId": 6252001,<br>    "names": {<br>      "de": "USA",<br>      "en": "United States",<br>      "es": "Estados Unidos",<br>      "fr": "États Unis",<br>      "ja": "アメリカ",<br>      "pt-BR": "EUA",<br>      "ru": "США",<br>      "zh-CN": "美国"<br>    },<br>    "isInEuropeanUnion": false<br>  },<br>  "traits": {<br>    "autonomousSystemNumber": 15169,<br>    "autonomousSystemOrganization": "GOOGLE",<br>    "ipAddress": "8.8.8.8",<br>    "network": "8.8.8.0/24",<br>    "isAnonymous": false,<br>    "isAnonymousProxy": false,<br>    "isAnonymousVpn": false,<br>    "isAnycast": false,<br>    "isHostingProvider": false,<br>    "isLegitimateProxy": false,<br>    "isPublicProxy": false,<br>    "isResidentialProxy": false,<br>    "isSatelliteProvider": false,<br>    "isTorExitNode": false<br>  },<br>  "location": {<br>    "accuracyRadius": 1000,<br>    "latitude": 37.751,<br>    "longitude": -97.822,<br>    "timeZone": "America/Chicago"<br>  }<br>}</pre> |
| geoip2 | <pre>{<br>  "continent": {<br>    "code": "NA",<br>    "geonameId": 6255149,<br>    "names": {<br>      "en": "North America",<br>      "es": "Norteamérica",<br>      "fr": "Amérique du Nord",<br>      "ja": "北アメリカ",<br>      "pt-BR": "América do Norte",<br>      "ru": "Северная Америка",<br>      "zh-CN": "北美洲",<br>      "de": "Nordamerika"<br>    }<br>  },<br>  "country": {<br>    "isoCode": "US",<br>    "geonameId": 6252001,<br>    "names": {<br>      "fr": "États Unis",<br>      "ja": "アメリカ",<br>      "pt-BR": "EUA",<br>      "ru": "США",<br>      "zh-CN": "美国",<br>      "de": "USA",<br>      "en": "United States",<br>      "es": "Estados Unidos"<br>    }<br>  },<br>  "maxmind": {<br>    "queriesRemaining": 16137<br>  },<br>  "registeredCountry": {<br>    "isoCode": "US",<br>    "geonameId": 6252001,<br>    "names": {<br>      "zh-CN": "美国",<br>      "de": "USA",<br>      "en": "United States",<br>      "es": "Estados Unidos",<br>      "fr": "États Unis",<br>      "ja": "アメリカ",<br>      "pt-BR": "EUA",<br>      "ru": "США"<br>    },<br>    "isInEuropeanUnion": false<br>  },<br>  "traits": {<br>    "autonomousSystemNumber": 15169,<br>    "autonomousSystemOrganization": "GOOGLE",<br>    "connectionType": "Corporate",<br>    "isp": "Google",<br>    "organization": "Google",<br>    "ipAddress": "8.8.8.8",<br>    "network": "8.8.8.8/32",<br>    "isAnonymous": false,<br>    "isAnonymousProxy": false,<br>    "isAnonymousVpn": false,<br>    "isAnycast": false,<br>    "isHostingProvider": false,<br>    "isLegitimateProxy": false,<br>    "isPublicProxy": false,<br>    "isResidentialProxy": false,<br>    "isSatelliteProvider": false,<br>    "isTorExitNode": false<br>  },<br>  "location": {<br>    "accuracyRadius": 1000,<br>    "latitude": 37.751,<br>    "longitude": -97.822,<br>    "timeZone": "America/Chicago"<br>  }<br>}</pre> |
| geojs.io | <pre>{<br>  "area_code": "0",<br>  "organization_name": "GOOGLE",<br>  "country_code": "US",<br>  "country_code3": "USA",<br>  "continent_code": "NA",<br>  "asn": 15169,<br>  "latitude": "37.751",<br>  "ip": "8.8.8.8",<br>  "accuracy": 1000,<br>  "organization": "AS15169 GOOGLE",<br>  "timezone": "America/Chicago",<br>  "longitude": "-97.822",<br>  "country": "United States"<br>}</pre> |
| reallyfreegeoip.org | <pre>{<br>  "ip": "8.8.8.8",<br>  "country_code": "US",<br>  "country_name": "United States",<br>  "region_code": "",<br>  "region_name": "",<br>  "city": "",<br>  "zip_code": "",<br>  "time_zone": "America/Chicago",<br>  "latitude": 37.751,<br>  "longitude": -97.822,<br>  "metro_code": 0<br>}</pre> |
| freeipapi.com | <pre>{<br>  "ipVersion": 4,<br>  "ipAddress": "8.8.8.8",<br>  "latitude": 37.386051,<br>  "longitude": -122.083847,<br>  "countryName": "United States of America",<br>  "countryCode": "US",<br>  "timeZone": "-08:00",<br>  "zipCode": "94035",<br>  "cityName": "Mountain View",<br>  "regionName": "California",<br>  "isProxy": false,<br>  "continent": "Americas",<br>  "continentCode": "AM",<br>  "currency": {<br>    "code": "USD",<br>    "name": "US Dollar"<br>  },<br>  "language": "English",<br>  "timeZones": [<br>    "America/Adak",<br>    "America/Anchorage",<br>    "America/Boise",<br>    "America/Chicago",<br>    "America/Denver",<br>    "America/Detroit",<br>    "America/Indiana/Indianapolis",<br>    "America/Indiana/Knox",<br>    "America/Indiana/Marengo",<br>    "America/Indiana/Petersburg",<br>    "America/Indiana/Tell_City",<br>    "America/Indiana/Vevay",<br>    "America/Indiana/Vincennes",<br>    "America/Indiana/Winamac",<br>    "America/Juneau",<br>    "America/Kentucky/Louisville",<br>    "America/Kentucky/Monticello",<br>    "America/Los_Angeles",<br>    "America/Menominee",<br>    "America/Metlakatla",<br>    "America/New_York",<br>    "America/Nome",<br>    "America/North_Dakota/Beulah",<br>    "America/North_Dakota/Center",<br>    "America/North_Dakota/New_Salem",<br>    "America/Phoenix",<br>    "America/Sitka",<br>    "America/Yakutat",<br>    "Pacific/Honolulu"<br>  ],<br>  "tlds": [<br>    ".us"<br>  ]<br>}</pre> |
| ipquery.io | <pre>{<br>  "ip": "8.8.8.8",<br>  "isp": {<br>    "asn": "AS15169",<br>    "org": "Google LLC",<br>    "isp": "Google LLC"<br>  },<br>  "location": {<br>    "country": "United States",<br>    "country_code": "US",<br>    "city": "Mountain View",<br>    "state": "California",<br>    "zipcode": "94043",<br>    "latitude": 37.436551599813335,<br>    "longitude": -122.09383799087185,<br>    "timezone": "America/Los_Angeles",<br>    "localtime": "2025-03-10T11:46:34"<br>  },<br>  "risk": {<br>    "is_mobile": false,<br>    "is_vpn": false,<br>    "is_tor": false,<br>    "is_proxy": false,<br>    "is_datacenter": true,<br>    "risk_score": 0<br>  }<br>}</pre> |
| bgpview.io | <pre>{<br>  "status": "ok",<br>  "status_message": "Query was successful",<br>  "data": {<br>    "ip": "8.8.8.8",<br>    "ptr_record": "dns.google",<br>    "prefixes": [<br>      {<br>        "prefix": "8.8.8.0/24",<br>        "ip": "8.8.8.0",<br>        "cidr": 24,<br>        "asn": {<br>          "asn": 15169,<br>          "name": "GOOGLE",<br>          "description": "Google LLC",<br>          "country_code": "US"<br>        },<br>        "name": "GOGL",<br>        "description": "Google LLC",<br>        "country_code": "US"<br>      },<br>      {<br>        "prefix": "8.0.0.0/12",<br>        "ip": "8.0.0.0",<br>        "cidr": 12,<br>        "asn": {<br>          "asn": 3356,<br>          "name": "LEVEL3",<br>          "description": "Level 3 Parent, LLC",<br>          "country_code": "US"<br>        },<br>        "name": "NET8",<br>        "description": "American Registry for Internet Numbers",<br>        "country_code": "US"<br>      },<br>      {<br>        "prefix": "8.0.0.0/9",<br>        "ip": "8.0.0.0",<br>        "cidr": 9,<br>        "asn": {<br>          "asn": 3356,<br>          "name": "LEVEL3",<br>          "description": "Level 3 Parent, LLC",<br>          "country_code": "US"<br>        },<br>        "name": "NET8",<br>        "description": "American Registry for Internet Numbers",<br>        "country_code": "US"<br>      }<br>    ],<br>    "rir_allocation": {<br>      "rir_name": "ARIN",<br>      "country_code": null,<br>      "ip": "8.8.8.0",<br>      "cidr": 24,<br>      "prefix": "8.8.8.0/24",<br>      "date_allocated": "2023-12-28 00:00:00",<br>      "allocation_status": "allocated"<br>    },<br>    "iana_assignment": {<br>      "assignment_status": "legacy",<br>      "description": "Administered by ARIN",<br>      "whois_server": "whois.arin.net",<br>      "date_assigned": null<br>    },<br>    "maxmind": {<br>      "country_code": null,<br>      "city": null<br>    }<br>  },<br>  "@meta": {<br>    "time_zone": "UTC",<br>    "api_version": 1,<br>    "execution_time": "37.63 ms"<br>  }<br>}</pre> |
