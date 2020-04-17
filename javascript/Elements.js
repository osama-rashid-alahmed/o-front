// var script = document.createElement('script');
// script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
// script.type = 'text/javascript';
// document.getElementsByTagName('head')[0].appendChild(script);


// o-nav styles and effects


class actionstyles {

   // this function for add gradient to the img-back
    gr_color   = (item) =>{
        $(item).each(function(){
            var any = $(this).children("img.img-back")
            var getclass= $(any).attr("class")

            if($(any).length != 0){
                    $(this).append("<div class='"+getclass+"'></div>")

            }
        //     }else if($(any).length >= 1 && $(item).attr('class') != "o-card"){
        //         $(any).each(function(){
        //         $(item).append("<div class='"+$(this).attr("class")+"'></div>")
        //     })
        // }
    })
      
    }

// set up the bottom +-=2 animation
    ho_top = (any)=>{
      $(any).on({
        mouseenter : function(){
            $(this).animate({
                "bottom" : "+2px",
                
            },100)
         },

         mouseleave : function(){
             $(this).animate({
                "bottom" : "-2px"
             },100)

         }
      })
    }


    


    ho_right = (any , styleclass) =>{

        $(any).on({
            mouseenter : function(){
                $(this).animate({
                    "padding-left" : "+=10px",
                    
                },200)
                $(this).addClass(styleclass)

                // $(this).addClass("shadow")
             },
    
             mouseleave : function(){
                 $(this).animate({
                    "padding-left" : "-=10px"
                 },200)
                 $(this).removeClass(styleclass)

                //  $(this).removeClass("shadow")
    
             }
          })
     
    }


    ho_color = (any) =>{

        $(any).on({
            mouseenter : function(){
                $(this).css({
                    "background-color" : "rgb(0, 0, 0, 0.1)",
                    
                })

                // $(this).addClass("shadow")
             },
    
             mouseleave : function(){
                 $(this).css({
                    "background-color" : "inherit"
                 })

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
       actionstyles1.ho_top("o-nav ul.list.ho-top li , o-nav ul.list.ho-top li a ,o-nav o-icons img.ho-top")
       actionstyles1.gr_color("o-nav")
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
      actionstyles1.ho_right(" o-slide ul.list.ho-right li" , "ho-right-class")
      actionstyles1.gr_color("o-slide")
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
        actionstyles1.gr_color("o-footer")
        actionstyles1 = null
    }

}


class Obutton {
    constructor(){
      this.createstyle()
    }

    createstyle = () =>{
        var actionstyles1 = new actionstyles()
        actionstyles1.ho_top("button.bt.ho-top , div.dropdown div.drop-list.ho-top a")
        actionstyles1.ho_color(" div.dropdown div.drop-list.ho-color a , button.bt.ho-color ")

        actionstyles1 = null

       this.dropdown()



    }

    dropdown = () =>{
        $("div.dropdown div.drop-list").hide()
        $("div.dropdown").each(function(){
        var any =  $(this).children("div.drop-list")
        $(this).children(".drop-button").click(function(){
           
            if($(any).is(":hidden")){
                $(any).show()
            }else{
                $(any).hide()

            }
        })
     });

        // $("div.dropdown button.drop-button").click(function(){
             
        //     var droplist = $("div.dropdown div.drop-list")
        //     for(var i = 0 ; i < droplist.length ; i++){
        //        var droplist2 = droplist[i];
        //         if($(droplist2).is(":hidden")){
                   
        //             $(droplist2).show()
                    
        //         }else{
        //             $(droplist2).hide()
                    

        //         }
        //     }
        // })
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



class Ocard{

    constructor(){
        this.createstyle()

     }


 
     createstyle = () =>{
        this.ho_image()
        var actionstyles1 = new actionstyles()
        actionstyles1.gr_color("div.o-card ")

     }

     ho_image = () =>{
    //    $('div.o-card img').on({
    //        mouseenter:function(){
    //            $(this).addClass("ho-image")
    //        },
    //        mouseleave:function(){
    //            $(this).removeClass("ho-image")
    //        }
    //    })

    $('div.container-list div.o-card h2 , div.container-list div.o-card p').hide()
    $("div.o-card.ho-img").each(function(){
        var any1 = $(this).children('img')
        var any2 = $(this).children('h2')
        var any3 = $(this).children('p')

        $(this).on({
            mouseenter: function(){
                $(any1).addClass("ho-image")
                $(any2).slideDown(150 , function(){

                 })
                 $(any3).slideDown(400 , function(){

                 })
                

            },
            mouseleave: function(){
                $(any1).removeClass("ho-image")
                 $(any2).slideUp(150 , function(){

                 })
                 $(any3).slideUp(400 , function(){
                     
                 })
            }
        })

    })
  }
}
const oslide = new Oslide()
const onav = new Onav()
const ofooter = new Ofooter()
const obutton = new Obutton()
const oinput = new Oinput()
const ocard = new Ocard()