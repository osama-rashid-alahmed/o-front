// var script = document.createElement('script');
// script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
// script.type = 'text/javascript';
// document.getElementsByTagName('head')[0].appendChild(script);


// o-nav styles and effects
class Onav  {

    constructor(){
    
    this.createstyle()
     
    }

    createstyle = () =>{
     $(document).ready(function(){


        $("o-nav h1").css({
          "cursor":"pointer"
        })




       // on hover
        $('o-nav ul li , a , o-icons img').on({
         mouseenter : function(){
            $(this).animate({
                "bottom" : "+=2px",
                
            },100)
            // $(this).addClass("shadow")
         },

         mouseleave : function(){
             $(this).animate({
                "bottom" : "-=2px"
             },100)
            //  $(this).removeClass("shadow")

         }
    })


    $('o-nav .showslide').click(function(){
        $('o-slide.closed').animate({width:'show'},350);
    })
})

    }
}






// o-slide styles and effects
class Oslide{

    constructor(){
     this.createstyle()
    }

    createstyle = () =>{
      $('o-slide.closed').hide()

      $('o-slide o-icons img.closeslide').click(function(){
          $('o-slide').animate({width:'hide'},350)
          
      })
      

    }
}





var oslide = new Oslide()
var onav = new Onav()


