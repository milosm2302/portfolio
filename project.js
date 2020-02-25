$(document).ready(function(){
	$('#first').hover(function(){
		$(this).animate({
			marginTop:"-=1%",
			

		}, 100);

	},
	function(){
		$(this).animate({
			marginTop:"+=1%"
		},10);
	});
})
$(document).ready(function(){
	$('#second').hover(function(){
		$(this).animate({
			marginTop:"-=1%",

			

		}, 200);

	},
	function(){
		$(this).animate({
			marginTop:"+=1%"
		},10);
	});
})