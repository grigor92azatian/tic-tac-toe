//store gameboard as an array inside of a gameboard object  -   only need ONE, so make this a MODULE

//store players in objects  -   need MULTIPLE, so make these with a FACTORY



let playButton = document.querySelector(".formButton");
playButton.addEventListener("click",function(){
    let player1Name = document.querySelector("#player1Name").value;
    let player2Name = document.querySelector("#player2Name").value;
    console.log({player1Name,player2Name});    
});

function playerFactory(name, piece){    //factory function
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

let newPlayer1 = playerFactory("Ara", "X");




