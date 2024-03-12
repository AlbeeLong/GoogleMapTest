var map = L.map('map').setView([51.505, -0.09], 3); // Устанавливаем центр и масштаб
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var redIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
   iconSize: [25, 41],
   iconAnchor: [12, 41],
   popupAnchor: [1, -34]
   });

var greenIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
   iconSize: [25, 41],
   iconAnchor: [12, 41],
   popupAnchor: [1, -34]
   });

var blueIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
   iconSize: [25, 41],
   iconAnchor: [12, 41],
   popupAnchor: [1, -34]
   });



L.marker([56.50, 60.35],{icon:redIcon}).addTo(map)
    .bindPopup('ekb')
    .openPopup();


L.marker([55.45, 37.35],{icon:blueIcon}).addTo(map)
    .bindPopup('moscow')
    .openPopup();


L.marker([40.07, 131.54],{icon:greenIcon}).addTo(map)
    .bindPopup('vladivostok')
    .openPopup();


fetch('Coordinates.csv')
.then(response => response.text())
.then(data => {
    var rows = data.split('\n');

    for (var i = 1; i < rows.length; i++) {
        var columns = rows[i].split(',');

        var country = columns[0];
        var capital = columns[1];
        var latitude = parseFloat(columns[2]);
        var longitude = parseFloat(columns[3]);
        console.log(country)
        L.marker([latitude, longitude],{icon:greenIcon})
            .addTo(map)
            .bindPopup(country + " " + capital)
            .openPopup();
    }
})


