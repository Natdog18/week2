$(function () {
  var weather = "https://api.darksky.net/forecast/b908e5cb0e40855083f622994f9ec836/37.8267,-122.4233";

  $.ajax(weather, { dataType: "jsonp" }).done(function (data) {
    console.log(data);
    $(".temp").append("Current temperature: " + data.currently.temperature);
    $(".maxtemp").append("Current MaxTemperature:" + data.daily.data[0].temperatureMax);
    $(".precip").append("Percipation:" + data.daily.data[0].precipIntensity);
    $(".min").append("Current Mintemperature:" + data.daily.data[0].temperatureMin);




  });
  var location = "https://maps.googleapis.com/maps/api/geocode/json?address=41635&key=AIzaSyBn7kAW5YxaUR2GPcgaQedUMMODW4gcjgA";
  $.ajax(location, { datatype: "json" }).done(function (data) {
    console.log(data);
    var latitude = data.results[0].geometry.location.lat;
    var longitude = data.results[0].geometry.location.lng;
    $(".location").append("Location:" +latitude);
    $(".location").append(longitude);
    console.log(latitude);
    console.log(longitude);
  });
});

