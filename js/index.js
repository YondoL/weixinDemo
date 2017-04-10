var num=165750;
$(function(){
    $(".btn").click(function(){
        $("#mask").animate({
            top:"0"
        },600,function(){
            $(".masktit").addClass('bounceInDown');
            $(".subBtn").addClass("rotateIn");
            $("#zxb").addClass("fadeInLeft");
            $("#cab").addClass("fadeInRight");
            $(".support").addClass("fadeInUp");
            $(".subBtn").css("opacity","1");
            $(".btn").hide();
            $(".bounceInRight").hide();
            $(".test").addClass("bounceInUp");
            
        });
    });
    $(".subBtn a").click(function(){
        num++;
        $(".masktit span").html(num);
    });
});