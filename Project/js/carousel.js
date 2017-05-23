
//设置轮播图自动播放
$('#myCarousel').carousel({
	interval:3000
});
/*$(function(){
	// console.log($('.carousel-inner img').height()); //打印图片的高度
	//设置翻滚箭头位置居中
	$('.carousel-control').css('line-height', $('.carousel-inner img').height() + 'px');
	$(window).resize(function(){
		// $('.carousel-control').css('line-height', $('.carousel-inner img').height() + 'px');
		var $height = $('.carousel-inner img').eq(0).height() ||
					  $('.carousel-inner img').eq(1).height() ||
					  $('.carousel-inner img').eq(2).height(); 
		$('.carousel-control').css('line-height', $height + 'px');
	})
})*/