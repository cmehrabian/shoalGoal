Meteor.methods({
    geocodeReverse: function(latlng) {
        // This funciton returns details about a location
        // such as city, country, street, etc.
        // Accepts latitude and longitude as input
        try {
            // Create a GeoCoder
            var geo = new GeoCoder({
                geocoderProvider: "openstreetmap",
                httpAdapter: "http"
            });
            
            // Get the reverse geolocation, based on latitude and longitude
            var result = geo.reverse(latlng.lat, latlng.lng);
            // console.log(result)

            // Return the geocoded details
            return result[0];
        }
        catch (e){return "sea";}
    },
    addShoal: function( shoal ) {
        // add reverse geolocation to shoal. E.g. city, country, etc.
        shoal.location = Meteor.call( "geocodeReverse", shoal.location );

        // Attributes for the spatial index

        // parse values to floats
        var longitude = parseFloat(shoal.location.longitude);
        var latitude = parseFloat(shoal.location.latitude);

        // Add Geo JSON to location
        shoal.location.index = {
            "type": "Point",
            "coordinates": [longitude, latitude]
        };

        // Save the shoal into the Shoals collection
        Shoals.insert( shoal ) ;
    },
    'getNearbyShoals': function (location) {
        var parameters;
        parameters = {
            geometry: {
                type: "Point" ,
                // array of longitude/latitude
                coordinates: coordinates
            },
            $maxDistance: 10000,
            $minDistance: 0
        }
        return  Shoals.find({ loc : {$near: parameters } });
    }
});
