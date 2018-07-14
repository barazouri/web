function clickCheckBox(){
    var inp=document.getElementById("myInput");
    if(inp.checked){
        document.getElementById("menu").style.visibility="visible";
        var arrowLeft=document.createElement("i");
        arrowLeft.id="arrow";
         document.getElementById("myMain").appendChild(arrowLeft);
        createUser();
        bottomForCloseHam();
        $("#floating-panel").hide()

    }
    else if(!inp.checked){
        document.getElementById("mySection").remove();
        document.getElementById("arrow").remove();
        document.getElementById("menu").style.visibility="hidden";
        document.getElementById("userImg").remove();
        document.getElementById("userName").remove();
        $("#floating-panel").show()

    }
}

function bottomForCloseHam(){
    var newSec=document.createElement("section");
    newSec.id="mySection";
    document.getElementById("myMain").appendChild(newSec);
}
function createUser(){
        var us=document.createElement("img");
        var name=document.createElement("h6");
        name.id="userName";
        name.innerText="עמית דקל\nג׳יפ";
        us.id="userImg"
        us.setAttribute("src", "images/user.png");
        document.getElementById("user").appendChild(us);
        document.getElementById("user").appendChild(name);

}
// window.onload=function(){
    
//     var park1=document.createElement("img");
//     park1.id="park1"
//     park1.setAttribute("src", "images/park.png");
//     var park2=document.createElement("img");
//     park2.id="park2"
//     park2.setAttribute("src", "images/park.png");
//     var park3=document.createElement("img");
//     park3.id="park3";
//     park3.setAttribute("src", "images/park.png");
//     document.getElementById("myMain").appendChild(park1);
//     document.getElementById("myMain").appendChild(park2);
//     document.getElementById("myMain").appendChild(park3);

// }
function buttonClick(){
    document.getElementById("btn-secondary").remove();
    var thanks=document.createElement("img");
    thanks.id="thanks";
    thanks.setAttribute("src", "images/thanks.png");
    document.getElementById("myMain").appendChild(thanks);
    addPointsOfUser();
}
function addPointsOfUser(){
    var points=document.createElement("h6");
    points.id="points";
    points.innerText="סה״כ: 32 נקודות";
    document.getElementById("myMain").appendChild(points);

}

 function initMap() {
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var directionsService = new google.maps.DirectionsService;
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: {lat: 37.77, lng: -122.447}
        });
        directionsDisplay.setMap(map);

        calculateAndDisplayRoute(directionsService, directionsDisplay);
        document.getElementById('mode').addEventListener('change', function() {
          calculateAndDisplayRoute(directionsService, directionsDisplay);
        });
      }

      function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        var selectedMode = document.getElementById('mode').value;
        navigator.geolocation.getCurrentPosition(function(position){ 
            var currentLatitude = position.coords.latitude;
            var currentLongitude = position.coords.longitude;
        directionsService.route({
          origin: {lat: currentLatitude, lng: currentLongitude},  // Haight.
          destination: {lat: 32.083861, lng: 34.775298},  // Ocean Beach.
          // Note that Javascript allows us to access the constant
          // using square brackets and a string value as its
          // "property."
          travelMode: google.maps.TravelMode[selectedMode]
        }, function(response, status) {
          if (status == 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
    });
      }