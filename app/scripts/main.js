'use strict';
function initialize() {

  var mapOptions = {
    center: { lat: 48.8607200, lng: 2.3949340},
    zoom: 15
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  console.log("map loaded")

  $('label').click(function(event) {
    var lat = parseFloat(event.currentTarget.dataset.lat);
    var lng = parseFloat(event.currentTarget.dataset.lng);
    var marker = new google.maps.Marker({
      position: {lat: lat, lng: lng},
      map: map
    });
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
