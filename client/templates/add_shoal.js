Template.addShoal.events({
    'click #add_shoal': function () {
        // Fetch current location
        var latLng = Geolocation.latLng();

        // Fetch text as a var from textaread
        var text = $('#shoal').val();

        // Create shoal object
        var shoal = {
            shoal: text,
            createdAt: new Date(),
            location: {
                // coordinates to pass into the geolocation function
                lat: latLng.lat,
                lng: latLng.lng
            }
        };

        // Add shoal to collection
        Meteor.call("addShoal", shoal);

        // Clear the textarea
        $('#shoal').val("");

        // Route to the stories list
        Router.go('list');
    }
});
