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

  var contentString = "<h1>Casino Barrière Montreux</h1><p>Montreux Casino (Casino Barrière de Montreux) is a casino located in Montreux, Switzerland on the shoreline of Lake Geneva. It has served as the venue for the Montreux Jazz Festival and was rebuilt following a 1971 fire memorialized in the Deep Purple song 'Smoke on the Water'. It is a property of Groupe Lucien Barrière. The casino housed Mountain Studios which has since become the museum Queen: The Studio Experience.</p>";

  var infowindow = new google.maps.InfoWindow({
	content: contentString
  });

  marker.addListener("click", function () {
  	infowindow.open(map, marker);
  });
}

const images = [
  "images/image5_montreux.png", 
  "images/image1_montreux.jpg", 
  "images/image2_montreux.jpg",
  "images/image3_montreux.jpg",
  "images/image4_montreux.jpg",
];


