var map = new maplibregl.Map({
  container: 'map',
  style: 'https://api.maptiler.com/maps/basic-v2/style.json?key=UCMEHVYLkm63xmIW4vFe', // stylesheet location
  center: [0, 45], // starting position [lng, lat]
  zoom: 5 // starting zoom
});

(async function () {
  let ip = await fetch('https://api.ipify.org?format=json').then(response => response.json()).then(data => {
    return data.ip;
  });

  let formElem = document.getElementById('ipAddress')
  if (formElem.value == '') {
    formElem.value = ip;
  }
})();

var goToLocation = function (latitude, longitude) {
  map.setCenter([longitude, latitude]);
}

var addResult = function (api, result, timeDiff, latitude, longitude, proxy) {
  let resultElem = document.getElementById('result');
  let divElem = document.createElement('div');
  divElem.classList.add('result');
  divElem.innerHTML = `
  <div class="flexRow">
    <hgroup>
      <h3>${api}</h3>
      <h4>${timeDiff}ms${proxy ? ' (proxy)' : ''}</h4>
    </hgroup>
    <button class="result" onclick="goToLocation(${latitude}, ${longitude})">Go To</button>
  </div>`;
  
  divElem.appendChild(renderjson(result))
  resultElem.appendChild(divElem);
}

var getLonLat = function (data) {
  let latitude = data.latitude || data.lat || data?.location?.lat || data?.location?.latitude || data?.data?.location?.latitude || 0;
  let longitude = data.longitude || data.lon || data?.location?.lng || data?.location?.longitude || data?.data?.location?.longitude || 0;

  if (latitude == 0 && longitude == 0 && data.loc) {
    let loc = data.loc.split(',');
    latitude = loc[0] || 0;
    longitude = loc[1] || 0;
  }

  return [latitude, longitude];
}


var fetchAndDisplay = function (api, url, ip, proxy = false) {
  const proxyUrl = "https://geoipproxy.emrik.org/";
  let timeStart = performance.now();
  fetch(url).then(response => response.json()).then(data => {
    let timeDiff = (performance.now() - timeStart).toFixed(0);
    let [latitude, longitude] = getLonLat(data);

    if (latitude == 0 && longitude == 0) {
      console.log(data)

      if (proxy == false) {
        let url = proxyUrl + api + "/" + ip;
        fetchAndDisplay(api, url, ip, true);
      } else {
        let progressElem = document.querySelector("progress");
        progressElem.value++;
      }

      return;
    }

    let progressElem = document.querySelector("progress");

    if (progressElem.value == 0) {
      map.setCenter([longitude, latitude]);
      map.setZoom(8);
      progressElem.max = Object.keys(data).length;
    }
    progressElem.value++;

    addResult(api, data, timeDiff, latitude, longitude, proxy);

    const marker = new maplibregl.Marker()
      .setLngLat([longitude, latitude])
      .addTo(map)
      .setPopup(new maplibregl.Popup().setHTML(api + "<br>" + timeDiff + "ms"))
      .on('click', function () {
        marker.togglePopup();
      });
  }).catch(error => {
    console.error(error);
    if (proxy == false) {
      let url = proxyUrl + api + "/" + ip;
      fetchAndDisplay(api, url, ip, true)
    } else {
      let progressElem = document.querySelector("progress");
      progressElem.value++;
    }
  });
}

var drawMap = function () {
  // check if map has loaded
  if (!map.loaded()) {
    setTimeout(drawMap, 500);
    return;
  }

  let resultElem = document.getElementById('result');
  resultElem.innerHTML = '';
  let formElem = document.getElementById('ipAddress')
  let ip = formElem.value;
  let buttonElem = document.querySelector('div.grid button');
  buttonElem.disabled = true;
  buttonElem.textContent = 'Please wait…';
  buttonElem.ariaBusy = true;
  let progressElem = document.querySelector("progress");
  progressElem.value = 0;
  progressElem.classList.remove('hidden');

  const options = {
    enableHighAccuracy: false,
    timeout: 2000,
    maximumAge: 100000,
  };

  navigator.geolocation.getCurrentPosition(function (position) {
    // map.setCenter([position.coords.longitude, position.coords.latitude]);
    var marker = new maplibregl.Marker({ "color": "#b40219" })
      .setLngLat([position.coords.longitude, position.coords.latitude])
      .addTo(map)
      .setPopup(new maplibregl.Popup().setHTML('GPS Position'))
      .on('click', function () {
        marker.togglePopup();
      });
  },
    (error) => {
      console.log(error);
    }, options);
  fetch('sites.json')
    .then(response => response.json())
    .then(data => {
      for (const [api, details] of Object.entries(data)) {
        // if (details.client && details.client.length > 0) {
        //   url = details.server;
        let url = details.server;
        url = url.replace('8.8.8.8', ip);
        if (url.includes('YOUR-APIKEY')) {
          continue;
        }

        fetchAndDisplay(api, url, ip, false)
      }
    })
    .then(() => {
      buttonElem.disabled = false;
      buttonElem.textContent = 'Find';
      buttonElem.ariaBusy = false;
      progressElem.classList.add('hidden');
    })
    .catch(error => {
      console.error(error);
    });
}
