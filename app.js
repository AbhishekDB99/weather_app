const request = require('request')

request('http://api.weatherstack.com/current?access_key=31874430242f7085dc23f9b7aeebbf2d&query=Pune',(error,response) =>{
    console.error(error)
    console.log(response.body)
})