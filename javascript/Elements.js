// var script = document.createElement('script');
// script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
// script.type = 'text/javascript';
// document.getElementsByTagName('head')[0].appendChild(script);

class Onav  {

    constructor(){
    
    this.createstyle()
     
    }

    // default style 
    createstyle = () =>{
     $(document).ready(function(){


        $("o-nav h1").css({
          "cursor":"pointer"
        })


       // on hover
        $('o-nav ul li , a ').on({
         mouseenter : function(){
            $(this).animate({
                "bottom" : "+=2px",
                
            },100)
            $(this).addClass("shadow")
         },

         mouseleave : function(){
             $(this).animate({
                "bottom" : "-=2px"
             },100)
             $(this).removeClass("shadow")

         }

    })


})


    }
}

var oonav = new Onav()


