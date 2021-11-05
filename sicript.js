$(document).keypress(function( event ) {
    switch(event.which){
        case 119:
            $("#tecla").text("W"); //tecla W
            $("#personaje").animate({ "top": "+=50px" }, "slow");
        break;

        case 97: 
        $("#tecla").text("A"); //tecla A
        $("#personaje").animate({ "left": "+=50px" }, "slow");
        break;

        case 100: 
        $("#tecla").text("D"); //tecla D
        $("#personaje").animate({ "left": "-=50px" }, "slow");
        break;

        case 115: 
        $("#tecla").text("S"); //tecla S
        $("#personaje").animate({ "top": "-=50px" }, "slow");
        break;
    }
});

