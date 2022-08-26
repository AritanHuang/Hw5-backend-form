$(document).ready(function () {
    $('.nav li').click(function (e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
    });
});