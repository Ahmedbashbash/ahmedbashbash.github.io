$(function(){
    var typed = new Typed('span.txt-rotate', {
        strings: ["I'm a Web Developer", "I'm a Desktop Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        fadeOut: false,
        smartBackspace: true,
        loop: true
    });

    //===== Sticky

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".header_navbar").removeClass("sticky");
        } else {
            $(".header_navbar").addClass("sticky");
        }
    });

    
    var scrollLink = $('.page-scroll');
    // Active link switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            var sectionOffset = $(this.hash).offset().top - 73;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });


    $(".navbar-nav a").on('click', function () {
      $(".navbar-collapse").removeClass("show");
    });

    $(".navbar-toggler").on('click', function () {
      $(this).toggleClass("active");
    });

    $(".navbar-nav a").on('click', function () {
      $(".navbar-toggler").removeClass('active');
    });


    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });


    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        items: 2,
        autoWidth: false,
        center: false,
        mergeFit: true,
        responsive : {
            0: {
                items: 1,
                nav: false
            },
            576: {
                items: 1,
                nav: false
            },
            768: {
                items: 2,
                nav: false
            }
        }
    })

});

$(document).ready(function() {
    $('.projects-wrapper').isotope({
        filter: '*',
        layoutMode: 'masonry'
    });

    $('.list-filter a').click(function() {
        var selector = $(this).attr('data-filter');
        $('.list-filter a').removeClass('active');
        $(this).addClass('active');
        $('.projects-wrapper').isotope({
            filter: selector
        });
        return false;
    });

    $('.popup-image').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        gallery: {
            enabled: true,
            navigateByImgClick: true
        }
    });

});
