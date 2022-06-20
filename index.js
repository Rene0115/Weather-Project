import express from 'express';
import https from 'https';

const app = express();


app.get("/", function(req, res){

  const url = "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=690c09bd3b51457e02d419b1ed0e072d"

  https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data", function(data){
      const weatherData = JSON.parse(data)
      const temp = weatherData.main.temp
       res.send("The temperature in londo is " + temp + "degrees Celcius.");
    })
  })

  res.send("Server dey work")
});




app.listen (5000, function(){
  console.log ("Server is running on port 5000" )
});
