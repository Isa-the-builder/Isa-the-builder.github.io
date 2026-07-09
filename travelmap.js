//40.749191° N, -73.967590° W 
var coordinates =[40.749191, -73.967590]; 
var popupcode =`<center>
<h3>Hello from the Maldives!</h3> 
<iframe width="200" height="100" src="https://www.youtube.com/embed/vQ-IkgCCxq4?si=kLb7Sssu-YjMQq-_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</center>`; 
var marker1 = [40.761944, -73.950000]; 
var markercode = `<center>
<h3>Roosevelt Island</h3>  
<a href="travel.jpg">
<img src="travel.jpg" title="Roosevelt Island" height="100" width= "200"> 
</a>
</center>`
var map = L.map('map').setView(coordinates, 13); 
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map); 
L.circle(coordinates, {"title": "Welcome to the UN Building!",
                      color: "blue", 
                      fillcolor: "#243eed", 
                      radius: 90}).bindPopup(popupcode).addTo(map);
L.marker(marker1).bindPopup(markercode).addTo(map);
