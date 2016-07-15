$(document).ready(function() {

  // SIDEBAR NAV
  $('.sub-nav').on('click', function() {
    $('.page-wrapper').toggleClass('isOpen');
  });
  $('.closing').on('click', function() {
    $('.page-wrapper').toggleClass('isOpen');
  });

  // ESCAPE CLOSES SIDEBAR NAV
  $(document).keyup(function(e){
    if (e.keyCode === 27) {
      $('.page-wrapper').removeClass('isOpen');
    }
  });

  // JQUERY TABS
  $("#about-me-tabs").tabs({
    collapsible: true,
    active:false
  });

});

//# sourceMappingURL=app.js.map
