//Javascrip code for google map implementation.
//aswell as 5 markers with information attached to them

var map;

function myMap() {
    //creating the map
    var mapProp = {
        //setting center
        center: new google.maps.LatLng(-35.21806186820435, 149.13992153715213),
        //how zoomed in
        zoom: 13,
        //map type
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    //defining map
    map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    //calling markers
    addMeta(map);
    addVRCanberra(map);
   
}

//Metaphysica Marker
function addMeta(map) {
    //creating marker
    var Meta = new google.maps.Marker({
        position: { lat: -35.21806186820435, lng: 149.13992153715213}
    });
    
    Meta.setMap(map);

    //if clicked
    var contMeta =
        "<h1>Metaphysica</h1>" +
        '<img src="assets/meta.png" style="float:left; width:25%; margin-right:10px; ">' +
        "<p>Metaphysica are traditional escape rooms that transform when you wear our equipment, taking the room you’re standing in into a new reality. " +
        "Players are transported to another dimension of space and time.Dive deep into unknown depths of our ocean, sky rocketing into space or explore a " +
        "sorcerer's laboratory and see if you can escape.<br/><br/>" +
        '<a href="https://www.metaphysica.com.au/">Click Here</a>' +
        " for the Metaphysica's website" +
        '</p>';

    var infoMeta = new google.maps.InfoWindow({
        content: contMeta
    });

    google.maps.event.addListener(Meta, 'click',
        function () {
            infoMeta.open(map, Meta);
        });
}

//VR Canberra marker
function addVRCanberra(map) {
    //creating marker
    var VRCanberra = new google.maps.Marker({
        position: { lat: -35.21529879842811, lng: 149.14079099864065 }
    });

    VRCanberra.setMap(map);

    //if clicked
    var contVRCanberra =
        "<h1>VR Canberra</h1>" +
        '<img src="assets/canberra.png" style="float:left; width:25%; margin-right:10px;">' +
        "<p>VR Canberra brings to you the latest in virtual reality! Come visit VR Canberra – be amazed by the" + 
        " state - of - the - art virtual reality games and rides that are suitable for gamers, couples, families and team building events. <br/><br/> " +
        '<a href="https://vrcanberra.com.au/">Click Here</a>' +
        " for VR Canberra's website" +
        '</p>';

    var infoVRCanberra = new google.maps.InfoWindow({
        content: contVRCanberra
    });

    google.maps.event.addListener(VRCanberra, 'click',
        function () {
            infoVRCanberra.open(map, VRCanberra);
        });
}

//loading the map
google.maps.event.addDomListner(window, 'load', myMap)