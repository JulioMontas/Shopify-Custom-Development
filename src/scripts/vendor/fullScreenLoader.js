/*
################################
###### Full Screen Loader ######
###### @juliomontas       ######
################################
*/

// $(window).load(function(){
//   $('#fullScreenLoader').fadeOut(1000);
// });
//
// // Random Color
// var colorArray = ['#72c602','#1cafeb','#f1551d']
// var randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
//
// $("#fullScreenLoader").css("background",randomColor); // A class selector would work too





// click "Run" to replay

var $body = $('body');

var loading = [
    { elements: $body, properties: { width: '20%' } },
    { elements: $body, properties: { width: '30%' } },
    { elements: $body, properties: { width: '50%' } },
    { elements: $body, properties: { width: '100%' } },
    { elements: $body, properties: { height: '100%' }, options: {
      complete: function () {
        $('.wrap').velocity( 'transition.slideUpIn' );
        $('img').velocity( 'transition.flipYIn' );
        $('html').css({ background: '#fff' });
      }
    }
  }
];

$.Velocity.RunSequence(loading);
