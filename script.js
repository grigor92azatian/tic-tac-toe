
let pageLayout = (function(){   //GENERATES BASIC LAYOUT OF PAGE...OTHER MODULES/FUNCTIONS FILL IT IN
    //--------------------VARIABLES----------------------------------
    let htmlBody = document.querySelector("body");
    let divArray = [];

    //--------------------CREATE 8 NEW DIV ELEMENTS-------------------
    for(let i=0;i<8;i++){
        let newDiv = document.createElement("div");
        divArray.push(newDiv);
    }

    //--------------------STYLE THE BODY AND THE 8 NEW DIVS-------------------------------
    htmlBody.style.cssText = "display: flex; flex-direction: column; align-items: center";

    divArray[0].setAttribute("id", "title");
        divArray[0].innerHTML = "Title";
        divArray[0].style.cssText = "height: 7%; width: 100%; text-align: center; border: 1px solid black;";

    divArray[1].setAttribute("id", "mainSection");
        //divArray[1].innerHTML = "Main Section";
        divArray[1].style.cssText = "display: flex; flex-direction: column; height: 93%; width: 100%; border: 1px solid black;";
        divArray[1].style.border = "1px solid black;";

    divArray[2].setAttribute("id", "gameInfo");
        //divArray[2].innerHTML = "Game Info";
        divArray[2].style.cssText = "display: flex; flex-direction: row; height: 25%; border: 1px solid black;";

    divArray[3].setAttribute("id", "gameBoardSection");
        //divArray[3].innerHTML = "Game Board Section";
        divArray[3].style.cssText = "display: flex; height: 75%; border: 1px solid black; align-items: center; justify-content: center;";

    divArray[4].setAttribute("id", "player1Info");
        divArray[4].innerHTML = "Player 1 Info";
        divArray[4].style.cssText = "width: 25%; height: 100%; border: 1px solid black;";

    divArray[5].setAttribute("id", "player2Info");
        divArray[5].innerHTML = "Player 2 Info";
        divArray[5].style.cssText = "width: 25%; height: 100%; border: 1px solid black;";

    divArray[6].setAttribute("id", "currentRoundDisplay");
        divArray[6].innerHTML = "Current Round Display";
        divArray[6].style.cssText = "width: 50%; height: 100%; border: 1px solid black;";

    divArray[7].setAttribute("id", "gameBoard");
        divArray[7].innerHTML = "GameBoard";
        divArray[7].style.cssText = "width: 600px; height: 600px; border: 1px solid black;"


    //--------------------------CREATE PAGE LAYOUT BY APPENDING THE DIVS TO EACHOTHER---------------------------------
    function appendAll(){
        divArray[3].appendChild(divArray[7]);   //append game board to game board section
        divArray[2].appendChild(divArray[4]);   //append player 1 and 2 info and round display to game info
        divArray[2].appendChild(divArray[6]);
        divArray[2].appendChild(divArray[5]);
        divArray[1].appendChild(divArray[2]);   //append game info to main section
        divArray[1].appendChild(divArray[3]);   //append game board section to main section
        htmlBody.appendChild(divArray[0]);      //append title to body
        htmlBody.appendChild(divArray[1]);      //append main section to body           
    }
 
    return {appendAll};
})();



let gameDisplay = (function(){

})();


let gameBoard = (function(){

})();


let playerFactory
pageLayout.appendAll();

