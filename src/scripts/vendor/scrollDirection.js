console.log("Design & Build by @JulioMontas");

// Landing Page, Intro
$(document).ready(function (){
    $(".slide-arrow-btn").click(function (){
        $('html, body').animate({
            scrollTop: $(".latest-product").offset().top
        }, 700);
    });
});
