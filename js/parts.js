// JavaScript Document
$(function(){
	$("#header").load("parts/header.html");
	$("#nav").load("parts/nav.html");
	$("#footer").load("parts/footer.html");
});

$(function(){
    $("nav").hide();
    $("header").hover(function(){
            $("nav:not(:animated)",this).slideDown("fast")
        },
        function(){
            $("nav",this).slideUp("fast");
    })
}) 
