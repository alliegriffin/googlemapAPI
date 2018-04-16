 function initMap() {
    var latlong = {lat: 41.161, lng: -71.584};

    var latlong2 = {lat: 41.553, lng: -70.608};

    var latlong3 = {lat:40.595, lng: -74.100};

    var latlong4 = {lat: 46.813, lng: -71.207};

    var latlong5 = {lat:11.556, lng: 104.928};

    var latlong6 = {lat:40.726, lng: -73.981};

    var map = new google.maps.Map(document.getElementById('map'), {
             zoom: 7, 
            center: latlong
    });  // ends map

    var marker = new google.maps.Marker({
        position: latlong, 
        map: map
    }); 

    var marker = new google.maps.Marker({
    	position: latlong2,
    	map: map 
    });

     var marker = new google.maps.Marker({
    	position: latlong3,
    	map: map 
    });
      var marker = new google.maps.Marker({
    	position: latlong4,
    	map: map 
    });
       var marker = new google.maps.Marker({
    	position: latlong5,
    	map: map 
    });
  	var marker = new google.maps.Marker({
    	position: latlong6,
    	map: map 
    });

} // ends function  
