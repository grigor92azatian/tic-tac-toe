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
