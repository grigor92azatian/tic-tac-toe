//upon clicking box, populate it with alternating "X" or "O". click it once, it turns to "X", then click it again, it turns to "O", so on. 

//variable that stores an int, if int is odd, fill box with "X", if int is even, fill box with "O"

let gameBoardTile  = document.querySelector(".box");


let xOrO = 1;
gameBoardTile.addEventListener("click", function(){
    gameBoardTile.style.cssText = "font-size: 350px; text-align: center;";
    if(xOrO%2===0){
        gameBoardTile.innerHTML = "O";
    }else{
        gameBoardTile.innerHTML = "X";
    }
    xOrO++;
});





