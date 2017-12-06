(function () {
	"use strict";
	// body...

	$("#theCarousel").carousel();


})();

	// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}

n =  new Date();
y = n.getFullYear();
document.getElementById("date").innerHTML = y;


function myMap() {
var mapProp= {
    center:new google.maps.LatLng(-25.749405,28.1797943),
    zoom:15,
};

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
        
}