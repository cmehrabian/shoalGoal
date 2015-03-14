Meteor.publish('nearbyShoals', function(coordinates, minDistance, maxDistance) {
    /*
    * Takes an array of coordinates in longitude/latitude format
    * min/max distance expressed in meters
    * returns nearest stories
    */
    var parameters;
    parameters = {
        geometry: {
            type: "Point" ,
            // array of longitude/latitude
            coordinates: coordinates
        },
        $maxDistance: maxDistance,
        $minDistance: minDistance
    }
    return  Shoals.find({ loc : {$near: parameters } });
});

Meteor.publish('newestShoals', function () {
    // Get the most recent stories.
    return Shoals.find({}, {sort: {"createdAt": -1}});
});
