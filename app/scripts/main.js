'use strict';
function initialize() {
  var mapOptions = {
    center: { lat: 48.8607200, lng: 2.3949340},
    zoom: 16
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
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
