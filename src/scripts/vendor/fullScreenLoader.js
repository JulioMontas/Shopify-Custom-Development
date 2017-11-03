/*
################################
###### Full Screen Loader ######
###### @juliomontas       ######
################################
*/

$(window).load(function() {
  $('.fullScreenLoader').fadeOut(1000).hide(0,function() {
       $(this).html(changingstring).fadeIn(1000);
   });
})



// $(window).load(function(){
//   $('#fullScreenLoader').fadeOut(1000);
// });
//
// // Random Color
// var colorArray = ['#72c602','#1cafeb','#f1551d']
// var randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
//
// $("#fullScreenLoader").css("background",randomColor); // A class selector would work too
