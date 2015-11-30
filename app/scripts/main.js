function initialize() {
  var mapOptions = {
    center: { lat: 48.8607200, lng: 2.3949340},
    zoom: 15
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  console.log("map loaded")

  $.get('/markers', function(data){
    data.forEach(function(monument){
      var marker = new google.maps.Marker({
         position: {lat: monument.lat, lng: monument.lng},
         map: map
       });
    });
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
