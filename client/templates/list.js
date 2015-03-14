Template.list.helpers({
    shoals: function () {
        // Return a list of shoals
        return Shoals.find();
    },
    moment: function(date) {
        return moment(date).fromNow();
    },
    printLocation: function(latlng){
    		num = this.location.streetNumber;
    		street = this.location.streetName;
    		lat = this.location.latitude;
    		lng = this.location.longitude;


    		console.log(this);
    		return num + " " + street + "\n|   | " + lat + " " + lng ;
    }
});
