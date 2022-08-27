$(document).ready(function () {
    $('.nav li').click(function (e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
    });
    //all選單點擊特效
    $('.list-group li').click(function (e) {
        e.preventDefault();
        $(this).addClass('show').siblings().removeClass('show');
    });
    //點擊reply出現ckeditor套件
    $('.btn-reply').click(function (e) {
        e.preventDefault();
        $('.reply,.assignment-btn').addClass('d-none');
        $('.card-content').removeClass('b-bottom');
        $('.ckeditor').removeClass('d-none');
    });
    //點擊cancel隱藏ckeditor套件
    $('.btn-cancel').click(function (e) {
        e.preventDefault();
        $('.reply,.assignment-btn').removeClass('d-none');
        $('.card-content').addClass('b-bottom');
        $('.ckeditor').addClass('d-none');
    });
});
//ckEditor套件
ClassicEditor
    .create(document.querySelector('#editor'))
    .catch(error => {
        console.error(error);
    });
