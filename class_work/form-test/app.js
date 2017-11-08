$('#myForm').submit(handleSubmit);

function handleSubmit (event) {
	event.preventDefault();
	var name = $('#name-input').val()
// PREVENT DEFAULT BEHAVIOUR 
	$('#target').html(name);
}