$(function () {

  var weatherAtLocation = function (lat, log) {


    var weather = "https://api.darksky.net/forecast/b908e5cb0e40855083f622994f9ec836/" + lat + "," + log;

    $.ajax(weather, { dataType: "jsonp" }).done(function (data) {
      console.log(data);
      $(".temp").append("Current temperature: " + data.currently.temperature);
      $(".maxtemp").append("Current MaxTemperature:" + data.daily.data[0].temperatureMax)
      $(".precip").append("Percipation:" + data.daily.data[0].precipIntensity);
      $(".min").append("Current Mintemperature:" + data.daily.data[0].temperatureMin);

    });
  }

  var getLocation = function (zipcode) {
    var location = "https://maps.googleapis.com/maps/api/geocode/json?address=" + zipcode + "&key=AIzaSyBn7kAW5YxaUR2GPcgaQedUMMODW4gcjgA";
    $.ajax(location, { datatype: "json" }).done(function (data) {
      console.log(data);
      var latitude = data.results[0].geometry.location.lat;
      var longitude = data.results[0].geometry.location.lng;
      var city = data.results[0].address_components[1].long_name;
      var state = data.results[0].address_components[2].long_name;
      // $(".location").append("Location:" + latitude);
      // $(".location").append(longitude);
      // $(".location").append(data.results[0].address_components[1].long_name);
      // $(".location").append(data.results[0].address_components[2].long_name);
      $(".location").append(city+' '+ state);
      console.log(data);


      weatherAtLocation(latitude, longitude);
    });
  }
  getLocation(41635);
  $("#more").click(function () {
    var zipcode = $("#Location").val();
    getLocation(zipcode);
  });

});

