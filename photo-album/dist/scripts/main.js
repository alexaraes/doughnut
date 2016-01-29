$(document).on('ready', function() {

		$('.page').hide();
		$('.zoom').hide();
		$('#home').show();

		$home = $('#home a')
		$albums = $('.navbar a')
		$photo = $('.img a')
		$backBtn = $('.zoom a')

		$home.click(directory)
		$albums.click(directory)
		$photo.click(directory)
		$backBtn.click(directory)

	function directory(e) {
		
		var href = $(this).attr('href');
		var $gallery = $(href);

		$('.page').hide();
		$('.zoom').hide();
		$gallery.show();
	};
});