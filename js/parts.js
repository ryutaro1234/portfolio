// JavaScript Document
$(function(){
	$("#header").load("parts/header.html");
	$("#nav").load("parts/nav.html");
	$("#footer").load("parts/footer.html");
});

$(function(){
    $('#header').hover(function(){
        $("#nav:not(:animated)", #nav).slideDown();
    }, function(){
        $("#nav",#nav).slideUp();
    });
});
