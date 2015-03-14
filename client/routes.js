Router.configure({
    layoutTemplate: "layout",
    waitOn: Geolocation.currentLocation()
});

Router.map(function() {
    this.route('list', {
        path: '/'
    })
});

Router.route('/add-shoal', {
    name: 'addShoal'
});
