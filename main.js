$(document).ready(function(){


    $(".dropdown_trigger").on('mouseenter',function(){
        var ak=$(this).parent().find('.dropdown_menu');
            ak.fadeIn(1000);
            ak.addClass('active');
            $('.dropdown_menu').on('mouseleave',function(){
                ak.fadeOut();
            });
    });
    $(" #sofa_img").on('mouseenter',function(){
            var sh=$(this).parent().find(" .sofa_dr");
            var sj=sh.find('.kj');
            sj.addClass('kl');
            sj.html("Buy Sofa");
            sh.fadeIn(1000);
            $("#sofa_dr").on('mouseleave',function(){
                sh.fadeOut(1000);
                sj.html("");
                sj.removeClass('kl');
            
        });
    });
    
});
