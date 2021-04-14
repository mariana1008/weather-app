 const geocode = require('./utils/geocode')
 const forecast = require('./utils/forecast')

 const address = process.argv[2]

 if(!address){
   console.log('Please, provide a address')
}else {
     geocode(address, (error, data) => {
       if(error){
         return console.log(error)
       } 
       
       forecast(data.latitude, data.longitude, (error, forecastData) => {
          if(error) {
             return error
          }
          console.log('Location', data.location)
          console.log(forecastData)
       })
    })

 }

