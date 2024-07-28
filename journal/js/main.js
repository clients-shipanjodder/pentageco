$ = jQuery.noConflict();

$.fn.isOnScreen = function(){
    var win = $(window);
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    return (!(viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};

jQuery(document).ready(function(){

    $('[data-fancybox="gallery"]').fancybox({
        thumbs : {
            autoStart : true
        }
    });
    $('.menu-link').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('close');
        $('#site-navigation').toggleClass('active');
    });

});

$(window).on("load",function(){

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        asNavFor: '.slider-for',
        arrows: true,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        variableWidth: true,
        cssEase: 'cubic-bezier(1,-0.54,.54,.99)',
        prevArrow: '<div class="slick-prev-custom"><img class="slick-image-nav" src="'+themePath+'/images/arrow-left.svg" alt=""></div>',
        nextArrow: '<div class="slick-next-custom"><img class="slick-image-nav" src="'+themePath+'/images/arrow-right.svg" alt=""></div>'
    });
    $('.slider-nav-active-projects').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        variableWidth: true,
        cssEase: 'cubic-bezier(1,-0.54,.54,.99)',
        prevArrow: '<div class="slick-prev-custom"><img class="slick-image-nav" src="'+themePath+'/images/arrow-left.svg" alt=""></div>',
        nextArrow: '<div class="slick-next-custom"><img class="slick-image-nav" src="'+themePath+'/images/arrow-right.svg" alt=""></div>'
    });
    $('.slider-nav-completed-projects').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        variableWidth: true,
        cssEase: 'cubic-bezier(1,-0.54,.54,.99)',
        prevArrow: '<div class="slick-prev-custom"><img class="slick-image-nav" src="'+themePath+'/images/arrow-left.svg" alt=""></div>',
        nextArrow: '<div class="slick-next-custom"><img class="slick-image-nav" src="'+themePath+'/images/arrow-right.svg" alt=""></div>'
    });
    $('.single-project-slider-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.single-project-slider-small'
    });
    $('.single-project-slider-small').slick({
        // initialSlide: 3,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        asNavFor: '.single-project-slider-big',
        arrows: true,
        customPaging: 0,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        // variableWidth: true,
        cssEase: 'cubic-bezier(1,-0.54,.54,.99)',
        prevArrow: '<div class="slick-prev-custom"><img class="slick-image-nav" src="'+themePath+'/images/arrow-left.svg" alt=""></div>',
        nextArrow: '<div class="slick-next-custom"><img class="slick-image-nav" src="'+themePath+'/images/arrow-right.svg" alt=""></div>'
    });

    setTimeout(function(){
        $('.loader-top img').addClass('active');
        $('.loader-bottom img').addClass('active');
        //
    },200);
    setTimeout(function(){
        $('.loader-top').addClass('active');
        $('.loader-bottom').addClass('active');
        //
    },1200);
    setTimeout(function(){
        $(".loader-wrap").fadeOut();
        //
    },2000);

});

$(window).on('resize', function(e) {

});
