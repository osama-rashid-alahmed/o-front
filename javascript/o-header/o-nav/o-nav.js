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
        $("o-nav").css({
            "background-color" : "#1FB5F8",
            "width": "100%",
            "height":"55px",
            "float": "left"
            
            

        })

        $("o-nav h1").css({
          "color": "#ffffff",
          "margin": "8px 20px 4px 20px",
          "cursor":"pointer"
        })


        $('o-nav ul').css({
        "color" : "white",
        "width": "300px",
        "height":"20px",
        })
        
        // $('o-nav ul li').mouseenter(function(){
        //     $(this).addClass("shadow");
        //     $(this).animate({
        //         "bottom" : "+=5px"
        //     },200)
        // })


        $('o-nav ul li , a ').on({
         mouseenter : function(){
            $(this).animate({
                "bottom" : "+=3px",
                
            },200)
            $(this).addClass("shadow")
         },

         mouseleave : function(){
             $(this).animate({
                "bottom" : "-=3px"
             },200)
             $(this).removeClass("shadow")

         }

    })


        

    }
}
var oonav = new Onav()


