# geolocateJS
Geo-location JS library

This library uses the service exposed by https://ip.nf and wraps its JSON result into a function.

Import the library into your project:
```HTML
  <script src="geolocateJS.js"></script>
```

Call it when you need it:
```JavaScript
  geolocateJS.locate(function(locationData){
    alert('You are from ' + locationData.ip.country);
  });
```

The object `geolocateJS.locationObject` will hold the location object after the call to the `locate()` function.
- `geolocateJS.locationObject.country` will hold the textual version
- `geolocateJS.locationObject.country_code` will hold the country code


_Many thanks to the folks at https://www.whatwedo.ch/ for providing the geo-location service!_
