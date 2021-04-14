 const geocode = require('./utils/geocode')
 const forecast = require('./utils/forecast')

geocode('Boston', (error, data) => {
   console.log('error', error)
   console.log('data', data)
   
   forecast(data.latitude, data.longitude, (error, data) => {
      console.log('error', error)
      console.log('data', data)
   })
})

