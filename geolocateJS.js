// geolocate using ip.nf

var geolocateJS = {};
geolocateJS.URL = 'https://ip.nf/me.json';
geolocateJS.locationObject = {};
geolocateJS.locate = function(callback){
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(event) {
		if (request.status >= 200 && request.status < 300) {
			geolocateJS.locationObject = request.response;
			if (callback)
				callback(geolocateJS.locationObject);
		} else {
			// fail silently
		}
	};
	request.responseType = 'json';
	request.open('GET', geolocateJS.URL, true);
	request.send();
}
