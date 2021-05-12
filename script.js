//store gameboard as an array inside of a gameboard object  -   only need ONE, so make this a MODULE

//store players in objects  -   need MULTIPLE, so make these with a FACTORY

let playButton = document.querySelector(".formButton");
playButton.addEventListener("click",function(){
    // let player1 = playerFactory(document.querySelector("#player1Name").value, "X");
    // let player2 = playerFactory(document.querySelector("#player2Name").value, "O");
    // gameBoardModule.createGrid(); 
    secondPageModule.clearFirstPage();
    secondPageModule.divSetUp();   
});



let secondPageModule = (function(){
    //----------------------VARIABLES------------------------
    let pageMainSection = document.querySelector(".mainSection");
    let displaySection = document.createElement("div");
    let gameBoardSection = document.createElement("div");
    //----------------------FUNCTIONS------------------------
    function clearFirstPage(){
        console.log("clearFirstPage is working");
        pageMainSection.innerHTML = "";
    }
    function divSetUp(){
        console.log("divSetup is working");
        pageMainSection.style.cssText = "display: flex;"+
                                        "flex-direction: column;"+
                                        "align-items: center;";
        displaySection.setAttribute("class", "displaySection");
        displaySection.style.cssText = "height:25%;"+
                                        "width: 100vw;"+
                                        "border: 1px solid black;"+
                                        "display: flex;"+
                                        "justify-content: space-between;"+
                                        "align-items: center;";
        displaySection.innerHTML = "displaySection";
        gameBoardSection.setAttribute("class", "gameBoardSection");
        gameBoardSection.style.cssText = "height: 75%;"+
                                            "width: 100vw;"+
                                            "border: 1px solid black;"+
                                            "display: flex;"+
                                            "flex-direction: column;"+
                                            "align-items: center";
        gameBoardSection.innerHTML = "gameBoardSection";
        pageMainSection.append(displaySection);
        pageMainSection.append(gameBoardSection);
    }

    return {clearFirstPage, divSetUp};
})();

let inGameDisplayModule = (function(){
    
})();

let playerFactory = function(name, piece){    //factory function for creating a player object that will contain name, piece (x or o), and score
    let score = 0;

    return {
        name,
        piece,
        score,
        incrementScore: function(){
            this.score++;
        },
        createPlayerInfoDiv: function(){
            let containerDiv = document.createElement("div");
                containerDiv.setAttribute("class", "playerInfoContainer");
                containerDiv.style.cssText = "width: 25%; height: 100%; display: flex; flex-direction: column;"+
                                                "align-items: center; justify-content: space-between;";
            let playerInfo = [];
            for(let i=0;i<3;i++){
                let newDiv = document.createElement("div");
                    newDiv.setAttribute("class", "playerInfo");
                    newDiv.style.textAlign = "center";
                playerInfo.push(newDiv);
            }
            playerInfo[0].innerHTML = this.name;
            playerInfo[1].innerHTML = this.piece;
            playerInfo[2].innerHTML = this.score;

            playerInfo[0].setAttribute("class", "playerName");
            playerInfo[1].setAttribute("class", "playerPiece");
            playerInfo[2].setAttribute("class", "playerScore");

            for(let i=0;i<playerInfo.length; i++){
                containerDiv.appendChild(playerInfo[i]);
            }
            return containerDiv;
        }
    };
};


//making the actual 3x3 grid gameboard
let gameBoardModule = (function(){
    //VARIABLES
        let gameBoard = document.querySelector(".gameBoard");
        let mainSection = document.querySelector(".mainSection");

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
            mainSection.innerHTML = "";
            gameBoard.append(gridContainer);    
        }

        return {createGrid};
})();



