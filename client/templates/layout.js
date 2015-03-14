Template.layout.events({
    "click .shoal-link": function (event) {
        event.preventDefault();

        Router.go('addShoal');
    }
});

/*Template.layout.helpers({
    onPage: function (pageName) {
        return Router.current().route.name === pageName;
    }
});*/

Template.layout.helpers({
    'geolocation': function () {
        var geolocation = Geolocation.latLng();
        return geolocation;
    }
});
