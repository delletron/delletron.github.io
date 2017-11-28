//hide trees first
//onclick reveal tree one by one
//$(IDselector).click(reveal)
	//function reveal () {
		//$('img').show()
//	}


$(function() {

  $('.pop-up').hide();
  $('.pop-up').fadeIn(1000);
  $('.close-button').click(function (e) {
  $('.pop-up').fadeOut(700);
  $('#overlay').removeClass('blur-in');
  $('#overlay').addClass('blur-out');
  e.stopPropagation();
  });
});


$('#first-add').click(reveal)

function reveal () {
	$('#first-tree').show(slow);
}

$('#second-add').click(reveal)

function reveal () {
	$('#second-tree').show();
}

$('#third-add').click(reveal)

function reveal () {
	$('#third-tree').show();
}

$('#fourth-add').click(reveal)

function reveal () {
	$('#fourth-tree').show();
}

$('#fifth-add').click(reveal)

function reveal () {
	$('#fifth-tree').show();
}

$('#sixth-add').click(reveal)

function reveal () {
	$('#sixth-tree').show();
}