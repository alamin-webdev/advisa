
    $(document).ready(function(){
      $('.myslider').slick({
        dots:true,
        autoplay:true,
        arrows:false,
        
      });
    });
    $('.navigation_menu').hover(
      function(){ $(this).addClass('active') },
      function(){ $(this).removeClass('active') }
    )
    
    $('.navbar-toggler').click(function(){
      $('.navbar-collapse').slideUp();
    })
/* ------------------------------------ */	
/*  MTD Menu
/* ------------------------------------ */	
$(document).ready(function(){
  
  // Menu Add Class Left
    $("#hamburger-icon").click(function(){
    $(".slide-menu").toggleClass("slide-left");
  });
  
  //  Menu Add Class Close 		
  $('.slide-close-button button, .mdl-layout__obfuscator').click(function(){
      $(".slide-menu").removeClass("slide-left");
  });
  // Menu Dropdown menu active
    $(".dropdownmenu").click(function(){
    $(".sub-menu").toggleClass("active"),fadeIn(46000);
  });
  });