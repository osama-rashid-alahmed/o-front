// o-nav load style and script


$("<link/>", {
    rel: "stylesheet",
    type: "text/css",
    href: "./style/global.css"
 }).appendTo("head");

 
var script  = document.createElement('script'); 
script.src  = './javascript/Elements.js'; 
script.type = 'text/javascript'; 
script.defer = true; 
document.getElementsByTagName('head').item(0).appendChild(script); 


   
