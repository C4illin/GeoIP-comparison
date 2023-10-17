var map = new maplibregl.Map({
  container: 'map',
  style: 'https://api.maptiler.com/maps/basic-v2/style.json?key=UCMEHVYLkm63xmIW4vFe', // stylesheet location
  center: [0, 0], // starting position [lng, lat]
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
  map.setZoom(10);
}

var addResult = function (api, result, timeDiff, latitude, longitude) {
  let resultElem = document.getElementById('result');
  let divElem = document.createElement('div');
  divElem.classList.add('result');
  divElem.innerHTML = `<div class="flexRow"><hgroup><h3>${api}</h3><h4>${timeDiff}ms</h4></hgroup><button class="result" onclick="goToLocation(${latitude}, ${longitude})">Go To</button></div>`;
  divElem.appendChild(renderjson(result))
  resultElem.appendChild(divElem);
}

var drawMap = function () {
  console.log('drawMap');
  // check if map has loaded
  if (!map.loaded()) {
    setTimeout(drawMap, 500);
    return;
  }

  let resultElem = document.getElementById('result');
  resultElem.innerHTML = '';
  let waitingForFirstLocation = true;
  let formElem = document.getElementById('ipAddress')
  let ip = formElem.value;
  let buttonElem = document.querySelector('div.grid button');
  buttonElem.disabled = true;
  buttonElem.innerHTML = 'Please wait…';
  buttonElem.ariaBusy = true;

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
        console.log(url);
        if (url.includes('YOUR-APIKEY')) {
          continue;
        }

        let timeStart = performance.now();
        fetch(url).then(response => response.json()).then(data => {
          let timeDiff = (performance.now() - timeStart).toFixed(0);
          let latitude = data.latitude || data.lat || data?.location?.lat || data?.location?.latitude || data?.data?.location?.latitude || 0;
          let longitude = data.longitude || data.lon || data?.location?.lon || data?.location?.longitude || data?.data?.location?.longitude || 0;

          if (data.ip) {
            ip = data.ip;
          }

          if (latitude == 0 && longitude == 0) {
            console.log(data)
            return;
          }

          if (waitingForFirstLocation) {
            waitingForFirstLocation = false;
            map.setCenter([longitude, latitude]);
          }

          addResult(api, data, timeDiff, latitude, longitude);

          const marker = new maplibregl.Marker()
            .setLngLat([longitude, latitude])
            .addTo(map)
            .setPopup(new maplibregl.Popup().setHTML(api + "<br>" + timeDiff + "ms"))
            .on('click', function () {
              marker.togglePopup();
            });
        });

      }
    })
    .then(() => {
      buttonElem.disabled = false;
      buttonElem.innerHTML = 'Find';
      buttonElem.ariaBusy = false;
    })
    .catch(error => {
      console.error(error);
    });
}