// var script = document.createElement('script');
// script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
// script.type = 'text/javascript';
// document.getElementsByTagName('head')[0].appendChild(script);


// o-nav styles and effects


class actionstyles {


// set up the bottom +-=2 animation
    ho_top = (any)=>{
      $(any).on({
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
    }


    ho_right = (any) =>{

        $(any).on({
            mouseenter : function(){
                $(this).animate({
                    "left" : "+=10px",
                    
                },50)
                // $(this).addClass("shadow")
             },
    
             mouseleave : function(){
                 $(this).animate({
                    "left" : "-=10px"
                 },50)
                //  $(this).removeClass("shadow")
    
             }
          })
     
    }
}

class Onav {

    constructor(){
    this.createstyle()
     
    }

    createstyle = () =>{
     $(document).ready(function(){


        $("o-nav h1").css({
          "cursor":"pointer"
        })
      
        // create the animation
       var actionstyles1 = new actionstyles()
       actionstyles1.ho_top("o-nav ul li , o-nav ul li a ,o-nav o-icons img")
       actionstyles1 = null


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
          $('o-slide ').animate({width:'hide'},350)
          
          
      })

      // create the animation
      var actionstyles1 = new actionstyles()
      actionstyles1.ho_top("o-slide o-icons img , o-slide ul.list.ho-top li")
      actionstyles1.ho_right(" o-slide ul.list.ho-right li")
      actionstyles1 = null


      
    //   $("o-slide ul.list.ho-right li").on({
    //     mouseenter : function(){
    //         $(this).animate({
    //             "left" : "+=10px",
                
    //         },50)
    //         // $(this).addClass("shadow")
    //      },

    //      mouseleave : function(){
    //          $(this).animate({
    //             "left" : "-=10px"
    //          },50)
    //         //  $(this).removeClass("shadow")

    //      }
    //   })

      

    }
}




class Ofooter{

    constructor(){
        this.createstyle()

    }

    createstyle = () =>{
        var actionstyles1 = new actionstyles()
        actionstyles1.ho_top("o-footer div ul.list li")
        actionstyles1 = null
    }

}


class Obutton {
    constructor(){
      this.createstyle()
    }

    createstyle = () =>{
        var actionstyles1 = new actionstyles()
        actionstyles1.ho_top("button.bt")
        actionstyles1 = null


    }
}



class Oinput{
    constructor(){
       this.createstyle()
    }

    createstyle = () =>{
    //    var icon = $('input.o-input.icon').attr('icon')
    //    console.log(icon)
       
    //    $('input.o-input.icon').css({
    //     "background-image": "url(" + $(this).attr('icon') + ")",
    //     "background-position": "7px 7px",
    //     "background-repeat": "no-repeat",
    //     "padding-left" : "10%",
    //     "width" : "93%"
    //    })
    }
}





const oslide = new Oslide()
const onav = new Onav()
const ofooter = new Ofooter()
const obutton = new Obutton()
const oinput = new Oinput()