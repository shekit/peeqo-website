$(document).ready(function(){


	var videoHeight = $("video").height()

	$("video").bind("loadedmetadata", function(){
		var height = this.videoHeight;
		console.log(height)

		$(".top-intro").css({"min-height":height})
	})

	$("body").on('click', '.video-btn', scrollToPlace);

	

	function scrollToPlace(){
		$('html, body').animate({
			scrollTop: video.offset().top
		},'fast')
	}

})