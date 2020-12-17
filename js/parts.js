// JavaScript Document
$(function(){
	$("#header").load("parts/header.html");
	$("#nav").load("parts/nav.html");
	$("#footer").load("parts/footer.html");
});

$(function(){
    $("nav").hide();
    $("header").hover(function(){
            $("nav:not(:animated)","header").slideDown("fast")
        },
        function(){
            $("nav","header").slideUp("fast");
    })
}) 
