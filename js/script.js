function initMap() {
  var el = document.getElementById("canvas");
  var myLocation = new google.maps.LatLng(46.429929664728206, 6.911790784724885);
  var mapOptions = {
  	center: myLocation,
  	zoom: 17,
  	mapTypeId: google.maps.MapTypeId.SATELLITE,
  	mapTypeControlOptions: {
  	  position: google.maps.ControlPosition.BOTTOM_CENTER
  	},
  	zoomControl: true,
  	zoomControlOptions: {
  	  position: google.maps.ControlPosition.RIGHT_CENTER
  	}
  };

  var map = new google.maps.Map(el, mapOptions);

  var marker = new google.maps.Marker({
  position: myLocation,
  map: map,
  icon: {
    url: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
        <text x="0" y="30" font-size="30">🤑</text>
      </svg>
    `),
    scaledSize: new google.maps.Size(40, 40)
    },
    title: "Montreux 🤑",
    animation: google.maps.Animation.BOUNCE
  });

  var contentString = "<h1>Casino Barrière Montreux</h1><p>It's not gambling if you know you are going to win</p>";

  var infowindow = new google.maps.InfoWindow({
	content: contentString
  });

  marker.addListener("click", function () {
  	infowindow.open(map, marker);
  });
}

