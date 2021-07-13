//upon clicking box, populate it with alternating "X" or "O". click it once, it turns to "X", then click it again, it turns to "O", so on. 

//variable that stores an int, if int is odd, fill box with "X", if int is even, fill box with "O"

let gameBoardTile1 = document.querySelector(".box1");
let gameBoardTile2 = document.querySelector(".box2");
let gameBoardTile3 = document.querySelector(".box3");
let gameBoardTile4 = document.querySelector(".box4");
let gameBoardTile5 = document.querySelector(".box5");
let gameBoardTile6 = document.querySelector(".box6");
let gameBoardTile7 = document.querySelector(".box7");
let gameBoardTile8 = document.querySelector(".box8");
let gameBoardTile9 = document.querySelector(".box9");

let xOrO = 1;
let fillBox1WithXorO = function(){
    if(gameBoardTile1.innerHTML === ""){    
        if(xOrO%2===0){
            gameBoardTile1.innerHTML = "O";
        }else{
            gameBoardTile1.innerHTML = "X";
        }
        xOrO++;
    }
};
let fillBox2WithXorO = function(){
    if(gameBoardTile2.innerHTML === ""){    
        if(xOrO%2===0){
            gameBoardTile2.innerHTML = "O";
        }else{
            gameBoardTile2.innerHTML = "X";
        }
        xOrO++;
    }
};
let fillBox3WithXorO = function(){
    if(gameBoardTile3.innerHTML === ""){    
        if(xOrO%2===0){
            gameBoardTile3.innerHTML = "O";
        }else{
            gameBoardTile3.innerHTML = "X";
        }
        xOrO++;
    }
};
let fillBox4WithXorO = function(){
    if(gameBoardTile4.innerHTML === ""){    
        if(xOrO%2===0){
            gameBoardTile4.innerHTML = "O";
        }else{
            gameBoardTile4.innerHTML = "X";
        }
        xOrO++;
    }
};
let fillBox5WithXorO = function(){
    if(gameBoardTile5.innerHTML === ""){    
        if(xOrO%2===0){
            gameBoardTile5.innerHTML = "O";
        }else{
            gameBoardTile5.innerHTML = "X";
        }
        xOrO++;
    }
};
let fillBox6WithXorO = function(){
    if(gameBoardTile6.innerHTML === ""){    
        if(xOrO%2===0){
            gameBoardTile6.innerHTML = "O";
        }else{
            gameBoardTile6.innerHTML = "X";
        }
        xOrO++;
    }
};
let fillBox7WithXorO = function(){
    if(gameBoardTile7.innerHTML === ""){    
        if(xOrO%2===0){
            gameBoardTile7.innerHTML = "O";
        }else{
            gameBoardTile7.innerHTML = "X";
        }
        xOrO++;
    }
};
let fillBox8WithXorO = function(){
    if(gameBoardTile8.innerHTML === ""){    
        if(xOrO%2===0){
            gameBoardTile8.innerHTML = "O";
        }else{
            gameBoardTile8.innerHTML = "X";
        }
        xOrO++;
    }
};
let fillBox9WithXorO = function(){
    if(gameBoardTile9.innerHTML === ""){    
        if(xOrO%2===0){
            gameBoardTile9.innerHTML = "O";
        }else{
            gameBoardTile9.innerHTML = "X";
        }
        xOrO++;
    }
};

gameBoardTile1.addEventListener("click", fillBox1WithXorO);
gameBoardTile2.addEventListener("click", fillBox2WithXorO);
gameBoardTile3.addEventListener("click", fillBox3WithXorO);
gameBoardTile4.addEventListener("click", fillBox4WithXorO);
gameBoardTile5.addEventListener("click", fillBox5WithXorO);
gameBoardTile6.addEventListener("click", fillBox6WithXorO);
gameBoardTile7.addEventListener("click", fillBox7WithXorO);
gameBoardTile8.addEventListener("click", fillBox8WithXorO);
gameBoardTile9.addEventListener("click", fillBox9WithXorO);