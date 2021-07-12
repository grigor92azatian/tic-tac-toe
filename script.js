//upon clicking box, populate it with alternating "X" or "O". click it once, it turns to "X", then click it again, it turns to "O", so on. 

//variable that stores an int, if int is odd, fill box with "X", if int is even, fill box with "O"

let gameBoardTile1 = document.querySelector(".box1");
let gameBoardTile2 = document.querySelector(".box2");
let gameBoardTile3 = document.querySelector(".box3");

let xOrO = 1;
let fillBox1WithXorO = function(){
    gameBoardTile1.style.cssText = "font-size: 350px; text-align: center;";
if(gameBoardTile1.innerHTML === ""){    if(xOrO%2===0){
        gameBoardTile1.innerHTML = "O";
    }else{
        gameBoardTile1.innerHTML = "X";
    }
    xOrO++;}
};
let fillBox2WithXorO = function(){
    gameBoardTile2.style.cssText = "font-size: 350px; text-align: center;";
    if(xOrO%2===0){
        gameBoardTile2.innerHTML = "O";
    }else{
        gameBoardTile2.innerHTML = "X";
    }
    xOrO++;
};
let fillBox3WithXorO = function(){
    gameBoardTile3.style.cssText = "font-size: 350px; text-align: center;";
    if(xOrO%2===0){
        gameBoardTile3.innerHTML = "O";
    }else{
        gameBoardTile3.innerHTML = "X";
    }
    xOrO++;
};

gameBoardTile1.addEventListener("click", fillBox1WithXorO);
gameBoardTile2.addEventListener("click", fillBox2WithXorO);
gameBoardTile3.addEventListener("click", fillBox3WithXorO);