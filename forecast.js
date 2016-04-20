//Module requirements
var prompt = require("prompt");
// Start the prompt 
prompt.start();

var request = require("request");
var unixTimestamp = require("unix-timestamp");
var colors = require("colors");
var Table = require("cli-table");


//Ask the user to enter his location and with his answer, find the longitude and the latitude of this city
prompt.get(["in which city are you?"], function (err, result) {
  var city = result["in which city are you?"].toLowerCase();
  var addressLocation = "https://maps.googleapis.com/maps/api/geocode/json?address=" + city;
    request(addressLocation, function(error, result) {
      var resultObjectLocation = JSON.parse(result.body);
      var latitude = resultObjectLocation.results[0].geometry.location.lat;
      var longitude = resultObjectLocation.results[0].geometry.location.lng;

        
      // Get the current temperature and the forecast for the next five days 
      var addressForecast = "https://api.forecast.io/forecast/c2ccc9c0b46d09fcc01844821a4fac00/" + latitude + "," + longitude + "?units=si";
      request(addressForecast, function(error, result) {
        var resultOjectForecast = JSON.parse(result.body);
        var currentTemperature = resultOjectForecast.currently.temperature.toFixed(1);
        var currentWeather = resultOjectForecast.currently.summary.toLowerCase();
        var currentDateInUnixTimestamp = unixTimestamp.toDate(resultOjectForecast.currently.time);
        var currentDate = currentDateInUnixTimestamp.toString().slice(0, 15);
        var celcius =  "\u00B0C"; // \uXXXX , where XXXX is the hexa digits value of the ASCII
        
        //console.log("Today, " + currentDate.magenta + ", the temperature is " + currentTemperature.bold.magenta + celcius.magenta + " and it's " + currentWeather.bold + ".");
          //   for(var i = 0; i < 6; i++) {
          //   var nextWeekWeather = resultOjectForecast.daily.data[i].summary.toLowerCase();
          //   var nextWeekTemperatureMin = resultOjectForecast.daily.data[i].temperatureMin.toFixed(1);
          //   var nextWeekTemperatureMax = resultOjectForecast.daily.data[i].temperatureMax.toFixed(1);
          //   var date = unixTimestamp.toDate(resultOjectForecast.daily.data[i].time).toString().slice(0, 15);
           //console.log(date.cyan + " will be " + nextWeekWeather.bold + " The temperature minimum will be " + nextWeekTemperatureMin.bold.blue + celcius.bold.blue + " and the maximum will be " + nextWeekTemperatureMax.bold.yellow + celcius.bold.yellow + ".");
            //}
              
    
          
//Display the result in table
          var table = new Table({
            head: ["Date".cyan, "Weather in ".grey + city.replace(city[0], city[0].toUpperCase()).bold.grey, "Current Temp.".grey, "Temp. Min".blue, "Temp. Max".yellow],
            colWidths: [25, 45, 15, 15, 15]
          });
          
          
            table.push(
            [currentDate, currentWeather, currentTemperature + celcius, "--", "--" ]
            );
            for(var i = 1; i < 6; i++) {
              table.push(
                //[date, nextWeekWeather, nextWeekTemperatureMin, nextWeekTemperatureMax]
                [unixTimestamp.toDate(resultOjectForecast.daily.data[i].time).toString().slice(0, 15), resultOjectForecast.daily.data[i].summary.slice(0, -1).toLowerCase(), "--", resultOjectForecast.daily.data[i].temperatureMin.toFixed(1), resultOjectForecast.daily.data[i].temperatureMax.toFixed(1)]
                );
            }
            console.log(table.toString());

        
      });
    });
});

