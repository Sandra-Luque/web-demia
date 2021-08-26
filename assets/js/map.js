/*------mapa----*/

function initMap() {
  var geocoder = new google.maps.Geocoder()
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: { lat: -16.40764, lng: -71.525703 },
  })

  document.getElementById("submit").addEventListener("click", function () {
    geocodeAddress(geocoder, map)
  })

  var options = {
    zoom: 17,
    center: new google.maps.LatLng(-16.40764, -71.525703),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  }

  var map = new google.maps.Map(document.getElementById("map"), options)

  var marker = new google.maps.Marker({
    position: map.getCenter(),
    map: map,
    title: "Pulsa aquí",
    icon: "assets/images/p-icon.png",
  })

  var popup = new google.maps.InfoWindow({
    content: "Av. Venezuela Nro. 864, Urb. Santa Isabel. Arequipa - Peru",
    position: map.getCenter(),
  })

  popup.open(map, marker)
}
