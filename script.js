var todos = JSON.parse(localStorage.getItem('todos')) || [];

var createToDo = function(text) {
	var html = "<li>"+text+" <button id='del' class='ui-state-default'>x</button> </li>";
	$('ul').append(html);
	$('input:text').val('');
}

for(var i = 0; i < todos.length; i++) {
	createToDo(todos[i]);
}

$('#myForm').submit(function(event){
	event.preventDefault();
	var todo = $('input:text').val();

	if (todo != '') {
		todos.push(todo);
		localStorage.setItem('todos', JSON.stringify(todos));

		createToDo(todo);
	}
});

$(document).on('click','#del', function() {
	var todoIndex = todos.indexOf($(this).prev().text());
	todos.splice(todoIndex,1);
	localStorage.setItem('todos', JSON.stringify(todos));
	$(this).parent().remove();
});

$( "#sortable" ).sortable();
