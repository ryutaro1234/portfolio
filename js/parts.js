// JavaScript Document
$(function(){
	$("#header").load("parts/header.html");
	$("#nav").load("parts/nav.html");
	$("#footer").load("parts/footer.html");
});

$(function(){
    $("nav").hide();
    $(".menu").hover(function(){
            $("nav:not(:animated)").slideDown("fast")
        },
        function(){
            $("nav").slideUp("fast");
    })
}) 
