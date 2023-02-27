$(document).ready(function(){
    $(".tab-area:first").show();
    $(".tab-list li:first").addClass("active");


    $(".tab-list li").click(function(event){
        index = $(this).index();
        $(".tab-list li ").removeClass("active");
        $(this).addClass("active");
        $(".tab-area").hide();
        $(".tab-area").eq(index).show();
    })
})