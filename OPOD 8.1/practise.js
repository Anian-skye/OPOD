/**
 * Created by sky on 2018/8/1.
 */
$(function () {
    $("#PROFILE").hide();
    $("#ABOUT").hide();
    $("#homelink").click(function(){
        $("#PROFILE").hide();
        $("#ABOUT").hide();
        $("#HOME").show();
        removeSelect();
        $("#homelink").addClass("selected")

    });
    $("#profilelink").click(function(){
        $("#PROFILE").show();
        $("#ABOUT").hide();
        $("#HOME").hide();
        removeSelect();
        $("#profilelink").addClass("selected")
    });
    $("#aboutlink").click(function(){
        $("#PROFILE").hide();
        $("#ABOUT").show();
        $("#HOME").hide();
        removeSelect();
        $("#aboutlink").addClass("selected")
    });
});


function removeSelect(){
    if($("#homelink").hasClass("selected"))
        $("#homelink").removeClass("selected");
    if($("#profilelink").hasClass("selected"))
        $("#profilelink").removeClass("selected");
    if($("#aboutlink").hasClass("selected"))
        $("#aboutlink").removeClass("selected");
}