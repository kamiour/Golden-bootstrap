$(document).ready(function(){

  var navItemList = document.getElementsByClassName("nav-scroll");
  var i;

  function createCallback(i) {
    return function () {
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    }
  }

  for (i = 0; i < navItemList.length; i++) {
    $(navItemList[i]).on('click', createCallback(i));
  }

})