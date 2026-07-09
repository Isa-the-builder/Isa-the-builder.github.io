//40.749191° N, -73.967590° W 
var coordinates =[40.749191, -73.967590]; 
var map = L.map('map').setView(coordinates, 13); 
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map); 
L.circle(coordinates, {"title": "Welcome to the UN Building!",
                      color: "blue", 
                      fillcolor: "#243eed", 
                      radius: 90}).bindPopup("<p> Welcome to the UN Building!</p>").addTo(map);
