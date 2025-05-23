// HTML document is loaded
jQuery(window).on( "load", function() {
  "use strict";

  // autoheight fucntion
  autoheight();
  autoheight1();
  autoheight2();

  // var preloader
  var loader = jQuery( '#preloader' );
  var bgpreloader = jQuery( '.loader' );

  // var navigation
  var menumobile = jQuery( '#main-menu' );
  var navdefault = jQuery( '.navbar-default-white' );
  var Navactive = jQuery( "nav a" );
  var subnav = jQuery( ".subnav" );

  // side gallery
  var sidemenu = jQuery( '#showside' );
  var sideclose = jQuery( '#closesidegalery, #bgsidegalery' );
  var sidegallery = jQuery('#sidegalery');
  var closeside = $('#closesidegalery');

  // var navigation
  var menublock = jQuery('#menu-block');
  var navicon = jQuery('#nav-icon');
  var navclasmenu = jQuery('.nav-icon')
  var dropdwown = jQuery(".dropdown-container");
  var blockmain = jQuery(".block-main");
  var menuline = jQuery(".menu-line, .menu-line1, .menu-line2");
  

  // start function fadeOut preloader when condition window has been load
  loader.fadeOut( 'slow', function() {
      "use strict";

      // opening slideup
      setTimeout(function() {
        bgpreloader.hide("slide", { direction: "left" }, 300);
      }, 200);

      // animated transition & scroll onStep
      onStep();

      // stick navbar
      navdefault.sticky();

      // language
      var $langContainer = $('#lang-select');
      var $langItems = $('#lang-select .language-el');
      var $langActive = $('#lang-select .language-active');
      let activeLang = 'en';
      $($langContainer).click(function() {
        $('#listlang').slideToggle();
      })
      $($langItems).each(function() {
        $(this).click(switchLang);
      });
      function switchLang() {
        activeLang = $(this).attr('data-lang');
        $($langItems).each(function(i, el) {
          var attr = $(el).attr('data-lang');
          var text = $(el).text();

          $(el).removeClass('selected');  

          if (attr === activeLang) {
            $(el).addClass('selected');
            $($langActive).text(text);
          }
        })
      }

  });
  // end function


  // responsive part
  if ( jQuery( window ).width() < 1200 ) {
  // responsive part tap menu
  jQuery('.menu-item span.span-drop, .parent-menu span.span-drop, li span.span-drop')
    .on('click', function(e){
      e.preventDefault();  
      var $ul = $(this).closest('.menu-item, .parent-menu, #menu-center ul li').find('ul');
      $ul.slideToggle();
    }); 

  // right menu mobile
  var shopbags = jQuery('#shopbags');
  var searchmenu = jQuery('#s-search');
  var showmenu = jQuery("#showmobile");
  var mainmenumobile = jQuery('#main-menu');
  var bgblock = jQuery('#bgblock');
  jQuery('.c-bags').on("click", function(e) {
      shopbags.show();
      searchmenu.hide();
      mainmenumobile.hide();
      bgblock.show();
    });
  jQuery('.c-search').on("click", function(e) {
      searchmenu.show();
      shopbags.hide();
      mainmenumobile.hide();
      bgblock.show();
    });
  showmenu.on("click", function(e) {
      $('#main-menu').slideToggle();
      shopbags.hide();
      searchmenu.hide();
      bgblock.hide();
    });
  bgblock.on("click", function(e) {
    $(this).hide();
    shopbags.hide();
    searchmenu.hide();
    mainmenumobile.hide();
    });

  }

  // menu mobile
  navclasmenu.on("click", function(e) {
      $(this).toggleClass( 'show' );
      menumobile.slideToggle('fast');
      $('.menu-right').slideToggle('fast');
    });

  

  // side gallery
  sideclose.on("click", function(e) {
      sidegallery.removeClass('show');
      closeside.removeClass('show');
      sideclose.fadeOut();
    });
  sidemenu.on("click", function(e) {
      sidegallery.addClass('show');
      closeside.addClass('show');
      sideclose.fadeIn();
    });


 });
// HTML document is loaded end

$(document).ready(function() {

  // animsition
  $('.animsition-overlay').animsition({
    inClass: 'fade-in',
    outClass: 'fade-in',
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body'
  })
  .one('animsition.inStart',function(){
    $('body').removeClass('bg-init');
    //console.log('event -> inStart');
  })
  .one('animsition.inEnd',function(){
    $('.target', this).html('Callback: End');
    //console.log('event -> inEnd');
  })
  .one('animsition.outStart',function(){
    //console.log('event -> outStart');
  })
  .one('animsition.outEnd',function(){
    $('.target', this).html('Callback: End');
    //console.log('event -> outEnd');
  });

  // set mansory gallery max width
  var maingall = jQuery('#w-gallery-container');
  if (maingall.length) {
  var masonry = new Macy({
          container: '#w-gallery-container',
          trueOrder: false,
          waitForImages: true,
          debug: true,
          columns: 3,
          breakAt: {
            1200: {
              columns: 3,
            },
            940: {
              columns: 2,
            },
            700: {
              columns: 1,
            },
            400: {
              columns: 1
            }
          }
        });

  } else {
     //nothing happen
  }

    // set mansory gallery column
    var maingallcolumn = jQuery('#w-gallery-column');
    if (maingallcolumn.length) {
    var masonry = new Macy({
            container: '#w-gallery-column',
            trueOrder: false,
            waitForImages: false,
            margin: 0,
            columns: 4,
            breakAt: {
              1200: {
                columns: 4,
              },
              940: {
                columns: 3,
              },
              700: {
                columns: 2,
              },
              400: {
                columns: 1
              }
            }
          });

    } else {
       //nothing happen
    }

    // set mansory gallery column 4
    var maingallcolumn = jQuery('#w-gallery-column-4');
    if (maingallcolumn.length) {
    var masonry = new Macy({
            container: '#w-gallery-column-4',
            trueOrder: false,
            waitForImages: false,
            margin: 0,
            columns: 4,
            breakAt: {
              1200: {
                columns: 3,
              },
              940: {
                columns: 2,
              },
              700: {
                columns: 1,
              },
              400: {
                columns: 1
              }
            }
          });

    } else {
       //nothing happen
    }

    // projects width gallery
    var $Wcontainerpro = jQuery( '.w-gallery-container' );
    if ($Wcontainerpro.length) {
    $Wcontainerpro.isotope( {
        itemSelector: '.w-gallery',
        filter: '*'
    } );
    var $filterCount = $('.numimg');
    var iso = $Wcontainerpro.data('isotope');
    jQuery( '.filt-projects-w' ).on( 'click', function( e ) {
            e.preventDefault();
            var $this = jQuery( this );
            if ( $this.hasClass( 'selected' ) ) {
                return false;
            }
            var $optionSetpro = $this.parents();
            $optionSetpro.find( '.selected' ).removeClass( 'selected' );
            $this.addClass( 'selected' );           
            var selector = $( this ).attr( 'data-project' );
            $Wcontainerpro.isotope( { filter: selector, } );
            $Wcontainerpro.isotope({ filter: selector });
            updateFilterCount();
            return false;
        });
        function updateFilterCount() {
          $filterCount.text( iso.filteredItems.length );
        }
        updateFilterCount();

      // layout Isotope after each image loads
      $Wcontainerpro.imagesLoaded().progress( function() {
      $Wcontainerpro.isotope('layout');
      });
      // count 
      var numItems = $('.w-gallery').length;
      $('.numalbm').text(numItems); 

      } else {
       //nothing happen
    }

    // ligtgallery gallery
    var lGgall = jQuery('.w-gallery-container');
    if (lGgall.length) {
        $('.w-gallery-container').lightGallery({
            fullScreen: true,
            thumbnail: false
        }); 
    } else {
       //nothing happen
    }


        // revolution slider
        var revapi;
        revapi = jQuery( '#revolution-slider-half' )
            .revolution( {
                delay:9000,
                startwidth:960,
                startheight:630,
                onHoverStop: "on",
                thumbWidth: 100,
                thumbHeight: 50,
                thumbAmount: 3,
                touchenabled: "on",
                stopAtSlide: -1,
                stopAfterLoops: -1,
                touchenabled: "on",
                navigationType:"none",
                navigationArrows:"solo",
                navigationStyle:"preview1",
                touchenabled:"on",
                onHoverStop:"on",
                swipe_velocity: 0.7,
                swipe_min_touches: 1,
                swipe_max_touches: 1,
                drag_block_vertical: false,                                 
                keyboardNavigation:"on",
                navigationHAlign:"center",
                navigationVAlign:"bottom",
                navigationHOffset:0,
                navigationVOffset:20,
                soloArrowLeftHalign:"left",
                soloArrowLeftValign:"center",
                soloArrowLeftHOffset:20,
                soloArrowLeftVOffset:0,
                soloArrowRightHalign:"right",
                soloArrowRightValign:"center",
                soloArrowRightHOffset:20,
                soloArrowRightVOffset:0,
                dottedOverlay: "",
                fullWidth: "on",
                stopAfterLoops:0,
                stopAtSlide:1,
                shadow: 0
            } );

            revapi = jQuery( '#revolution-slider-full' )
            .revolution( {
                delay:9000,
                startwidth:960,
                startheight:630,
                onHoverStop: "on",
                thumbWidth: 100,
                thumbHeight: 50,
                thumbAmount: 3,
                touchenabled: "on",
                stopAtSlide: -1,
                stopAfterLoops: -1,
                touchenabled: "on",
                navigationType:"none",
                navigationArrows:"solo",
                navigationStyle:"preview1",
                touchenabled:"on",
                onHoverStop:"on",
                swipe_velocity: 0.7,
                swipe_min_touches: 1,
                swipe_max_touches: 1,
                drag_block_vertical: false,                                 
                keyboardNavigation:"on",
                navigationHAlign:"center",
                navigationVAlign:"bottom",
                navigationHOffset:0,
                navigationVOffset:20,
                soloArrowLeftHalign:"left",
                soloArrowLeftValign:"center",
                soloArrowLeftHOffset:20,
                soloArrowLeftVOffset:0,
                soloArrowRightHalign:"right",
                soloArrowRightValign:"center",
                soloArrowRightHOffset:20,
                soloArrowRightVOffset:0,
                dottedOverlay: "",
                fullWidth: "on",
                fullScreen:"on",
                stopAfterLoops:0,
                stopAtSlide:1,
                shadow: 0
            } );

            // revolution slider ver 2
            var revext=jQuery;
            var revapi;
            revext(document).ready(function() {
                if(revext("#rev-commerce").revolution == undefined){
                    revslider_showDoubleJqueryError("#rev-commerce");
                }else{
                        revapi = revext("#rev-commerce").show().revolution({
                        sliderType:"standard",
                        jsFileLocation:"revolution/js/",
                        sliderLayout:"auto",
                        dottedOverlay:"none",
                        delay:9000,
                        navigation: {
                        keyboardNavigation:"off",
                        keyboard_direction: "horizontal",
                        mouseScrollNavigation:"off",
                        mouseScrollReverse:"default",
                        onHoverStop:"on",
                        touch:{
                        touchenabled:"on",
                        swipe_threshold: 75,
                        swipe_min_touches: 50,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                        }
                        ,
                        arrows: {
                        style:"gyges",
                        enable:true,
                        hide_onmobile:false,
                        hide_onleave:false,
                        tmp:'',
                        left: {
                        h_align:"right",
                        v_align:"bottom",
                        h_offset:160,
                        v_offset:0
                        },
                        right: {
                        h_align:"right",
                        v_align:"bottom",
                        h_offset:80,
                        v_offset:0
                        }
                        }
                        },
                        responsiveLevels:[1240,1024,778,480],
                        visibilityLevels:[1240,1024,778,480],
                        gridwidth:[1200,1024,778,480],
                        gridheight:[600,600,600,600],
                        lazyType:"single",
                        parallax: {
                        type:"scroll",
                        origo:"slidercenter",
                        speed:400,
                        levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
                        type:"scroll",
                        },
                        shadow:0,
                        spinner:"off",
                        stopLoop:"off",
                        stopAfterLoops:-1,
                        stopAtSlide:-1,
                        shuffle:"off",
                        autoHeight:"off",
                        disableProgressBar:"on",
                        hideThumbsOnMobile:"off",
                        hideSliderAtLimit:0,
                        hideCaptionAtLimit:0,
                        hideAllCaptionAtLilmit:0,
                        debugMode:false,
                        fallbacks: {
                        simplifyAll:"off",
                        nextSlideOnWindowFocus:"off",
                        disableFocusListener:false,
                        }
                      });
                    }
                });


    // owlCarousel projects
    $("#owl-projects").owlCarousel({
    margin:0,
    responsiveClass:true,
    dots : false,
    responsive:{
    0:{
        items:1,
        nav:true,
        stagePadding: 0
    },
    500:{
        items:1,
        nav:true,
        stagePadding: 0
    },
    600:{
        items:2,
        nav:true,
        loop:false,
        stagePadding: 0
    },
    800:{
        items:3,
        nav:true,
        loop:false,
        stagePadding: 0
    },
    1024:{
        items:4,
        nav:true,
        loop:false,
        stagePadding: 0
     }
    },
    nav:true,
    navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>']
    });

    // owlCarousel testy
    $("#owl-testimony").owlCarousel({
    margin:30,
    responsiveClass: true,
    dots : true,
    responsive:{
    0:{
        items:1,
        stagePadding: 0
    },
    500:{
        items:1,
        stagePadding: 0
    },
    600:{
        items:2,
        loop:false,
        stagePadding: 0
    },
    800:{
        items:2,
        loop:false,
        stagePadding: 0
    },
    1024:{
        items:3,
        loop:false,
        stagePadding: 0
     }
    },
    nav:false,
    navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>']
    });

    // owlCarousel services
    $(".owl-services").owlCarousel({
    margin:0,
    responsiveClass:true,
    dots : false,
    responsive:{
    0:{
        items:1,
        nav:true,
        stagePadding: 0
    },
    500:{
        items:1,
        nav:true,
        stagePadding: 0
    },
    600:{
        items:1,
        nav:true,
        loop:false,
        stagePadding: 0
    },
    800:{
        items:1,
        nav:true,
        loop:false,
        stagePadding: 0
    },
    1024:{
        items:1,
        nav:true,
        loop:false,
        stagePadding: 0
     }
    },
    nav:true,
    navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>']
    });

    // owl team
    $("#owl-team").owlCarousel({
    margin:0,
    responsiveClass:true,
    dots : false,
    responsive:{
    0:{
        items:1,
        nav:true,
        stagePadding: 0
    },
    500:{
        items:1,
        nav:true,
        stagePadding: 0
    },
    600:{
        items:2,
        nav:true,
        loop:false,
        stagePadding: 0
    },
    800:{
        items:3,
        nav:true,
        loop:false,
        stagePadding: 0
    },
    1024:{
        items:4,
        nav:true,
        loop:false,
        stagePadding: 0
     }
    },
    nav:true,
    navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>']
    });

    
    // owlCarousel logo
    $("#owl-logo").owlCarousel({
    margin:60,
    responsiveClass:true,
    dots : false,
    responsive:{
    0:{
        items:1,
        nav:true,
        stagePadding: 0
    },
    320:{
        items:1,
        nav:false,
        stagePadding: 0
    },
    414:{
        items:2,
        nav:false,
        loop:false,
        stagePadding: 0
    },
    800:{
        items:3,
        nav:false,
        loop:false,
        stagePadding: 0
    },
    1024:{
        items:4,
        nav:false,
        loop:false,
        stagePadding: 0
     }
    },
    nav:true,
    navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>']
    });


});