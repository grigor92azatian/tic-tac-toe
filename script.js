
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
        divArray[0].style.cssText = "height: 7%; width: 100%; text-align: center; font-size: 50px; font-weight: bold;";
        //divArray[0].style.border = "1px solid black";

    divArray[1].setAttribute("id", "mainSection");
        //divArray[1].innerHTML = "Main Section";
        divArray[1].style.cssText = "display: flex; flex-direction: column; height: 93%; width: 100%;";
        //divArray[1].style.border = "1px solid black;";

    divArray[2].setAttribute("id", "gameInfo");
        //divArray[2].innerHTML = "Game Info";
        divArray[2].style.cssText = "display: flex; flex-direction: row; height: 25%;";
        //divArray[2].style.border = "1px solid black";

    divArray[3].setAttribute("id", "gameBoardSection");
        //divArray[3].innerHTML = "Game Board Section";
        divArray[3].style.cssText = "display: flex; height: 75%; align-items: center; justify-content: center;";
        //divArray[3].style.border = "1px solid black";

    divArray[4].setAttribute("id", "player1Info");
        //divArray[4].innerHTML = "Player 1 Info";
        divArray[4].style.cssText = "width: 25%; height: 100%;";
        //divArray[4].style.border = "1px solid black";

    divArray[5].setAttribute("id", "player2Info");
        //divArray[5].innerHTML = "Player 2 Info";
        divArray[5].style.cssText = "width: 25%; height: 100%;";
        //divArray[5].style.border = "1px solid black";

    divArray[6].setAttribute("id", "currentRoundDisplay");
        divArray[6].innerHTML = "Current Round Display";
        divArray[6].style.cssText = "width: 50%; height: 100%;";
        //divArray[6].style.border = "1px solid black";

    divArray[7].setAttribute("id", "gameBoard");
        //divArray[7].innerHTML = "GameBoard";
        divArray[7].style.cssText = "width: 600px; height: 600px;";
        //divArray[7].style.border = "1px solid black";


    //--------------------------CREATE PAGE LAYOUT BY APPENDING THE DIVS TO EACHOTHER---------------------------------
    function createPage(){
        divArray[3].appendChild(divArray[7]);   //append game board to game board section
        divArray[2].appendChild(divArray[4]);   //append player 1 and 2 info and round display to game info
        divArray[2].appendChild(divArray[6]);
        divArray[2].appendChild(divArray[5]);
        divArray[1].appendChild(divArray[2]);   //append game info to main section
        divArray[1].appendChild(divArray[3]);   //append game board section to main section
        htmlBody.appendChild(divArray[0]);      //append title to body
        htmlBody.appendChild(divArray[1]);      //append main section to body           
    }

    function fillTitle(contents){
        divArray[0].innerHTML = contents;
    }
    function fillPlayer1Info(contents){
        divArray[4].appendChild(contents);
    }
    function fillPlayer2Info(contents){
        divArray[5].appendChild(contents);
    }
    function fillCurrentRoundDisplay(contents){
        divArray[6].appendChild(contents);
    }
    function fillGameBoard(contents){
        divArray[7].appendChild(contents);
    }
 
    return {createPage, fillTitle, fillCurrentRoundDisplay, fillPlayer1Info, fillPlayer2Info, fillGameBoard};
})();

let playerSelectionForm = (function(){
    let selectionForm = document.createElement("form");
        selectionForm.className = "playerSelectionForm";

    let formTitle = document.createElement("h2");
        formTitle.className = "formTitle";
        formTitle.innerHTML = "Choose Your Piece";

    let formNote = document.createElement("h3");
        formNote.className = "formNote";
        formNote.innerHTML = "X makes the first move";

    let formRow2 = document.createElement("div");
        formRow2.className = "formRow2";

    let playerXdiv = document.createElement("div");
        playerXdiv.className = "playerX";

    let playerXLabel = document.createElement("label");
        playerXLabel.className = "playerLabel";
        playerXLabel.setAttribute("for", "player1Name");
        playerXLabel.innerHTML = "X";

    let playerXInput = document.createElement("input");
        playerXInput.className = "playerInput";
        playerXInput.setAttribute("id", "player1Name");
        playerXInput.setAttribute("name", "player1Name");
        playerXInput.setAttribute("type", "text");
        playerXInput.setAttribute("placeholder", "Enter Name");

    let playerOdiv = document.createElement("div");    
        playerOdiv.className = "playerO";

    let playerOLabel = document.createElement("label");
        playerOLabel.className = "playerLabel";
        playerOLabel.setAttribute("for", "player2Name");
        playerOLabel.innerHTML = "O";

    let playerOInput = document.createElement("input");
        playerOInput.className = "playerInput";
        playerOInput.setAttribute("id", "player2Name");
        playerOInput.setAttribute("name", "player2Name");
        playerOInput.setAttribute("type", "text");
        playerOInput.setAttribute("placeholder", "Enter Name");

    let formButton = document.createElement("button");
        formButton.className = "formButton";
        formButton.innerHTML = "Play!";
        formButton.addEventListener("click", function(){
            player1 = playerFactory(playerXInput.value, "X");
            player2 = playerFactory(playerOInput.value, "O");

            pageLayout.fillPlayer1Info(player1.fillInfoContainer());
            pageLayout.fillPlayer2Info(player2.fillInfoContainer());
        });

    let styleElement = document.createElement("style");
        styleElement.innerHTML = 
        ".playerSelectionForm{"+
            "/* border: 2px solid green; */"+
            "height: 75%;"+
            "display: flex;"+
            "flex-direction: column;"+
            "justify-content: space-between;"+
            "align-items: center;}"+

        ".formNote{"+
            "font-size: 20px;"+
            "font-style: italic;"+
            "font-weight: 100;}"+

        ".playerX, .playerO{"+
            "/* border: 2px solid green; */"+
            "display: flex;"+
            "flex-direction: column;"+
            "width: 45%;}"+
        
        ".formRow2{"+
            "/* border: 2px solid green; */"+
            "display: flex;"+
            "flex-direction: row;"+
            "justify-content: space-between;}"+
        
        ".playerLabel{"+
            "/* border: 2px solid green; */"+
            "font-size: 150px;}"+
        
        ".playerInput{"+
            "/* border: 2px solid green; */"+
            "padding: 5px;}"+
        
        ".formButton{"+
            "/* border: 2px solid green; */"+
            "padding: 10px;}";
    
    let createForm = function(){
        playerXdiv.appendChild(playerXLabel);
        playerXdiv.appendChild(playerXInput);
        playerOdiv.appendChild(playerOLabel);
        playerOdiv.appendChild(playerOInput);
        formRow2.appendChild(playerXdiv);
        formRow2.appendChild(playerOdiv);
        selectionForm.appendChild(formTitle);
        selectionForm.appendChild(formNote);
        selectionForm.appendChild(formRow2);
        selectionForm.appendChild(formButton);
        selectionForm.appendChild(styleElement);

        return selectionForm;
    }


    return {createForm};

})();

let gameDisplay = (function(){

})();



let gameBoard = (function(){    //making the actual 3x3 grid gameboard
    //VARIABLES
        // let gameBoard = document.querySelector(".gameBoard");
        // let mainSection = document.querySelector(".mainSection");

        let gridContainer = document.createElement("div");
        let gameBoardArray = [];
        let gameBoardBorder = "4px solid red";

    //style container that will store the 3x3 grid
        gridContainer.setAttribute("class", "gameBoard");
        gridContainer.style.cssText = 
                                "width: 600px;"+
                                "height: 600px;"+
                                "display: flex;"+
                                "flex-wrap: wrap;"+
                                "box-sizing: border-box";
    //create an array of 9 div elements that will be the tiles to the game board
        for (let i=0;i<9;i++){
            let gridTile = document.createElement("div");
            // gridTile.classList.add("boardTile", tileClassName);     //use classList.add to add multiple classes to single element
            gridTile.setAttribute("class", "boardTile");    //set shared class
            gridTile.setAttribute("data-indexNumber", i);   //set unique data attribute
            //style the grid tiles
            gridTile.style.cssText = 
                                    "height: 200px;"+
                                    "width: 200px;"+
                                    "box-sizing: border-box;"+
                                    "margin: 0;"+
                                    "font-size: 160px;";
            if(i === 1||i===2||i===4||i===5||i===7||i===8){
                gridTile.style.borderLeft = gameBoardBorder;
            }
            if(i === 0||i===1||i===3||i===4||i===6||i===7){
                gridTile.style.borderRight = gameBoardBorder;
            }
            if(i === 3||i===4||i===5||i===6||i===7||i===8){
                gridTile.style.borderTop = gameBoardBorder;
            }
            if(i === 0||i===1||i===2||i===3||i===4||i===5){
                gridTile.style.borderBottom = gameBoardBorder;
            }
            //add event listener to grid tiles
            gameBoardArray.push(gridTile);
        }
    //append the 9 tiles to the grid container and then append grid container to gameDisplay element
        function createGrid(){
            for(let i=0;i<gameBoardArray.length;i++){
                gridContainer.append(gameBoardArray[i]);
            }
            return gridContainer;
        }

        return {createGrid};
})();


let playerFactory = function(name, piece){    //factory function for creating a player object that will contain name, piece (x or o), and score
    //-----------------------------------------------------VARIABLES-----------------------------------------------------------
    let score = 0;
    let playerName = name;
    let playerPiece = piece;
    let playerInfoArray = (function(){
        let playerInfo = [];
        for(let i=0;i<3;i++){
            let newDiv = document.createElement("div");
                newDiv.setAttribute("class", "playerInfo");
                newDiv.style.textAlign = "center";
            playerInfo.push(newDiv);
        }
        playerInfo[0].innerHTML = playerName;
        playerInfo[0].setAttribute("class", "playerName");
        playerInfo[1].innerHTML = playerPiece;
        playerInfo[1].setAttribute("class", "playerPiece");
        playerInfo[2].innerHTML = score;
        playerInfo[2].setAttribute("class", "playerScore");        

        return playerInfo;
    })();
    let container = (function(){
        let containerDiv = document.createElement("div");
        containerDiv.setAttribute("class", "playerInfoContainer");
        containerDiv.style.cssText = "width: 100%; height: 100%; display: flex; flex-direction: column;"+
                                "align-items: center; justify-content: space-around; font-size: 35px;";
        return containerDiv;  
    })();

//-----------------------------------------------------FUNCTIONS-----------------------------------------------------------
    let fillInfoContainer = function(){
        for(let i=0;i<playerInfoArray.length; i++){
            container.appendChild(playerInfoArray[i]);
        }
        return container;
    };

    let incrementScore = function(){
        score++;
        playerInfoArray[2].innerHTML = score;
    };

    return {
        incrementScore,
        fillInfoContainer
    };
};



pageLayout.createPage();
pageLayout.fillTitle("Tic Tac Toe");
pageLayout.fillGameBoard(playerSelectionForm.createForm());

let player1;
let player2;




// pageLayout.fillGameBoard(gameBoard.createGrid());






