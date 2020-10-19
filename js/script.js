alert("Bienvenidos a Mi Sitio Web")

var inputs = document.getElementsByClassName("formulario__input");
for (var i = 0; i < inputs.length; i++) {
    inputs [i].addEventListener("keyup", function() {
        if(this.value.length>=1) {
            this.nextElementSibling.classList.add("fijar");
        } else {
            this.nextElementSibling.classList.remove("fijar");
        }
    })
}

$(document).ready(function(){

    $('#titulo').css("background","grey").css("color","yellow");
    $('body').css("background-color","lightblue");
    $('.color').mouseover(function() {
        $(this).css("background", "burlywood").css("color","black");
    });

        $('.color').mouseout(function() {
            $(this).css("background", "lightblue").css("color","black");
        }); 
    $('.color1').mouseover(function() {
        $(this).css("background", "burlywood").css("color","black");
    });
    
        $('.color1').mouseout(function() {
            $(this).css("background", "lightblue").css("color","black");
        }); 
    $('.color2').mouseover(function() {
        $(this).css("background", "burlywood").css("color","black");
   });
        
        $('.color2').mouseout(function() {
            $(this).css("background", "lightblue").css("color","black");
        });  
            
        
  });