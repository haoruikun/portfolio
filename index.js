$(document).ready(function(){
    setTimeout(function(){
        $('body').css('position','static');
        $('#preloader').fadeOut();
    }, 1000)
})

$(document).ready(function(){
    setTimeout(function(){
        $('.banner').css('opacity', '1');
    }, 1500)
})

// $('#summonersearch').on('shown.bs.modal', function () {
//     $('#summonersearch').trigger('focus')
//   })