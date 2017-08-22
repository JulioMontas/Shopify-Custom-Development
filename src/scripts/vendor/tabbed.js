$( document ).ready(function() {
//tabbed content in homepage - featured product
$('ul.tabs-one li').click(function() {
    var tab_id = $(this).attr('data-tab');
    $('ul.tabs-one li').removeClass('current-one');
    $('.tab-content-one').removeClass('current-one');
    $(this).addClass('current-one');
    $("#" + tab_id).addClass('current-one');
    // $('.list-of-four').get(0).slick.setPosition();
});
$('ul.tabs-two li').click(function() {
    var tab_id = $(this).attr('data-tab');
    $('ul.tabs-two li').removeClass('current-two');
    $('.tab-content-two').removeClass('current-two');
    $(this).addClass('current-two');
    $("#" + tab_id).addClass('current-two');
});
$('ul.tabs-three li').click(function() {
    var tab_id = $(this).attr('data-tab');
    $('ul.tabs-three li').removeClass('current-three');
    $('.tab-content-three').removeClass('current-three');
    $(this).addClass('current-three');
    $("#" + tab_id).addClass('current-three');
});
$('ul.tabs-four li').click(function() {
    var tab_id = $(this).attr('data-tab');
    $('ul.tabs-four li').removeClass('current-four');
    $('.tab-content-four').removeClass('current-four');
    $(this).addClass('current-four');
    $("#" + tab_id).addClass('current-four');
});
$('ul.tabs-five li').click(function() {
    var tab_id = $(this).attr('data-tab');
    $('ul.tabs-five li').removeClass('current-five');
    $('.tab-content-five').removeClass('current-five');
    $(this).addClass('current-five');
    $("#" + tab_id).addClass('current-five');
});
$('ul.tabs-six li').click(function() {
    var tab_id = $(this).attr('data-tab');
    $('ul.tabs-six li').removeClass('current-six');
    $('.tab-content-six').removeClass('current-six');
    $(this).addClass('current-six');
    $("#" + tab_id).addClass('current-six');
});
$('ul.tabs-seven li').click(function() {
    var tab_id = $(this).attr('data-tab');
    $('ul.tabs-seven li').removeClass('current-seven');
    $('.tab-content-seven').removeClass('current-seven');
    $(this).addClass('current-seven');
    $("#" + tab_id).addClass('current-seven');
});
if (window.location.hash.length > 0) {
    var hash_str = window.location.hash.split("#")[1];
    $('.tab-link[data-tab=' + hash_str + ']').click();
}
});
