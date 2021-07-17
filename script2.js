let gameBoardModule = (function(){
    let gameBoardArray = [];                                            //will store our 9 game board tiles
    let gameBoardContainer = document.querySelector(".gameBoard");   //this points to our gameBoard container hardcoded in the html
    let xOrO = 1;                                                   //alternates X and O on gameboard clicks
    let totalNumOfMoves = 0;                                        //this keeps track of how many moves have been made by both X and O together, once this number hits 5
                                                                    //its time to check if there are any winning combos

    let createGameBoard = function(){      //takes an array of tiles and a boardContainer and appends all elements to container
        gameBoardContainer.innerHTML = "";
        gameBoardContainer.style.cssText = "flex-wrap: wrap; justify-content: flex-start; align-items: start;"
        for(let i=0;i<gameBoardArray.length;i++){
            gameBoardContainer.appendChild(gameBoardArray[i]);
        }
    }

    let fillTilesArray = function(numOfTiles){
        for(let i=0;i<numOfTiles;i++){                                              
            let tile = document.createElement("div");                                                                           //create new div element
            tile.setAttribute("class", "box"+i);                                                                                //gives each div a unique class name
            tile.style.cssText = "font-size: 90px; text-align: center; width: 100px; height: 100px;";                          //styles each div
            if(i>=3&&i<=8){                                                                                               //give tiles their unique borders
                tile.style.borderTop = "2px solid black";
            }
            if(i<=5){
                tile.style.borderBottom = "2px solid black";
            }
            if(i%3!=0){
                tile.style.borderLeft = "2px solid black";
            }
            if(i==0||i==1||i==3||i==4||i==6||i==7){
                tile.style.borderRight = "2px solid black";
            }                
            gameBoardArray.push(tile);                                                                                          //push each div onto array for storage                                                                             //append all 9 divs to gameBoard Container hardcoded into html
        }
    }

    let tileClickEvent = function(){
        if(this.innerHTML === ""){    
            if(xOrO%2===0){
                this.innerHTML = "O";
            }else{
                this.innerHTML = "X";
            }
            xOrO++;
        }
        totalNumOfMoves++;                                                                                              //each click will increase this by 1, once it reaches 5, its time to start checking if the game has been won
        if(totalNumOfMoves>=5){
            checkGame();    
        }
    }
    let addEventListenersToTiles = function(){
        gameBoardArray.forEach(tile => {
            tile.addEventListener("click", tileClickEvent);            
        });
    }

    let removeEventListenersFromTiles = function(){
        gameBoardArray.forEach(tile => {
            tile.removeEventListener("click", tileClickEvent);
        });
    }

    let clearGameBoard = function(){
        gameBoardArray.forEach(tile => {
            tile.innerHTML = "";
            tile.style.color = "black";
        });
        xOrO = 1;
        totalNumOfMoves = 0;
    }

    let checkGame = function(){                                 //this function checks if anybody has won
        if((gameBoardArray[0].innerHTML==="X"&&gameBoardArray[1].innerHTML==="X"&&gameBoardArray[2].innerHTML==="X")||(gameBoardArray[0].innerHTML==="O"&&gameBoardArray[1].innerHTML==="O"&&gameBoardArray[2].innerHTML==="O")){
            changeToRed(gameBoardArray[0], gameBoardArray[1], gameBoardArray[2]);
            changeScore(gameBoardArray[0].innerHTML);
            displayWinnerOfRound(gameBoardArray[0].innerHTML);
            removeEventListenersFromTiles();
        }
        else if((gameBoardArray[3].innerHTML==="X"&&gameBoardArray[4].innerHTML==="X"&&gameBoardArray[5].innerHTML==="X")||(gameBoardArray[3].innerHTML==="O"&&gameBoardArray[4].innerHTML==="O"&&gameBoardArray[5].innerHTML==="O")){
            changeToRed(gameBoardArray[3], gameBoardArray[4], gameBoardArray[5]);
            changeScore(gameBoardArray[3].innerHTML);
            displayWinnerOfRound(gameBoardArray[3].innerHTML);
            removeEventListenersFromTiles();
        }
        else if((gameBoardArray[6].innerHTML==="X"&&gameBoardArray[7].innerHTML==="X"&&gameBoardArray[8].innerHTML==="X")||(gameBoardArray[6].innerHTML==="O"&&gameBoardArray[7].innerHTML==="O"&&gameBoardArray[8].innerHTML==="O")){
            changeToRed(gameBoardArray[6], gameBoardArray[7], gameBoardArray[8]);
            changeScore(gameBoardArray[6].innerHTML);
            displayWinnerOfRound(gameBoardArray[6].innerHTML);
            removeEventListenersFromTiles();
        }
        else if((gameBoardArray[0].innerHTML==="X"&&gameBoardArray[3].innerHTML==="X"&&gameBoardArray[6].innerHTML==="X")||(gameBoardArray[0].innerHTML==="O"&&gameBoardArray[3].innerHTML==="O"&&gameBoardArray[6].innerHTML==="O")){
            changeToRed(gameBoardArray[0], gameBoardArray[3], gameBoardArray[6]);
            changeScore(gameBoardArray[0].innerHTML);
            displayWinnerOfRound(gameBoardArray[0].innerHTML);
            removeEventListenersFromTiles();
        }
        else if((gameBoardArray[1].innerHTML==="X"&&gameBoardArray[4].innerHTML==="X"&&gameBoardArray[7].innerHTML==="X")||(gameBoardArray[1].innerHTML==="O"&&gameBoardArray[4].innerHTML==="O"&&gameBoardArray[7].innerHTML==="O")){
            changeToRed(gameBoardArray[1], gameBoardArray[4], gameBoardArray[7]);
            changeScore(gameBoardArray[1].innerHTML);
            displayWinnerOfRound(gameBoardArray[1].innerHTML);
            removeEventListenersFromTiles();
        }
        else if((gameBoardArray[2].innerHTML==="X"&&gameBoardArray[5].innerHTML==="X"&&gameBoardArray[8].innerHTML==="X")||(gameBoardArray[2].innerHTML==="O"&&gameBoardArray[5].innerHTML==="O"&&gameBoardArray[8].innerHTML==="O")){
            changeToRed(gameBoardArray[2], gameBoardArray[5], gameBoardArray[8]);
            changeScore(gameBoardArray[2].innerHTML);
            displayWinnerOfRound(gameBoardArray[2].innerHTML);
            removeEventListenersFromTiles();
        }
        else if((gameBoardArray[0].innerHTML==="X"&&gameBoardArray[4].innerHTML==="X"&&gameBoardArray[8].innerHTML==="X")||(gameBoardArray[0].innerHTML==="O"&&gameBoardArray[4].innerHTML==="O"&&gameBoardArray[8].innerHTML==="O")){
            changeToRed(gameBoardArray[0], gameBoardArray[4], gameBoardArray[8]);
            changeScore(gameBoardArray[0].innerHTML);
            displayWinnerOfRound(gameBoardArray[0].innerHTML);
            removeEventListenersFromTiles();
        }
        else if((gameBoardArray[2].innerHTML==="X"&&gameBoardArray[4].innerHTML==="X"&&gameBoardArray[6].innerHTML==="X")||(gameBoardArray[2].innerHTML==="O"&&gameBoardArray[4].innerHTML==="O"&&gameBoardArray[6].innerHTML==="O")){
            changeToRed(gameBoardArray[2], gameBoardArray[4], gameBoardArray[6]);
            changeScore(gameBoardArray[2].innerHTML);
            displayWinnerOfRound(gameBoardArray[2].innerHTML);
            removeEventListenersFromTiles();
        }
        else if(totalNumOfMoves===9){
            displayWinnerOfRound();
            removeEventListenersFromTiles();
        }
    }

    let changeToRed = function(tile1,tile2,tile3){              //use this function to change the winning 3 tiles into red font
        tile1.style.color = "red";
        tile2.style.color = "red";
        tile3.style.color = "red";
    }

    return {
        createGameBoard,
        fillTilesArray,
        addEventListenersToTiles,
        clearGameBoard,
        removeEventListenersFromTiles
    }       
})();


//-----------------------------------------------------------------GAME SETUP (players enter names and click the play button)----------------------------------------------------
//clicking play button should take user names and update the player sections with their names and score AND pullup the gameBoard
let displayPlayerNames = function(){
    let playerNameArea = document.querySelectorAll(".playerNameArea");  //gives us an array with 2 elements
    let playerNameInput = document.querySelectorAll("#name");

    playerNameArea[0].innerHTML = "";
    playerNameArea[0].innerHTML = playerNameInput[0].value;
    playerNameArea[0].setAttribute("class", "player1Name");

    playerNameArea[1].innerHTML = "";
    playerNameArea[1].innerHTML = playerNameInput[1].value;
    playerNameArea[1].setAttribute("class", "player2Name");
}

let addScoreDisplayArea = function(){       //this will add a seperate div that will store the players score as the game proceeds
    let playerSection = document.querySelectorAll(".player");   //array with 2 elements, [0] is player1 section and [1] is player2 section
    let scoreDivArray = [];
    for(let i=1;i<3;i++){
        let scoreDiv = document.createElement("div");               //create score container div
        scoreDiv.innerHTML = "Score";                               //it will say "SCORE"
        let scoreDisplay = document.createElement("div");           //create another div that will store the actual score
        scoreDisplay.setAttribute("class", "player"+i+"score");     //give each one a unique class so that we can adjust them as the game goes one
        scoreDisplay.innerHTML = 0;
        scoreDiv.appendChild(scoreDisplay);                         //append the score div to the container
        scoreDivArray.push(scoreDiv);                               //store the two in an array
    }
    playerSection[0].appendChild(scoreDivArray[0]);
    playerSection[1].appendChild(scoreDivArray[1]);                 //append them to their respective containers
}

let addButtons = function(){
    let bottomDisplay = document.querySelector(".bottomDisplay");
    //new round button
    let newRoundButton = document.createElement("button");
        newRoundButton.innerText = "New Round";
        newRoundButton.setAttribute("class", "newRoundButton");
    newRoundButton.addEventListener("click", function(){
        gameBoardModule.clearGameBoard();
        bottomDisplay.innerHTML = "X makes the first move!";
        gameBoardModule.addEventListenersToTiles();
    });

    //clear score button
    let clearScoresButton = document.createElement("button");
        clearScoresButton.innerText = "Clear Scores";
    let player1Score = document.querySelector(".player1score");
    let player2Score = document.querySelector(".player2score");
        clearScoresButton.addEventListener("click",function(){
            player1Score.innerHTML = 0;
            player2Score.innerHTML = 0;
            gameBoardModule.clearGameBoard();
            bottomDisplay.innerHTML = "X makes the first move!";
            gameBoardModule.addEventListenersToTiles();
        });
    let buttonSection = document.querySelector(".buttonSection");

    buttonSection.appendChild(newRoundButton);
    buttonSection.appendChild(clearScoresButton);
}

let playButton = document.querySelector(".playButton");
playButton.addEventListener("click", function(){
    gameBoardModule.fillTilesArray(9);
    gameBoardModule.addEventListenersToTiles();
    gameBoardModule.createGameBoard();
    displayPlayerNames();
    addScoreDisplayArea();    
    addButtons();
});

//------------------------------------------------------------------------------GAME PLAY (round to round changes to score as one wins)-------------------------------------------

let changeScore = function(playerPiece){
    let player;
    if(playerPiece === "X"){
        player = "player1";
    }else{
        player = "player2";
    }
    let score = document.querySelector("."+player+"score");
    score.innerHTML = parseInt(score.innerHTML)+1;
}

let displayWinnerOfRound = function(playerPiece){
    let bottomDisplay = document.querySelector(".bottomDisplay");
    bottomDisplay.innerHTML = "";
    let playerName;
    if(arguments.length === 0){                                             //if function is passed no arguments, display draw
        bottomDisplay.innerHTML = "It's a draw! Try again!";
    }
    else{
        if(playerPiece==="X"){                                              //based on whether function is passed an "X" or "O", display the corresponding player's name as the winner
            playerName = document.querySelector(".player1Name").innerHTML;
        }else{
            playerName = document.querySelector(".player2Name").innerHTML;
        }
        bottomDisplay.innerHTML = playerName + " wins this round!";
    }
}

//-----------------------------------------------------------------------------RESET GAME AFTER FIRST ROUND----------------------------------------------------------------------------
//button to clear the gameboard and continue on with another round while keeping the current scores

//button to clear the scores and start a new game while keeping the same player names

//button to start from scratch where player names need to be entered again (same effect as refresh button)
let refreshButton = document.querySelector(".clearAllButton");
refreshButton.addEventListener("click", function(){
    location.reload();              //reloads current document, like clicking the refresh button
});

