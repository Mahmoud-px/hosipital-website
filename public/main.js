
// using jquery :

$(document).ready(function(){


    $(".fa-bars").click(function(){
        $(this).toggleClass('fa-times');
        $('.nav').toggleClass('openNav');

    });

    $(window).on('load scroll', function(){
        $(".fa-bars").removeClass('fa-times');
        $(".nav").removeClass('openNav')
    });

    $(".header li a").on("click",function(){
        $(".fa-bars").removeClass('fa-times');
        $(".nav").removeClass('openNav')
    })

    $(".Facility .box-container").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery:{
            enabled: true
        }
    });

    AOS.init({
        delay:300,
        duration:1000,
        once:true,
    })


})

