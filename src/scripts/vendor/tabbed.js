$( document ).ready(function() {
//tabbed content in homepage - featured product
$('ul.tabs li').click(function() {
    var tab_id = $(this).attr('data-tab');
    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');
    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
    $('.list-of-four').get(0).slick.setPosition();
    $('.list-of-four').get(1).slick.setPosition();
    $('.list-of-four').get(2).slick.setPosition();
    $('.list-of-four').get(3).slick.setPosition();
    $('.list-of-four').get(4).slick.setPosition();
    $('.list-of-four').get(5).slick.setPosition();
    $('.list-of-four').get(6).slick.setPosition();
    $('.list-of-four').get(7).slick.setPosition();
    $('.list-of-four').get(8).slick.setPosition();
    $('.list-of-four').get(9).slick.setPosition();
    $('.list-of-four').get(10).slick.setPosition();
    $('.list-of-four').get(11).slick.setPosition();
    $('.list-of-four').get(12).slick.setPosition();
    $('.list-of-four').get(13).slick.setPosition();
    $('.list-of-four').get(14).slick.setPosition();
    $('.list-of-four').get(15).slick.setPosition();
    $('.list-of-four').get(16).slick.setPosition();
    $('.list-of-four').get(17).slick.setPosition();
    $('.list-of-four').get(18).slick.setPosition();
    $('.list-of-four').get(19).slick.setPosition();
    $('.list-of-four').get(20).slick.setPosition();
    $('.list-of-four').get(30).slick.setPosition();
    $('.list-of-four').get(31).slick.setPosition();
    $('.list-of-four').get(32).slick.setPosition();
    $('.list-of-four').get(33).slick.setPosition();
    $('.list-of-four').get(34).slick.setPosition();
    $('.list-of-four').get(35).slick.setPosition();
    $('.list-of-four').get(36).slick.setPosition();
    $('.list-of-four').get(37).slick.setPosition();
    $('.list-of-four').get(38).slick.setPosition();
    $('.list-of-four').get(39).slick.setPosition();
    $('.list-of-four').get(40).slick.setPosition();
});
if (window.location.hash.length > 0) {
    var hash_str = window.location.hash.split("#")[1];
    $('.tab-link[data-tab=' + hash_str + ']').click();
}
});
