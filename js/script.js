function initMap() {
  var el = document.getElementById("canvas");
  var myLocation = new google.maps.LatLng(46.429929664728206, 6.911790784724885);
  var mapOptions = {
  	center: myLocation,
  	zoom: 14,
  	mapTypeId: google.maps.MapTypeId.SATELLITE,
  	mapTypeControlOptions: {
  		position: google.maps.ControlPosition.BOTTOM_CENTER
  	} 
  };


