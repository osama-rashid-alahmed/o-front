// styles and effects
class actionstyles {
   // this function for add gradient to the img-back
    gr_color   = (item) =>{
        $(item).each(function(){
            var any = $(this).children("img.img-back")
            var getclass= $(any).attr("class")
            if($(any).length != 0){
                $(this).append("<div class='"+getclass+"'></div>")
            }
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

    //ho-rhight animation effect
    ho_right = (any , styleclass) =>{
        $(any).on({
            mouseenter : function(){
                $(this).animate({
                    "padding-left" : "+=10px",   
                },200)
                $(this).addClass(styleclass)
            },
            mouseleave : function(){
                $(this).animate({
                    "padding-left" : "-=10px"
                },200)
                $(this).removeClass(styleclass)    
            }
        })     
    }

    // hover color effect
    ho_color = (any) =>{
        $(any).on({
            mouseenter : function(){
                $(this).css({
                    "background-color" : "rgb(0, 0, 0, 0.1)",     
                })
            },
            mouseleave : function(){
                $(this).css({
                    "background-color" : "inherit"
                })    
            }
        })
    }
}
class Onav {
    constructor(){
    this.createstyle()    
    }
    // all the styles will run in this function
    createstyle = () =>{
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
        this.droplistmobile()
    }
    // when the screen get smaller, the ul list in the nav will be like a dropbutton
    droplistmobile = () =>{
        var button = $("div.list-mobile").children("button.drop-list-mobile");
        var list = $("div.list-mobile").children("ul.list")
        $(button).click(function(){        
            if($(list).is(":hidden")){
              $(list).show()
            }else{
              $(list).hide()
            }
        })
        // check the size of the window
        if($(window).width() >= 700){
            $(button).hide()
            $(list).show()
        }else{
            $(button).show()
            $(list).hide()
        }
        $(window).on("resize" , function(){
            if($(window).width() >= 700){
                $(button).hide()
                $(list).show()
            }else{
                $(button).show()
                $(list).hide()
            }
        })
    }
}
// o-slide element
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
    }
}
//o-footer element
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
//button styles
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
    }
}
// inputs styles
class Oinput{
    constructor(){
       this.createstyle()
    }
    createstyle = () =>{
        //maybe later
    }
}
// o-card styles
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