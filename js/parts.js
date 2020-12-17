// JavaScript Document
$(function(){
	$("#header").load("parts/header.html");
	$("#nav").load("parts/nav.html");
	$("#footer").load("parts/footer.html");
});

$(function(){
    $("nav").hide();
    $("header","nav").hover(function(){
            $("nav:not(:animated)").slideDown("fast")
        },
        function(){
            $("nav").slideUp("fast");
    })
}) 
