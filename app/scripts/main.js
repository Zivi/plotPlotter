'use strict';
function initialize() {

  var mapOptions = {
    center: { lat: 48.8607200, lng: 2.3949340},
    zoom: 15
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  console.log("map loaded");

  $('.plot-names').click(function(event) {
    var marker,
    var $this = $(event.currentTarget),
    var nom = $this.attr('name'),
    var lat = $this.data('lat'),
    var lng = $this.data('lng'),
    if ($this.prop('checked')) {
      marker = new google.maps.Marker({
        position: {lat: lat, lng: lng},
        map: map,
        title: nom
      });
      $this.data('marker', marker);
    } else {
      marker = $this.data('marker');
      marker.setMap(null);
    }
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
