var botNameEL = document.getElementById('botName')
var botPriceEL = document.getElementById("botPrice");
var totalCostEL = document.getElementById("totalCost");
var loadingEl = document.getElementById('loading')

var params = new URLSearchParams(window.location.search)
var botName = params.get('botName')
var botPrice = params.get('botPrice')


var shippingFee = 0.5 // per mile

// Boston Coordinates
var factoryCoordinates = {
    lat: 42.358990,
    lon: -71.058632,
}

function getDistanceFromFactory(position) {
   var userLat = position.coords.latitude;
   var userLon = position.coords.longitude;
   
    // get distance using the dist. matrix API
    fetch(
      'https://api.distancematrix.ai/maps/api/distancematrix/json?origins=' + factoryCoordinates.lat + ',' + factoryCoordinates.lon + '&destinations=' + userLat + ',' + userLon +'&key=2vEDKVX6cfWJ8YEfo56t03xeKzMHO')
      .then(function(response){
        return response.json()
    })
    .then(function(distanceData){
        //once we have milage 
        var distance = distanceData.rows[0].elements[0].distance.value;
        // calculate shipping
        var total = calculateShipping(distance)
        displayTotals(total)
            // displayTotals
        
      })
      .catch(function(error){
        console.log(error)
      })
      .finally(function(){
        // hide the loading animation
        loadingEl.classList.remove('d-flex')
        loadingEl.classList.add('d-none')
      })
}

function calculateShipping(distance) {
    return (distance * shippingFee) + botPrice 
}

function displayTotals(total) {
    // DOM updates
    botNameEL.innerText = botName
    botPriceEL.innerText = 'Base price: $' + botPrice
    totalCostEL.innerText = 'Total cost: $' + total 
}

// check if geolocation API is supported
if(navigator.geolocation){
   function success(position) {
    getDistanceFromFactory(position)

   }
    // get the user's coordinates using the Geolocation API from the Browser
    navigator.geolocation.getCurrentPosition(success, function() {
        console.log('Error with geolocation')
    })
} else{
    console.log('Geolocation API is not supported :(')
}


