$(document).ready(function () {
    $(".questions-tab").click(function () {
        console.log($(this));
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
        autoplay: true
    })

    $(".lastNews-slaider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        // autoplay: true
    })

    $(".stars").rateYo({
        starWidth: "20px",
        normalFill: "#E215A7",
          readOnly: true
      });

      $('.burger').click(function(){
        $('.burger').toggleClass('active')
        $('.nav').toggleClass('active')
      })
});