$('#myForm').submit(function(event){
	event.preventDefault();
	var todo = $('input:text').val();

	if (todo != '') {
		$('ul').append("<li>"+todo+" <button id='del'>x</button> </li>");
		$('input:text').val('');
		console.log(todo);
	}
});

$(document).on('click', '#del', function() {
	$(this).parent().remove();
	console.log('clicked');
});

