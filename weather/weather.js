$(function () {
 
  var weatherAtLocation = function (lat, log) {


    var weather = "https://api.darksky.net/forecast/b908e5cb0e40855083f622994f9ec836/" + lat + "," + log;

    $.ajax(weather, { dataType: "jsonp" }).done(function (data) {
      console.log(data);
      $("#card1 .temp").html(" temperature: " + data.currently.temperature);
      $("#card1 .maxtemp").html("Current MaxTemperature:" + data.daily.data[0].temperatureMax);
      $("#card1 .precip").html("Percipation:" + data.daily.data[0].precipIntensity);
      $("#card1 .min").html("Current Mintemperature:" + data.daily.data[0].temperatureMin);
      $("#card1 .time").html("newDate" + result.currently.time * 1000)

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
      // console.log(data);


      weatherAtLocation(latitude, longitude);
    });
  }
  getLocation(41635);
  $("#more").click(function () {
    var zipcode = $("#location").val();
    getLocation(zipcode);
  });

});


