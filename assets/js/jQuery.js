$(document).ready(function() {
    //#region HamburgerMenu
    $("#hamburger").click(function() {
        $("#mobileNav").slideToggle(500);
    });
    //#endregion

    //#region BttBtn
    var btn = $('#bttBtn');
    
    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '100');
    });
    //#endregion
    
    //#region Tabs
    $('#info div:not(:first)').hide();
  
    $('#info-nav li').click(function(e) {
      $('#info div').hide();
      $('#info-nav .current').removeClass("current");
      $(this).addClass('current');
      
      var clicked = $(this).find('a:first').attr('href');
      $('#info ' + clicked).fadeIn('fast');
      e.preventDefault();
    }).eq(0).addClass('current');
    //#endregion
    
});