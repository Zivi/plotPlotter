'use strict';
function initialize() {
  var mapOptions = {
    center: { lat: 48.8607200, lng: 2.3949340},
    zoom: 16,
    fullscreenControl: false
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  var infoWindow = new google.maps.InfoWindow;
  console.log('map loaded');

  $('.search-name').keyup(function(event) {
    var searchTerm = event.target.value.toLowerCase();
    $('.checkbox').each(function(index, element){
      if ($(element).find('.plot-names').attr('name').toLowerCase().indexOf(searchTerm) !== -1) {
        $('.checkbox').eq(index).show();
      } else {
        $('.checkbox').eq(index).hide();
      }
    })
    $('.clear').show();
  });

  $('.clear').click(function(event) {
    $('.search-name').val('');
    $('.checkbox').show();
    $('.clear').hide();
  });

  $('.show-location').click(function() {
    if (navigator.geolocation) {
      getLocation();
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });

  function getLocation(existingCircle) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      if (pos.lat > 48.858 && pos.lat < 48.864 && pos.lng > 2.36 && pos.lng < 2.42) {
        if (existingCircle) existingCircle.setMap(null);

        var circle = new google.maps.Circle({
          center: pos,
          strokeColor: '#039BE5',
          strokeOpacity: 1,
          strokeWeight: 1,
          fillColor: '#039BE5',
          fillOpacity: 1,
          radius: 10,
          map: map
        });
        setTimeout(getLocation.bind(null, circle), 1000);
      } else {
        infoWindow.setPosition(mapOptions.center);
        infoWindow.setContent('Error: Your location is outside the cemetary\'s boundaries');
        infoWindow.open(map);
      }
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  };

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: Cannot find your current location.' :
                          'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
  }

  $('.plot-names').click(function(event) {
    var marker,
      infowindow,
      $this = $(event.currentTarget),
      nom = $this.attr('name'),
      lat = $this.data('lat'),
      lng = $this.data('lng');
    if ($this.prop('checked')) {
      marker = new google.maps.Marker({
        position: {lat: lat, lng: lng},
        map: map,
        title: nom
      });
      infowindow = new google.maps.InfoWindow({
        content: nom
      });
      infowindow.open(map, marker);
      $this.data('marker', marker);
    } else {
      marker = $this.data('marker');
      marker.setMap(null);
    }
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
