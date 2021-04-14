const request = require('postman-request')


const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address + '.json?access_token=pk.eyJ1IjoibWFyaWFuYWFtYXJhbCIsImEiOiJja25nNTdjZWExcTc3MnZsbDMwYndoa2U3In0.Rf082ln9RomIXnXZvhOcbQ'
 
    request({url: url, json: true}, (error, response) => {
       if(error) {
          callback('Unable to connect to connect to Loacation service!', undefined)
       } else if (response.body.features.length === 0) {
          callback('Unable to find location!', undefined)
       } else {
          callback(undefined, {
             latitude: response.body.features[0].center[01,
             longitude: response.body.features[0].center[0],
             location: response.body.features[0].place_name
          })
       }
 
    })
 }

 module.exports = geoCode