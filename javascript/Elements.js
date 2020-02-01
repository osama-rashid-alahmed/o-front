// var script = document.createElement('script');
// script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
// script.type = 'text/javascript';
// document.getElementsByTagName('head')[0].appendChild(script);


// o-nav styles and effects


class actionstyles {


// set up the bottom +-=2 animation
    createbottomstyle = (any)=>{
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
       actionstyles1.createbottomstyle("o-nav ul li , o-nav ul li a ,o-nav o-icons img")
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
      actionstyles1.createbottomstyle("o-slide o-icons img , o-slide ul.list li")
      actionstyles1 = null


      

    }
}




class Ofooter{

    constructor(){
        this.createstyle()

    }

    createstyle = () =>{
        var actionstyles1 = new actionstyles()
        actionstyles1.createbottomstyle("o-footer div ul.list li")
        actionstyles1 = null
    }

}


class Obutton {
    constructor(){
      this.createstyle()
    }

    createstyle = () =>{
        var actionstyles1 = new actionstyles()
        actionstyles1.createbottomstyle("button.bt")
        actionstyles1 = null
    }
}



class Oinput{
    constructor(){
       this.createstyle()
    }

    createstyle = () =>{
       var icon = $('div.inputicon input.o-input').attr('icon')
       console.log(icon)
       $('div.inputicon input.o-input').css({
        "background-image": "url(" + icon + ")",
        "background-position": "7px 7px",
        "background-repeat": "no-repeat",
       })
    }
}





const oslide = new Oslide()
const onav = new Onav()
const ofooter = new Ofooter()
const obutton = new Obutton()
const oinput = new Oinput()