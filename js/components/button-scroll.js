$(document).ready(function(){

  $('.button-scroll').on('click', function () {
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });

})