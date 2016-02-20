$(document).ready(function(){

	$('#tweet-controls').hide();
	$('.tweet-actions').hide();
	$('.stats, .reply').hide();

	var composeHeight = $('.tweet-compose').height() + 10;

	//when textarea is clicked it expands and buttons appear. when unclicked buttons disappear and box shrinks.
	// $('#dashboard').find('.tweet-compose').on('click',function(){
	// 	$(this).css('height', '5em');
	// 	$('#tweet-controls').show();
	// }).on('blur',function(){
	// 	$(this).css('height', '')
	// 	$('#tweet-controls').hide();
	// });
	var composeHeight = $('.tweet-compose').height() + 10;
	$('.tweet-compose').on('focus', function(){
		$(this).animate({
			height: composeHeight*2
		});
		$('#tweet-controls').fadeToggle();
	});

	// For each keypress, decrease the character count
	$('.tweet-compose').keyup(function(){
		var charCount = $('.tweet-compose').val().length;
	$('#char-count').html(140 - charCount);

	//make character count under 140 turn red if it's 10 or lower
	if(140 - charCount <= 10){
			$('#char-count').css('color', 'red')
	}
	// return to normal grey color if it's 11 or higher after deleting
	else{
		$('#char-count').css('color', '#999')
	}

	// Hide tweet button if tweet is too long, show if it is acceptable length
	if (charCount > 140) {
		$('#tweet-submit').prop('disabled', true);
	}
	else {
		$('#tweet-submit').prop('disabled', false);
	}
	});

	//tweet-actions on/off when clicked
	$('body').on('mouseenter', '.tweet', function(){
		$('.tweet-actions', this).toggle();
	})
	$('body').on('mouseleave', '.tweet', function(){
		$('.tweet-actions', this).toggle();
	})
	$('body').on('click','.tweet', function(){
		$(this).find('.stats, .reply').slideToggle();
	})

	//activates reply
	$('#tweet-submit').on('click', function(){
		var newTweet = 
		'<div class="tweet">\
			<div class="content">\
				<img class="avatar" src="img/alagoon.jpg" />\
				<strong class="fullname">Zach McKimmins</strong>\
				<span class="username">@mckmillions</span>\
				<p class="tweet-text">'+ $('.tweet-compose').val() +'</p>\
				<div class="tweet-actions">\
					<ul>\
					<li><span class="icon action-reply"></span> Reply</li>\
					<li><span class="icon action-retweet"></span> Retweet</li>\
					<li><span class="icon action-favorite"></span> Favorite</li>\
					<li><span class="icon action-more"></span> More</li>\
					</ul>\
				</div>\
				<div class="stats">\
					<div class="retweets">\
						<p class="num-retweets">30</p>\
						<p>RETWEETS</p>\
					</div>\
					<div class="favorites">\
						<p class="num-favorites">6</p>\
						<p>FAVORITES</p>\
					</div>\
					<div class="users-interact">\
						<div>\
							<img src="img/alagoon.jpg" />\
							<img src="img/vklimenko.jpg" />\
						</div>\
					</div>\
					<div class="time">1:04 PM - 19 Sep 13</div>\
				</div>\
				<div class="reply">\
					<img class="avatar" src="img/alagoon.jpg" />\
					<textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea>\
				</div>\
			</div>\
		</div>'
		if($('.tweet-compose').val() !== ''){
			$('#stream').prepend(newTweet); 
		}
		$('.tweet-compose').animate({
			height: composeHeight
		});
		$('#tweet-controls').fadeToggle();
		$('.tweet-compose').val('');
		$('#char-count').text(140);
		$('.tweet-actions').hide();
		$('.stats, .reply').hide();
	});



})