# GeoIP-api comparison
Comparison of some different mostly free GeoIP APIs I found around the internet.

Go to https://geoip.emrik.org to do your own benchmark or lookup an IP address using multiple APIs.
## Sites
| Url | Https | Limit | Clientside | Client lookup delay | Serverside delay |
| --- | --- | --- | --- | --- | --- |
| http://ip-api.com/ | <ul><li>- [ ] </li></ul> | 45/min | <ul><li>- [x] </li></ul> | 102 ms | 33 ms |
| https://ipapi.co/ | <ul><li>- [x] </li></ul> | 1000/day | <ul><li>- [x] </li></ul> | 326 ms | 203 ms |
| https://ipbase.com/ | <ul><li>- [x] </li></ul> | 150/month | <ul><li>- [x] </li></ul> | 127 ms | 73 ms |
| https://ipgeolocation.io/ | <ul><li>- [x] </li></ul> | 1000/day | <ul><li>- [ ] </li></ul> | n/a | 79 ms |
| https://ipstack.com/ | <ul><li>- [ ] </li></ul> | 100/month | <ul><li>- [x] </li></ul> | 272 ms | 151 ms |
| https://ipwhois.io/ | <ul><li>- [x] </li></ul> | 10000/month | <ul><li>- [x] </li></ul> | 126 ms | 26 ms |
| https://getgeoapi.com/ | <ul><li>- [x] </li></ul> | 300/day | <ul><li>- [x] </li></ul> | 195 ms | 25 ms |
| https://geo.ipify.org/ | <ul><li>- [x] </li></ul> | 333/account | <ul><li>- [ ] </li></ul> | n/a | 858 ms |
| https://www.ip2location.io/ | <ul><li>- [x] </li></ul> | 30000/month | <ul><li>- [x] </li></ul> | 164 ms | 78 ms |
| https://ipinfo.io/ | <ul><li>- [x] </li></ul> | 50000/month | <ul><li>- [ ] </li></ul> | n/a | 198 ms |
## Example response
| API | Serverside Lookup |
| --- | --- |
| ip-api.com | <pre>{<br>  "status": "success",<br>  "country": "United States",<br>  "countryCode": "US",<br>  "region": "VA",<br>  "regionName": "Virginia",<br>  "city": "Ashburn",<br>  "zip": "20149",<br>  "lat": 39.03,<br>  "lon": -77.5,<br>  "timezone": "America/New_York",<br>  "isp": "Google LLC",<br>  "org": "Google Public DNS",<br>  "as": "AS15169 Google LLC",<br>  "query": "8.8.8.8"<br>}</pre> |
| ipapi.co | <pre>{<br>  "ip": "8.8.8.8",<br>  "network": "8.8.8.0/24",<br>  "version": "IPv4",<br>  "city": "Mountain View",<br>  "region": "California",<br>  "region_code": "CA",<br>  "country": "US",<br>  "country_name": "United States",<br>  "country_code": "US",<br>  "country_code_iso3": "USA",<br>  "country_capital": "Washington",<br>  "country_tld": ".us",<br>  "continent_code": "NA",<br>  "in_eu": false,<br>  "postal": "94043",<br>  "latitude": 37.42301,<br>  "longitude": -122.083352,<br>  "timezone": "America/Los_Angeles",<br>  "utc_offset": "-0700",<br>  "country_calling_code": "+1",<br>  "currency": "USD",<br>  "currency_name": "Dollar",<br>  "languages": "en-US,es-US,haw,fr",<br>  "country_area": 9629091,<br>  "country_population": 327167434,<br>  "asn": "AS15169",<br>  "org": "GOOGLE"<br>}</pre> |
| ipbase.com | <pre>{<br>  "data": {<br>    "ip": "8.8.8.8",<br>    "hostname": null,<br>    "type": "v4",<br>    "range_type": {<br>      "type": "PUBLIC",<br>      "description": "Public address"<br>    },<br>    "connection": {<br>      "asn": 15169,<br>      "organization": "Google LLC",<br>      "isp": "Google LLC",<br>      "range": "8.8.8.0/24"<br>    },<br>    "location": {<br>      "geonames_id": 85922355,<br>      "latitude": 37.40599060058594,<br>      "longitude": -122.0785140991211,<br>      "zip": "94043",<br>      "continent": {<br>        "code": 6255149,<br>        "name": "North America",<br>        "name_translated": "North America",<br>        "geonames_id": 6255149,<br>        "wikidata_id": "Q49"<br>      },<br>      "country": {<br>        "alpha2": "US",<br>        "alpha3": "USA",<br>        "calling_codes": [<br>          "+1"<br>        ],<br>        "currencies": [<br>          {<br>            "symbol": "$",<br>            "name": "US Dollar",<br>            "symbol_native": "$",<br>            "decimal_digits": 2,<br>            "rounding": 0,<br>            "code": "USD",<br>            "name_plural": "US dollars"<br>          }<br>        ],<br>        "emoji": "🇺🇸",<br>        "ioc": "USA",<br>        "languages": [<br>          {<br>            "name": "English",<br>            "name_native": "English"<br>          }<br>        ],<br>        "name": "United States",<br>        "name_translated": "United States",<br>        "timezones": [<br>          "America/New_York",<br>          "America/Detroit",<br>          "America/Kentucky/Louisville",<br>          "America/Kentucky/Monticello",<br>          "America/Indiana/Indianapolis",<br>          "America/Indiana/Vincennes",<br>          "America/Indiana/Winamac",<br>          "America/Indiana/Marengo",<br>          "America/Indiana/Petersburg",<br>          "America/Indiana/Vevay",<br>          "America/Chicago",<br>          "America/Indiana/Tell_City",<br>          "America/Indiana/Knox",<br>          "America/Menominee",<br>          "America/North_Dakota/Center",<br>          "America/North_Dakota/New_Salem",<br>          "America/North_Dakota/Beulah",<br>          "America/Denver",<br>          "America/Boise",<br>          "America/Phoenix",<br>          "America/Los_Angeles",<br>          "America/Anchorage",<br>          "America/Juneau",<br>          "America/Sitka",<br>          "America/Metlakatla",<br>          "America/Yakutat",<br>          "America/Nome",<br>          "America/Adak",<br>          "Pacific/Honolulu"<br>        ],<br>        "is_in_european_union": false,<br>        "fips": "US",<br>        "geonames_id": 85633793,<br>        "hasc_id": "US",<br>        "wikidata_id": "Q30"<br>      },<br>      "city": {<br>        "fips": "0649670",<br>        "alpha2": null,<br>        "geonames_id": 85922355,<br>        "hasc_id": null,<br>        "wikidata_id": "Q486860",<br>        "name": "Mountain View",<br>        "name_translated": "Mountain View"<br>      },<br>      "region": {<br>        "fips": "US06",<br>        "alpha2": "US-CA",<br>        "geonames_id": 85688637,<br>        "hasc_id": "US.CA",<br>        "wikidata_id": "Q99",<br>        "name": "California",<br>        "name_translated": "California"<br>      }<br>    },<br>    "tlds": [<br>      ".us"<br>    ],<br>    "timezone": {<br>      "id": "America/Los_Angeles",<br>      "current_time": "2023-10-17T03:37:31-07:00",<br>      "code": "PDT",<br>      "is_daylight_saving": true,<br>      "gmt_offset": -25200<br>    },<br>    "security": {<br>      "is_anonymous": null,<br>      "is_datacenter": null,<br>      "is_vpn": null,<br>      "is_bot": null,<br>      "is_abuser": null,<br>      "is_known_attacker": null,<br>      "is_proxy": null,<br>      "is_spam": null,<br>      "is_tor": null,<br>      "proxy_type": null,<br>      "is_icloud_relay": null,<br>      "threat_score": null<br>    },<br>    "domains": {<br>      "count": null,<br>      "domains": []<br>    }<br>  }<br>}</pre> |
| ipgeolocation.io | <pre>{<br>  "ip": "8.8.8.8",<br>  "continent_code": "NA",<br>  "continent_name": "North America",<br>  "country_code2": "US",<br>  "country_code3": "USA",<br>  "country_name": "United States",<br>  "country_name_official": "United States of America",<br>  "country_capital": "Washington, D.C.",<br>  "state_prov": "California",<br>  "state_code": "US-CA",<br>  "district": "",<br>  "city": "Mountain View",<br>  "zipcode": "94043-1351",<br>  "latitude": "37.42240",<br>  "longitude": "-122.08421",<br>  "is_eu": false,<br>  "calling_code": "+1",<br>  "country_tld": ".us",<br>  "languages": "en-US,es-US,haw,fr",<br>  "country_flag": "https://ipgeolocation.io/static/flags/us_64.png",<br>  "geoname_id": "6301403",<br>  "isp": "Google LLC",<br>  "connection_type": "",<br>  "organization": "Google LLC",<br>  "currency": {<br>    "code": "USD",<br>    "name": "US Dollar",<br>    "symbol": "$"<br>  },<br>  "time_zone": {<br>    "name": "America/Los_Angeles",<br>    "offset": -8,<br>    "offset_with_dst": -7,<br>    "current_time": "2023-10-17 03:37:31.944-0700",<br>    "current_time_unix": 1697539051.944,<br>    "is_dst": true,<br>    "dst_savings": 1<br>  }<br>}</pre> |
| ipstack.com | <pre>{<br>  "ip": "8.8.8.8",<br>  "type": "ipv4",<br>  "continent_code": "NA",<br>  "continent_name": "North America",<br>  "country_code": "US",<br>  "country_name": "United States",<br>  "region_code": "OH",<br>  "region_name": "Ohio",<br>  "city": "Glenmont",<br>  "zip": "44628",<br>  "latitude": 40.5369987487793,<br>  "longitude": -82.12859344482422,<br>  "location": {<br>    "geoname_id": null,<br>    "capital": "Washington D.C.",<br>    "languages": [<br>      {<br>        "code": "en",<br>        "name": "English",<br>        "native": "English"<br>      }<br>    ],<br>    "country_flag": "https://assets.ipstack.com/flags/us.svg",<br>    "country_flag_emoji": "🇺🇸",<br>    "country_flag_emoji_unicode": "U+1F1FA U+1F1F8",<br>    "calling_code": "1",<br>    "is_eu": false<br>  }<br>}</pre> |
| ipwhois.io | <pre>{<br>  "ip": "8.8.8.8",<br>  "success": true,<br>  "type": "IPv4",<br>  "continent": "North America",<br>  "continent_code": "NA",<br>  "country": "United States",<br>  "country_code": "US",<br>  "region": "California",<br>  "region_code": "CA",<br>  "city": "Mountain View",<br>  "latitude": 37.3860517,<br>  "longitude": -122.0838511,<br>  "is_eu": false,<br>  "postal": "94039",<br>  "calling_code": "1",<br>  "capital": "Washington D.C.",<br>  "borders": "CA,MX",<br>  "flag": {<br>    "img": "https://cdn.ipwhois.io/flags/us.svg",<br>    "emoji": "🇺🇸",<br>    "emoji_unicode": "U+1F1FA U+1F1F8"<br>  },<br>  "connection": {<br>    "asn": 15169,<br>    "org": "Google LLC",<br>    "isp": "Google LLC",<br>    "domain": "google.com"<br>  },<br>  "timezone": {<br>    "id": "America/Los_Angeles",<br>    "abbr": "PDT",<br>    "is_dst": true,<br>    "offset": -25200,<br>    "utc": "-07:00",<br>    "current_time": "2023-10-17T03:37:32-07:00"<br>  }<br>}</pre> |
| getgeoapi.com | <pre>{<br>  "ip": "8.8.8.8",<br>  "type": "IPv4",<br>  "location": {<br>    "latitude": 37.405991,<br>    "longitude": -122.078514<br>  },<br>  "postcode": "94043",<br>  "area": {<br>    "code": "US-CA",<br>    "geonameid": 5332921,<br>    "name": "California"<br>  },<br>  "asn": {<br>    "number": 15169,<br>    "organisation": "GOOGLE"<br>  },<br>  "city": {<br>    "geonameid": 5375480,<br>    "name": "Mountain View",<br>    "population": 80435<br>  },<br>  "continent": {<br>    "geonameid": 6255149,<br>    "name": "North America",<br>    "code": "NA"<br>  },<br>  "country": {<br>    "geonameid": 6252001,<br>    "name": "United States of America",<br>    "code": "US",<br>    "capital": "Washington",<br>    "area_size": "9629091.00 sq. km",<br>    "population": 327167434,<br>    "phone_code": "1",<br>    "is_in_eu": false,<br>    "languages": {<br>      "en": "English language",<br>      "es": "Spanish language",<br>      "haw": "Hawaiian language",<br>      "fr": "French language"<br>    },<br>    "flag": {<br>      "file": "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_United_States.svg",<br>      "emoji": "🇺🇸",<br>      "unicode": "U+1F1FA U+1F1F8"<br>    },<br>    "tld": ".us"<br>  },<br>  "currency": {<br>    "code": "USD",<br>    "name": "United States dollar"<br>  },<br>  "security": {<br>    "is_tor": false,<br>    "is_proxy": false,<br>    "is_crawler": true,<br>    "is_threat": true,<br>    "is_thread": true<br>  },<br>  "time": {<br>    "timezone": "America/Los_Angeles",<br>    "gtm_offset": -25200,<br>    "gmt_offset": -25200,<br>    "is_daylight_saving": true,<br>    "code": "PDT"<br>  },<br>  "status": "success"<br>}</pre> |
| geo.ipify.org | <pre>{<br>  "ip": "8.8.8.8",<br>  "location": {<br>    "country": "US",<br>    "region": "California",<br>    "city": "Mountain View",<br>    "lat": 32.69922,<br>    "lng": -117.11281,<br>    "postalCode": "",<br>    "timezone": "-07:00",<br>    "geonameId": 5375481<br>  },<br>  "domains": [<br>    "api.21vek-7097.21vek-dev.by",<br>    "gigastream85.xyz",<br>    "gigastream98.xyz",<br>    "hexadahydraulic.com",<br>    "hkayti.com"<br>  ],<br>  "as": {<br>    "asn": 15169,<br>    "name": "GOOGLE",<br>    "route": "8.8.8.0/24",<br>    "domain": "https://about.google/intl/en/",<br>    "type": "Content"<br>  },<br>  "isp": "Google LLC",<br>  "proxy": {<br>    "proxy": false,<br>    "vpn": false,<br>    "tor": false<br>  }<br>}</pre> |
| ip2location.io | <pre>{<br>  "ip": "8.8.8.8",<br>  "country_code": "US",<br>  "country_name": "United States of America",<br>  "region_name": "California",<br>  "city_name": "Mountain View",<br>  "latitude": 37.405992,<br>  "longitude": -122.078515,<br>  "zip_code": "94043",<br>  "time_zone": "-07:00",<br>  "asn": "15169",<br>  "as": "Google LLC",<br>  "is_proxy": false<br>}</pre> |
| ipinfo.io | <pre>{<br>  "ip": "8.8.8.8",<br>  "hostname": "dns.google",<br>  "anycast": true,<br>  "city": "Mountain View",<br>  "region": "California",<br>  "country": "US",<br>  "loc": "37.4056,-122.0775",<br>  "postal": "94043",<br>  "timezone": "America/Los_Angeles",<br>  "asn": {<br>    "asn": "AS15169",<br>    "name": "Google LLC",<br>    "domain": "google.com",<br>    "route": "8.8.8.0/24",<br>    "type": "hosting"<br>  },<br>  "company": {<br>    "name": "Google LLC",<br>    "domain": "google.com",<br>    "type": "hosting"<br>  },<br>  "privacy": {<br>    "vpn": false,<br>    "proxy": false,<br>    "tor": false,<br>    "relay": false,<br>    "hosting": true,<br>    "service": ""<br>  },<br>  "abuse": {<br>    "address": "US, CA, Mountain View, 1600 Amphitheatre Parkway, 94043",<br>    "country": "US",<br>    "email": "network-abuse@google.com",<br>    "name": "Abuse",<br>    "network": "8.8.8.0/24",<br>    "phone": "+1-650-253-0000"<br>  },<br>  "domains": {<br>    "ip": "8.8.8.8",<br>    "total": 9661,<br>    "domains": [<br>      "wsyybbs.com",<br>      "musicool.cn",<br>      "kagou.vip",<br>      "lanrun1.com",<br>      "nmgk2.com"<br>    ]<br>  }<br>}</pre> |
