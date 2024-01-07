$(document).ready(function () {
    $(".questions-tab").click(function () {
        $(".tab-content").hide()
        $(".questions-tab").removeClass("active")
        $(this).find(".tab-content").show(600)
        $(this).addClass("active")
    });

    $(".feedback-slider").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    autoplay: false,
                }
            }
        ]
    })

    $(".lastNews-slaider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        // autoplay: true,
        responsive: [
            {
                breakpoint: 1151,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    autoplay: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    // autoplay: true,
                    arrows: false,
                }
            }
        ]
    })

    $(".stars").rateYo({
        starWidth: "20px",
        normalFill: "#E215A7",
        readOnly: true
    });

    $('.burger').click(function () {
        $('.burger').toggleClass('active')
        $('.nav').toggleClass('active')
    })

    // ancor link
    $(".menu .link").click(function (e) {
        e.preventDefault()
        let id = $(this).attr("href")
        let top = $(id).offset().top
        $("html, body").animate({
            scrollTop: top,
        }, 800)
        console.log(id);
    })

    // btn up
    $(window).scroll(function () { 
        if ($(this).scrollTop() > 200) {
           $(".btn-up").fadeIn() 
        } else {
          $(".btn-up").fadeOut();  
        }
    });

    $(".btn-up").click(function (e) { 
        $("html, body").animate({
            scrollTop: 0,
        }, 800) 
    });
});

AOS.init()