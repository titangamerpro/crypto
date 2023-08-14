$(document).ready(function () {
    $(".questions-tab").click(function () { 
        console.log($(this));
        $(".tab-content").hide()
        $(".questions-tab").removeClass("active")
        $(this).find(".tab-content").show(600)
        $(this).addClass("active")
    });
});