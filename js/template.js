// JavaScript Document
function header(){
var html = "";
html += '<header>';
html += '<a href="index.html"><img src="images/logo01.png" id="logo"></a>';
html += '<h1>Ryutaro Matsumoto</h1>';
html += '</header>';
document.write(html);
}

function nav(){
var html = "";
html += '<nav>';
html += '<ul id="lists" >';
html += '<li><a href="index.html">Home</a></li>';
html += '<li><a href="about.html">About</a></li>';
html += '<li><a href="works.html">Works</a></li>';
html += '<li><a href="contact.html">Contact</a></li>';
html += '</ul>';
html += '</nav>';
document.write(html);
}

function footer(){
var html = "";
html += '<footer>';
html += '<a href="mailto:ryutaroworks@icloud.com"><h6>ryutaroworks@icloud.com</h6></a>';
html += '</footer>';
document.write(html);
}