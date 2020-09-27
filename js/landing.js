$("#hamburger").click(function(){
    var x = $("#navbar")
    if(x.hasClass("hide")){
        x.removeClass("hide")
    }else{
        x.addClass("hide")
    }
})
$("#hamburger2").click(function(){
    var x = $("#navbar")
    if(x.hasClass("hide")){
        x.removeClass("hide")
    }else{
        x.addClass("hide")
    }
})

function pin(theid){
    var x = $("#"+theid)
    $("#lomba").removeClass("active")
    $("#seminar").removeClass("active")
    $("#beasiswa").removeClass("active")
    $("#event").removeClass("active")
    var url= 'img/'+theid+'.png'
    if(!x.hasClass("active")){
        x.addClass("active")
        $('.page2').css('background', "url("+url+")")
        $('.page2').css('background-size', '100vw 100vh')
    }
}
