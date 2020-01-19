// var script = document.createElement('script');
// script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
// script.type = 'text/javascript';
// document.getElementsByTagName('head')[0].appendChild(script);

class Onav  {

    constructor(){
    this.createstyle()
     
    }

    createstyle = () =>{
        $("o-nav").css({
            "background-color" : "#1FB5F8",
            "width": "100%",
            "height":"55px",
            "float" : "left"

        })
        $('o-nav ul').css({
        "color" : "white",
        "width": "300px",
        "height":"20px",
        "float" : "left"})


    }
}
var oonav = new Onav()


