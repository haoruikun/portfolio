$(document).ready(function(){
    setTimeout(function(){
        $('body').css('position','static');
        $('#preloader').fadeOut();
    }, 1500)
})

$(document).ready(function(){
    setTimeout(function(){
        $('.banner').css('opacity', '1');
    }, 2000)
})

// $('#summonersearch').on('shown.bs.modal', function () {
//     $('#summonersearch').trigger('focus')
//   })