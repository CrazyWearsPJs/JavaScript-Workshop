var map;
var markerRef;

function initialize() {
    var mapOptions = {
        center: { lat: 33.9003940, lng: -117.4936050},
        zoom: 12
    };
    
    // Create map
    map = new google.maps.Map(document.getElementById('map-canvas'),
                                  mapOptions);
}

function showLocation () {
    // Grab latitude and longitude from inputs
    var lat = document.getElementById('latitude').value;
    var lng = document.getElementById('longitude').value;

    // Remove old marker
    if (markerRef) {
        markerRef.setMap(null);
    }

    var latlng = new google.maps.LatLng(lat,lng);
    
    // Create new marker
    var marker = new google.maps.Marker({
        position: latlng,
        map: map
    });

    // Track new marker
    markerRef = marker;

    // Center map on marker
    map.setCenter(latlng);
}

initialize();

var button = document.getElementById('map-button');
button.addEventListener('map-button', showLocation);
