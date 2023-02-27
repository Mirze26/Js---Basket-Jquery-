$(document).ready(function(){

    //let elem = document.querySelector("h1");

    // let elem = $("h1");

    // //console.log(elem.html("salam").text())

      
    // $(".check").click(function(){
    //     //console.log(this)

    //     $(this).css("background-color","red")
    // })

    // $(".add").click(function(){
        

    //     $(this).css("background-color","black")
    // })


    $(".hide").click(function(){
        $(".content").slideUp(500,function(){
            $(this).css("background-color","Green")
        });
    })


    // $(".show").click(function(){
    //     $(".content").show(2000);
    // })


    // $(".toggle").click(function(){
    //     $(".content").toggle(2000);
    // })

    $(".show").click(function(){
        $(".content").slideDown(500,function(){
            $(this).css("background-color","Red")
        });
    })

})