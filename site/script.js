var map = new maplibregl.Map({
  container: 'map',
  style: 'https://demotiles.maplibre.org/style.json', // stylesheet location
  center: [0, 0], // starting position [lng, lat]
  zoom: 5 // starting zoom
});

// update postion to geolocation
map.on('load', function() {
  navigator.geolocation.watchPosition(function(position) {
    map.setCenter([position.coords.longitude, position.coords.latitude]);
  });
});