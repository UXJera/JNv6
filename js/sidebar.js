$(document).ready(function() {
  $('.sub-nav').on('click', function() {
    $('.main-wrapper').toggleClass('isOpen');
  });
  $('.closing').on('click', function() {
    $('.main-wrapper').toggleClass('isOpen');
  });
});
