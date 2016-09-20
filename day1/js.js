$(document).ready(function(){
    alert('jQuery is working');

});

var dom = $(window.document);
var fnRead= function(){
alert('jQuery is working!');
}
dom.ready(fnRead)