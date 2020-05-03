$(document).ready(function () {
    $('.burger').click(function (event) {
        $('.burger,.footer-form,.circle').toggleClass('active');
    });
    $('.spoiler__question').click(function (event) {
        $(this).toggleClass('active').next().slideToggle(300);
    })
});
$('.block__slider').slick({
});