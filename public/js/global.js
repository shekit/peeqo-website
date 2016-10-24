$(document).ready(function(){


	var video = $(".video-row")

	$("body").on('click', '.video-btn', scrollToPlace);

	function scrollToPlace(){
		$('html, body').animate({
			scrollTop: video.offset().top
		},'fast')
	}

})