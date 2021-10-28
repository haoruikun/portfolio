// fade in on scroll

$(document).ready(function(){
    setTimeout (function(){$('.preloader').fadeOut()}, 500);
})

//popovers
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})