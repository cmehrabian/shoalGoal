Meteor.startup( function () {
    Shoals._ensureIndex({'location.index': '2dsphere'});
});
