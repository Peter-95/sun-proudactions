$(document).ready(function() {


    // preloaed
    window.addEventListener('load', function() {
        document.querySelector('body').classList.add("loaded")
    });


    // owner
    $("#toggle").click(function() {
        var elem = $("#toggle").text();
        if (elem == "Read More") {
            //Stuff to do when btn is in the read more state
            $("#toggle").text("Read Less");
            $("#text").slideDown(100);
        } else {
            //Stuff to do when btn is in the read less state
            $("#toggle").text("Read More");
            $("#text").slideUp(100);
        }
    });




    // scrollup btn

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#scroll').addClass();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function() {

        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });




});