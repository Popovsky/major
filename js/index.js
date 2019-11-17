jQuery(function($){
    $(".phone").mask("(999)-999-99-99");
    $(".email").mask("aaaaa@gmail.com");
    $('#calendar1').click(function(event) {
        $('.start_date').datepicker('show');
    });
});

$('.scrollTo').click(function() {
    let getElem = $(this).attr('href');
    let targetDistance = 20;
    if ($(getElem).length) {
        let getOffset = $(getElem).offset().top;
        $('html,body').animate({
            scrollTop: getOffset - targetDistance
        }, 500);
    }
    return false;
});