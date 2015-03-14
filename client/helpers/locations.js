Template.registerHelper('truncateCoordinate', function(coordinate, decimalPlaces){
    // Truncate a decimal coordinate to a specified accuracy

    var absoluteValue = Math.abs(coordinate);
    if ( absoluteValue >= 100 ) {
        return coordinate.toPrecision(decimalPlaces + 3);
    } else if ( absoluteValue >= 10 ) {
        return coordinate.toPrecision(decimalPlaces + 2);
    } else {
       return coordinate.toPrecision(decimalPlaces + 1);
    }
})
