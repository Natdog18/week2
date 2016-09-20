$(function(){


    $("#para").click(function(){
        $(this).fadeOut('slow','linear');
    });

    $("h3").css("text-decoration", "underline")
           .css("font-weight", "normal");
           
     $("ul").find("li:first-child")
     .css("color", "pink");
});