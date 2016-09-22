$(function(){


var url = "http://rest.learncode.academy/api/learncode/friends/57e2c80c1ebec60100061872";
$.ajax(url).done(function(data){
    $("#me").append(data.name + "likes" + data.drink);
 
});
// $.ajax""
// .done(function(data){
//   $("#me").append(data.name +  " likes " + drink");
// });

// });

});