// fade in on scroll

$(document).ready(function() {
    $(window).scroll( function(){
        $('.fadein').each( function(i){
            
            var top_of_element = $(this).offset().top + 100;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > top_of_element ){
                $(this).animate({'opacity':'1'},500);
            }
            
        }); 
    });
});

$(document).ready(function(){
    setTimeout (function(){$('.preloader').fadeOut()}, 500);
})

//popovers
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})