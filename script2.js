let gameBoardModule = function(){
    let gameBoardArray = [];                                            //will store our 9 game board tiles
    let gameBoardContainer = document.querySelector(".gameBoard");   //this points to our gameBoard container hardcoded in the html
    let xOrO = 1;                                                   //alternates X and O on gameboard clicks
    let totalNumOfMoves = 0;                                        //this keeps track of how many moves have been made by both X and O together, once this number hits 5
                                                                    //its time to check if there are any winning combos
    
    for(let i=0;i<9;i++){                                              
        let tile = document.createElement("div");                                                                           //create new div element
        tile.setAttribute("class", "box"+i);                                                                                //gives each div a unique class name
        tile.style.cssText = "font-size: 170px; text-align: center; width: 200px; height: 200px; border: 2px solid black;"  //styles each div
        tile.addEventListener("click", function(){                                                                          //add click event listener to each div
            if(tile.innerHTML === ""){    
                if(xOrO%2===0){
                    tile.innerHTML = "O";
                }else{
                    tile.innerHTML = "X";
                }
                xOrO++;
            }
            totalNumOfMoves++;                                                                                              //each click will increase this by 1, once it reaches 5, its time to start checking if the game has been won
            if(totalNumOfMoves>=5){
                checkGame();    
            }
        });
        gameBoardArray.push(tile);                                                                                          //push each div onto array for storage
        gameBoardContainer.appendChild(tile);                                                                               //append all 9 divs to gameBoard Container hardcoded into html
    }
    
    let changeToRed = function(tile1,tile2,tile3){              //use this function to change the winning 3 tiles into red font
        tile1.style.color = "red";
        tile2.style.color = "red";
        tile3.style.color = "red";
    }
    let checkGame = function(){                                 //this function checks if anybody has won
        if((gameBoardArray[0].innerHTML==="X"&&gameBoardArray[1].innerHTML==="X"&&gameBoardArray[2].innerHTML==="X")||(gameBoardArray[0].innerHTML==="O"&&gameBoardArray[1].innerHTML==="O"&&gameBoardArray[2].innerHTML==="O")){
            changeToRed(gameBoardArray[0], gameBoardArray[1], gameBoardArray[2]);
            console.log(gameBoardArray[0].innerHTML + " wins this round!");
        }
        if((gameBoardArray[3].innerHTML==="X"&&gameBoardArray[4].innerHTML==="X"&&gameBoardArray[5].innerHTML==="X")||(gameBoardArray[3].innerHTML==="O"&&gameBoardArray[4].innerHTML==="O"&&gameBoardArray[5].innerHTML==="O")){
            changeToRed(gameBoardArray[3], gameBoardArray[4], gameBoardArray[5]);
            console.log(gameBoardArray[3].innerHTML + " wins this round!");
        }
        if((gameBoardArray[6].innerHTML==="X"&&gameBoardArray[7].innerHTML==="X"&&gameBoardArray[8].innerHTML==="X")||(gameBoardArray[6].innerHTML==="O"&&gameBoardArray[7].innerHTML==="O"&&gameBoardArray[8].innerHTML==="O")){
            changeToRed(gameBoardArray[6], gameBoardArray[7], gameBoardArray[8]);
            console.log(gameBoardArray[6].innerHTML + " wins this round!");
        }
        if((gameBoardArray[0].innerHTML==="X"&&gameBoardArray[3].innerHTML==="X"&&gameBoardArray[6].innerHTML==="X")||(gameBoardArray[0].innerHTML==="O"&&gameBoardArray[3].innerHTML==="O"&&gameBoardArray[6].innerHTML==="O")){
            changeToRed(gameBoardArray[0], gameBoardArray[3], gameBoardArray[6]);
            console.log(gameBoardArray[0].innerHTML + " wins this round!");
        }
        if((gameBoardArray[1].innerHTML==="X"&&gameBoardArray[4].innerHTML==="X"&&gameBoardArray[7].innerHTML==="X")||(gameBoardArray[1].innerHTML==="O"&&gameBoardArray[4].innerHTML==="O"&&gameBoardArray[7].innerHTML==="O")){
            changeToRed(gameBoardArray[1], gameBoardArray[4], gameBoardArray[7]);
            console.log(gameBoardArray[1].innerHTML + " wins this round!");
        }
        if((gameBoardArray[2].innerHTML==="X"&&gameBoardArray[5].innerHTML==="X"&&gameBoardArray[8].innerHTML==="X")||(gameBoardArray[2].innerHTML==="O"&&gameBoardArray[5].innerHTML==="O"&&gameBoardArray[8].innerHTML==="O")){
            changeToRed(gameBoardArray[2], gameBoardArray[5], gameBoardArray[8]);
            console.log(gameBoardArray[2].innerHTML + " wins this round!");
        }
        if((gameBoardArray[0].innerHTML==="X"&&gameBoardArray[4].innerHTML==="X"&&gameBoardArray[8].innerHTML==="X")||(gameBoardArray[0].innerHTML==="O"&&gameBoardArray[4].innerHTML==="O"&&gameBoardArray[8].innerHTML==="O")){
            changeToRed(gameBoardArray[0], gameBoardArray[4], gameBoardArray[8]);
            console.log(gameBoardArray[0].innerHTML + " wins this round!");
        }
        if((gameBoardArray[2].innerHTML==="X"&&gameBoardArray[4].innerHTML==="X"&&gameBoardArray[6].innerHTML==="X")||(gameBoardArray[2].innerHTML==="O"&&gameBoardArray[4].innerHTML==="O"&&gameBoardArray[6].innerHTML==="O")){
            changeToRed(gameBoardArray[2], gameBoardArray[4], gameBoardArray[6]);
            console.log(gameBoardArray[2].innerHTML + " wins this round!");
        }
    }
}();

