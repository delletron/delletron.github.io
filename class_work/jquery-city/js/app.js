// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked


// $('#first').click(swapFirst);
// function swapFirst() {
//   $('#bigimage').attr('src', 'img/1.jpg')
// }


// $('#second').click(swapSecond);
// function swapSecond() {
//   $('#bigimage').attr('src', 'img/2.jpg')
// }


// $('#third').click(swapThird);
// function swapThird() {
//   $('#bigimage').attr('src', 'img/3.jpg')
// }


// $('#fourth').click(swapFourth);
// function swapFourth() {
//   $('#bigimage').attr('src', 'img/4.jpg')
// }

// 1. select class ID (add if no classes)
// 2. write function
	// read element THIS!

// want to click on any thumbnail image and change big image


$('.thumb').click(changeImage);

function changeImage() {
	console.log(this)
	var newImage = $(this).attr('src');
	$('#bigimage').attr('src', newImage)
}
