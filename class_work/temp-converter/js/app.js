
// var total = ;

// function fInput() {
// 	total = total +1;
// 	console.log(total);
// 	$('#click-num').html(total)

$('#farhenheit').change(fInput);

function fInput () {
	var temp = $('#farhenheit').val();
	var celsius = (temp- 32) / 1.8;
	$('#celsius').val(celsius)


	if (temp >= 70) {
		$('body').css('background', 'url(https://cdn.wallpapersafari.com/68/36/UvznLr.jpg');
	}
	else if (temp <10) {
		$('body').css('background', 'url(http://www.metalsucks.net/wp-content/uploads/2013/10/Lars-Ulrich-is-Freezing.jpg');
	}
	else if (temp < 20) {
		$('body').css('background', 'url(https://www.wired.com/wp-content/uploads/2015/11/GettyImages-4694791531.jpg');
	}
	
	else {
		$('body').css('background-color', 'url(https://cdn.dribbble.com/users/458522/screenshots/2382470/limbo___dribbbler.jpg');
	}
}

// function cInput () {
// 	var 
// }

	