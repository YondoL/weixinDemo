var num=165750;
$(function(){
    var img = document.getElementById("bgJpg");
    var timer = setInterval(function(){
        if(img.complete){
            $(".wrap").css("display","block");
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
                setTimeout(function(){window.location.href = "http://www.upshequ.com/download/dpl/phone.html";},1000);
            }); 
        clearInterval(timer)       
        }    
    },10)
});