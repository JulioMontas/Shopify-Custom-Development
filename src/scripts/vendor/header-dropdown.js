// For the Shop Button in Desktop
$('.shop-dropdown').click(function() {
    $('.header-dropdown').slideToggle("slow");
});

$('.header-dropdown').mouseleave(function() {
    $('.header-dropdown').slideToggle("slow");
});

// For the Menu Button in Mobile
$('.menu-dropdown').click(function() {
    $('.phone-navigation').slideToggle("slow");
});

// For the Menu Button in Mobile
$('.nav-shop-dropdown').click(function() {
    $('.nav-header-dropdown').slideToggle("slow");
});

// Search Dropdown
$('.SearchDropdown').click(function() {
    $('.search-navigation').slideToggle("slow");
});
