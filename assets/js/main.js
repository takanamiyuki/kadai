/* globals $ */
var swiper = new Swiper('.swiper', {
    lope: true,
    autoplay:{
    delay: 5000,
    },
    speed: 1000,
});

var swiper = new Swiper('.swiper_sp', {
    lope: true,
    autoplay:{
    delay: 5000,
    },
    speed: 1000,
});

$('.hamburger-button').click(function(){
    if ($('.hamburger_nav').is(':visible')) {
        $('.hamburger_nav').slideUp();
    } else {
        $('.hamburger_nav').slideDown();
    }
});

$('.service_img_r').waypoint({
    handler: function(direction) {
        if (direction === 'down') {
            console.log('up');
            $(this.element).addClass('animate__fadeInUp');
            this.destroy();
        }
    },
    offset: '50%',
});

$('.service_img_l').waypoint({
    handler: function(direction) {
        if (direction === 'down') {
            console.log('up');
            $(this.element).addClass('animate__fadeInUp');
            this.destroy();
        }
    },
    offset: '50%',
});

$(".question dt").on("click", function(e) {
    console.log('open');
    $(this).toggleClass("open");
    $(this).next().slideToggle();
});
