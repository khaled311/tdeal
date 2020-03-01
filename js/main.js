$(function () {

    // Toggle open
    $(".sideNav li").on("click", function (e) {
        $(this).find("ul").slideToggle();
        // $(this).siblings().find(".drop").slideUp();
        $(this).toggleClass("open");
        // $(this).siblings().find("i").removeClass("open");
        e.stopPropagation();
    });


    // open Side Nav
    $(".menuTriger").on("click", function () {
        $(".sideNav").toggleClass("open");
        $(".navover").toggleClass("open");
        $("body").css("overflow", "hidden");
    });


    // Close Side Nav
    $(".navover, .close1").on("click", function () {
        if ($(".sideNav").hasClass("open")) {
            $(".navover").removeClass("open");
            $(".sideNav").toggleClass("open");
            $("body").css("overflow", "auto");
        }
    });

    // Search

    $(".searchTriger").on("click", function () {
        $("header .search").toggleClass("open");
        $(".navover").toggleClass("open");
        $("body").css("overflow", "hidden");
    });

    $(".navover").on("click", function () {
        $("body").css("overflow", "auto");
    });
    $(".navover, .search > i").on("click", function () {
        $("header .search").removeClass("open");
        $(".navover").removeClass("open");
    })

    // Search

    // Main Slider
    $(".main-slider .owl-carousel").owlCarousel({
        // autoplay: true,
        rtl: true,
        loop: true,
        nav: false,
        items: 1,
        dots: true
    });

    // products Slider
    $('.specials .owl-carousel').owlCarousel({
        items: 6,
        margin: 11,
        rtl: $('html').attr('dir') == 'rtl',
        loop: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
                dots: true,
            },
            500: {
                items: 2,
                nav: false,
                dots: true,

            },
            768: {
                items: 3,
            },
            900: {
                items: 4,
            },
            1100: {
                items: 5,
            },
            1200: {
                items: 6
            }
        }
    });

    // Categories Slider
    $('.categories .owl-carousel').owlCarousel({
        items: 4,
        margin: 13,
        rtl: $('html').attr('dir') == 'rtl',
        loop: true,
        nav: false,
        dots: false,
        autoWidth: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
            },
            500: {
                items: 2,
                nav: false,
                dots: true,

            },
            768: {
                items: 3,
            },
            900: {
                items: 4,
            },
            1100: {
                items: 4,
            },
            1200: {
                items: 4
            }
        }
    });

    // footer collapse 
    $('.foot-collapse .om-head').on('click', function () {
        if ($(window).width() <= 991) {
            $(this).parent().find('.foot-collapse-ul').slideToggle(350);
            $(this).toggleClass('active');
        }
    });



    // Confirm Offer
    $(".TriGGer").on("click", function (e) {
        e.preventDefault();
        $(".PoPUP").addClass("active");
        $(".PoPUPin").addClass("active");
        $("html").css("overflow", "hidden")
    })

    // Confirm Close
    $(".PoPUPin button:last-child, .PoPUP").on("click", function () {
        $(".PoPUP").removeClass("active");
        $(".PoPUPin").removeClass("active");
        $("html").css("overflow", "auto")
    })

})