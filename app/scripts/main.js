function initialize() {
  var mapOptions = {
    center: { lat: 48.8607200, lng: 2.3949340},
    zoom: 15
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  console.log("map loaded")
}
google.maps.event.addDomListener(window, 'load', initialize);

$.get('/markers', function(data){
  console.log(data);
});
