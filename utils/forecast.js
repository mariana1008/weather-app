const request = require('postman-request')


const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=02193716d5d5f75c304846a494f1ebc7&query=' + latitude + ',' + longitude + '=f'
 
    request({url: url, json: true}, (error, response) => {
       if(error) {
            callback('Unable to connect to connect to forecast service!', undefined)
       } else if(response.body.error){
            callback('Unable to find location!!', undefined)
       } else {
          callback(undefined, {
             temperature: response.body.current.temperature,
             feelslike: response.body.current.feelslike
        })
       }
 
    })
 }

 module.exports = forecast