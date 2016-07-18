$(document).ready(function() {
  $('.sub-nav').on('click', function() {
    $('.page-wrapper').toggleClass('isOpen');

  });
  $('.closing').on('click', function() {
    $('.page-wrapper').toggleClass('isOpen');
  });
});
