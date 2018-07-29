/**
 * Created by sky on 2018/7/29.
 */






$(function(){

    $("#sayHi").click(function(){

        var job = $("span.myjob").css("display");
        if(job == "none"){
            $("span.myjob").css("display","inline-block");
        }
        else{
            $("span.myjob").css("display","none");
        }

    })


})