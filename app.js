const request = require('request')
// const url = 'https://api.darksky.net/forecast/ef66155ad67dec58888238ec84a3e763/23.7104'


// request({url : url, json: true}, (error,response) =>{
//     if(error){
//         console.log('Unable to Connect to the Web Service')
//     }else if(response.body.error){
//         console.log('Unable to Find the location')
//     }else{
//         console.log(response.body.daily.data[0].summary + ' It is Currently',response.body.currently.temperature + ' degree and there is',response.body.currently.precipProbability,' percent chance of raining')
//     }
     
//  })
 //Geocoding Line Converts a place to lattitude and longitude
 const GeoCodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Dhaka.json?access_token=pk.eyJ1IjoicmFzZWwyNSIsImEiOiJjazQzcDR3cHkwYWEwM2t0Njd3OTBoeGtvIn0.avxph7kkWMrFk-O8CXV8qQ&limit=1'
 request({url : GeoCodeUrl, json: true }, (error,response) => {
     if(error){
         console.log('Unable to connect the internet')
     }else if(response.body.features.length ==0){
         console.log('put a valid address')
     }else{
        const Latitude = response.body.features[0].center[1]
        const Longitude= response.body.features[0].center[0]
        console.log(Latitude, Longitude)
     }
 })