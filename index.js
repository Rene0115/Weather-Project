const { resolveSoa } = require('dns');
const express = require('express');
const  https = require('https');

const app = express();


app.get("/", function(req, res){

  const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=690c09bd3b51457e02d419b1ed0e072d&units=metric" 

  https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data", function(data){
      const weatherData = JSON.parse(data)
      const weatherDescription = weatherData.weather[0].description;
      const temp = weatherData.main.temp
      const weatherIcon = weatherData.weather[0].icon;
      const weatherImgIcon = "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";
      res.write("<h1>The temperature in london is " + temp + "degrees Celcius.<h1>")
      res.write("The weather is currently " + weatherDescription + ".") 
      res.send();    
      })
  })
});




app.listen (5000, function(){
  console.log ("Server is running on port 5000" )
});
