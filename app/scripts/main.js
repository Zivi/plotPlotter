function initialize() {
  var mapOptions = {
    center: { lat: 37.5542, lng: -122.3131},
    zoom: 8
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  console.log("map loaded")
}
google.maps.event.addDomListener(window, 'load', initialize);
