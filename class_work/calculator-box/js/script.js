// create var inside js
var total =0;

// click on #a10
// add 10 to 'total'
// output updated 'total' to #out




$('#a10').click(addTen)
function addTen () {
	total += 10;
	$('#out').html(total)
}


$('#a20').click(addTwenty)
function addTwenty () {
	total += 20;
	$('#out').html(total)
}


$('#a30').click(addThirty)
function addThirty () {
	total += 30;
	$('#out').html(total)
}


$('#n10').click(minusTen)
function minusTen () {
	total -= 10;
	$('#out').html(total)
}


$('#n20').click(minusTwenty)
function minusTwenty () {
	total -= 20;
	$('#out').html(total)
}


$('#n30').click(minusThirty)
function minusThirty () {
	total -= 30;
	$('#out').html(total)
}


$('#red').click(turnRed)
function turnRed () {
	$('#out').css('background-color', 'red');
}


$('#blue').click(turnBlue)
function turnBlue () {
	$('#out').css('background-color', 'blue');
}


$('#out').click(whiteBkg)
function whiteBkg () {
	$('#out').css('background-color', 'white');
}


$('#out').click(clear)
function clear () {
	total === 0;
}