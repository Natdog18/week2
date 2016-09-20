function addListItem(){
var text = $("#new-text").val();
$("#todolist").append('<li>'+text+'<button>Delete</button></li></li>');
("new-text").val('');
}
$(function() {
$("#add").on('click', addListItem);

})

