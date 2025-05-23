(function ($) {
"use strict";  
    
/* Sticky Menu */
var windows = $(window);
    var stick = $(".header-sticky");
    var stickAnchor = $(".navlist");
    var stickIcon = $(".header-social ul li a");
	windows.on('scroll',function() {    
		var scroll = windows.scrollTop();
		if (scroll < 1) {
			stick.removeClass("sticky");
            stickAnchor.removeClass("navlist_anchor");
            stickIcon.removeClass("fontIicon");
		}else{
			stick.addClass("sticky");
            stickAnchor.addClass("navlist_anchor");
            stickIcon.addClass("fontIicon");
		}
	}); 

    
/*  jQuery MeanMenu */
	$('.main-menu nav').meanmenu({
		meanScreenWidth: "767",
		meanMenuContainer: '.mobile-menu'
	});  
    
/* last 2 li child add class */
$('ul.menu>li').slice(-2).addClass('last-elements');
       
/* magnificPopup image popup */
$('.img-popup').magnificPopup({
	type: 'image',
	gallery:{
		enabled:true
    }
});
    
/*  Isotope */
    
	$('.grid').imagesLoaded( function() {
		// filter items on button click
		$('.portfolio-menu').on( 'click', 'button', function() {
		  var filterValue = $(this).attr('data-filter');
		  $grid.isotope({ filter: filterValue });
		});	

		// init Isotope
		var $grid = $('.grid').isotope({
		  itemSelector: '.grid-item',
		  percentPosition: true,
		  masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth: '.grid-item'
		  }
		});
	});
    
/* counterUp */
$('.counter').counterUp({
    delay: 10,
    time: 1000
});
   
$('.slider-owl').owlCarousel({
    loop:true,
    nav:true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 2500,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        768:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
    
$('.partner-owl').owlCarousel({
    loop:true,
    nav:true,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        },
        1000:{
            items:5
        }
    }
});  
    
$('.testimonial-owl').owlCarousel({
    loop:true,
    nav:true,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1000:{
            items:2
        }
    }
});

$('.price-owl').owlCarousel({
    loop:true,
    nav:true,
    autoplay:true,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
   
/* Wow js active */
    new WOW().init();

})(jQuery);	