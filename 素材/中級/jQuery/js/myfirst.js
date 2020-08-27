$(function() {
  $('h1').css('color', 'red');

  // Tab Menu
  $('#tab-menu > li > a').click( function(){
		var pageNum = $(this).attr('data-page');
		var pageId  = "#tab" + pageNum;

		$('div.tab-page').hide();
		$(pageId).show();
  } );

  // Accordion Menu
  $("#mainMenu > li > a").on("click", function() {
      var speed = "fast";
      var parent = $(this).parent("li");

      $(this).next('.subMenu').slideToggle(speed);
      parent.prevAll().children(".subMenu").hide(speed);
      parent.nextAll().children('.subMenu').hide(speed);
  });
    
  // Smooth Scroll
  $('a[href^=#]').click(function() {
      var href   = $(this).attr("href");
      var target = $(href);
      var posTop = target.offset().top;

      $('body,html').animate({ scrollTop : posTop }, 300, 'swing');
      return false;
  });

});