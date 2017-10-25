// Animation
$('.animationFadeIn').addClass("hidden").viewportChecker({
  classToAdd: 'visible animated fadeIn',
  offset: 100,
  repeat: true
});

$('.animationZoomIn').addClass("hidden").viewportChecker({
  classToAdd: 'visible animated zoomIn',
  offset: 100,
  repeat: true
});

$('.animationLeft').addClass("hidden").viewportChecker({
  classToAdd: 'visible animated bounceInLeft',
  offset: 100,
  repeat: true
});

$('.animationUp').addClass("hidden").viewportChecker({
  classToAdd: 'visible animated bounceInUp',
  offset: 100,
  repeat: true
});

$('.animationRight').addClass("hidden").viewportChecker({
  classToAdd: 'visible animated bounceInRight',
  offset: 100,
  repeat: true
});

$('.animationBounce').addClass("hidden").viewportChecker({
  classToAdd: 'visible animated swing',
  offset: 100,
  repeat: true
});
