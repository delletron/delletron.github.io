//hide trees first
//onclick reveal tree one by one
//$(IDselector).click(reveal)
	//function reveal () {
		//$('img').show()
//	}


// $(function() {

//   $('.pop-up').hide();
//   $('.pop-up').fadeIn(1000);
//   $('.close-button').click(function (e) {
//   $('.pop-up').fadeOut(700);
//   $('#overlay').removeClass('blur-in');
//   $('#overlay').addClass('blur-out');
//   e.stopPropagation();
//   });
// });

// $('#first-add').click(function () {
// 	$(this).find('#first-tree').show();
// });


$('#first-add').click(reveal1)

function reveal1 () {
	$('#first-tree').show();
}

$('#second-add').click(reveal2)

function reveal2 () {
	$('#second-tree').show();

}

$('#third-add').click(reveal3)

function reveal3 () {
	$('#third-tree').show();
}

$('#fourth-add').click(reveal4)

function reveal4 () {
	$('#fourth-tree').show();
}

$('#fifth-add').click(reveal5)

function reveal5 () {
	$('#fifth-tree').show();
}

$('#sixth-add').click(reveal6)

function reveal6 () {
	$('#sixth-tree').show();
}