//store gameboard as an array inside of a gameboard object  -   only need ONE, so make this a MODULE

//store players in objects  -   need MULTIPLE, so make these with a FACTORY



let playButton = document.querySelector(".formButton");
playButton.addEventListener("click",function(){
    let player1Name = document.querySelector("#player1Name").value;
    let player2Name = document.querySelector("#player2Name").value;
    console.log({player1Name,player2Name});
    gameBoardModule.createGrid();    
});

function playerFactory(name, piece){    //factory function for creating a player object that will contain name, piece (x or o), and score
    let score = 0;

    return {
        name,
        piece,
        score,
        incrementScore: function(){
            this.score++;
        }
    };
}



//making the actual 3x3 grid gameboard
let gameBoardModule = (function(){
    //VARIABLES
        let gridContainer = document.createElement("div");
        let gameBoardArray = [];
        let gameDisplay = document.querySelector(".gameDisplay");

    //style container that will store the 3x3 grid
        gridContainer.setAttribute("class", "gameBoard");
        gridContainer.style.cssText = "border: 2px solid green;"+
                                "width: 600px;"+
                                "height: 600px;"+
                                "display: flex;"+
                                "flex-wrap: wrap;";
    //create an array of 9 div elements that will be the tiles to the game board
        for (let i=0;i<9;i++){
            let gridTile = document.createElement("div");
            // gridTile.classList.add("boardTile", tileClassName);     //use classList.add to add multiple classes to single element
            gridTile.setAttribute("class", "boardTile");    //set shared class
            gridTile.setAttribute("data-indexNumber", i);   //set unique data attribute
            gridTile.style.cssText = "border: 1px solid black;"+
                                    "height: 200px;"+
                                    "width: 200px;";
            gameBoardArray.push(gridTile);
        }
    //append the 9 tiles to the grid container and then append grid container to gameDisplay element
        function createGrid(){
        for(let i=0;i<gameBoardArray.length;i++){
            gridContainer.append(gameBoardArray[i]);
        }
        gameDisplay.innerHTML = "";
        gameDisplay.append(gridContainer);    
        }
        return {createGrid};
})();
