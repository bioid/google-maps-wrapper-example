import GoogleMap from "/GoogleMapsWrapper.js";

// instantiate a new object of type GoogleMap() through its constructor
// by using the new keyword
let googleMap = new GoogleMap();

function randRangePlusMinus(num) {
    // returns a random number in the range from (-num, +num)
    let retVal = Math.random() * num;   // random number from (0, +num)
    return Math.floor(Math.random() * 2) === 1 ? retVal : retVal *= -1; // flip the sign ~half the time
}

$('#addRandomMarker').on('click', function(event) {
    googleMap.addMarker({
        lat: randRangePlusMinus(90),
        lng: randRangePlusMinus(180)
    });
});