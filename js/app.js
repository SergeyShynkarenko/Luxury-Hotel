$(function() {

	$('.hamburger').on('click', function() {
		$('.hamburger').toggleClass('is-active');
		$('.menu__list').toggleClass('menu__list--active');
	});
	$('.menu__list').on('click', function() {
		$('.hamburger').removeClass('is-active');
		$('.menu__list').removeClass('menu__list--active');
	});

	$('.testimonials__slider').slick({
		speed: 300,
		slidesToShow: 1,
	  slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev"><img src="images/dest/Arrow-left.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="images/dest/Arrow-right.svg" alt=""></button>',
		responsive: [
    	{
      	breakpoint: 480,
      	settings: {
        	arrows: false,
        	dots: true,
      	}
    	}
  	]
	});

	$('.card-slider').slick({
		dots: true,
		arrows: false,
		slidesToScroll: 1,
		slidesToShow: 1
	});

});


// import {TimeLineMax} from 'gsap';
// let tl = new TimeLineMax();

// tl
// 	.fromTo('.header__logo', 1, {y:-100,opacity: 0}, {y: 0,opacity: 1})


