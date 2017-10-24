// Animation
$(document).ready(function (){
  $('.cool').addClass("hidden").viewportChecker({
      classToAdd: 'visible animated fadeIn',
      offset: 100,
      repeat: true
  });
});
