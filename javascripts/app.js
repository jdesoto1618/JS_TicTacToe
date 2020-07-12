function generateBoard(param) {
  let board = [];
  if(param) {
    if(param == 9) {
      let i = 0;
      for (i; i < param; i++) {
        board[i] = 0;
      }
    }
  }
  return board
}

let gameBoard = generateBoard(9);
let counter = 0;

document.addEventListener('DOMContentLoaded', () => {
  $("td").on("click", function() {
    index = $(this).attr("id").split("")[1]; //grab the number of the ID only. Since I named my ID's f#, I need to grab the second index to get the number.
    if(gameBoard[index] === 0) { //This works because it checks to see if an entry is 0 before proceeding. Index is defined above this with index = $(this).attr("id").split("")[1];.
      if(counter % 2 === 0) {
        $(this).text("X")
        gameBoard[index] = player1;
      } else {
        $(this).text("O")
        gameBoard[index] = player2;
      }
    }
    win(); 
    counter++
    console.log(gameBoard);
  })

  $("input").click(function(){
    index = 0;
    gameBoard = generateBoard(9);
    counter = 0;
    $("td").text("")
    $("td").toggle("click")
    $("#player").text("")
    toggleReplayButton('off');
  }) 
}) 

// save player names
var p1Name = prompt('Player 1, enter your name!');
var p2Name = prompt('Player 2, enter your name!');

var index; //Initialize this as empty. Once the program runs, each click will update index. The first click will update the index, which for now is on line 3.
var player1 = 1;
var player2 = -1; //This needs to be here since we used a check for each index being 0 in order to update the board. This doesn't have to be 2, but using 2 for player 2 sorta makes sense.
var p1Score = 0;
var p2Score = 0;

const toggleReplayButton = (toggle) => {
  if(toggle) {
    replayButton = document.querySelector('.replay-button');
    if (toggle === 'on') {
      replayButton.classList.remove('not-shown');
    } else {
      replayButton.classList.add('not-shown');
    }
  } else {
    return
  } 
}

function win() { 
  if ((gameBoard[0] + gameBoard[1] + gameBoard[2] === 3 ||
    (gameBoard[3] + gameBoard[4] + gameBoard[5]) === 3 ||
    (gameBoard[6] + gameBoard[7] + gameBoard[8]) === 3 ||
    (gameBoard[0] + gameBoard[3] + gameBoard[6]) === 3 ||
    (gameBoard[1] + gameBoard[4] + gameBoard[7]) === 3 ||
    (gameBoard[2] + gameBoard[5] + gameBoard[8]) === 3 ||
    (gameBoard[0] + gameBoard[4] + gameBoard[8]) === 3 ||
    (gameBoard[6] + gameBoard[4] + gameBoard[2]) === 3)) {
     $("#player").text(p1Name + " wins!");
    toggleReplayButton('on');
     $("td").toggle("click")
  }
  else if ((gameBoard[0] + gameBoard[1] + gameBoard[2] === -3 ||
    (gameBoard[3] + gameBoard[4] + gameBoard[5]) === -3 ||
    (gameBoard[6] + gameBoard[7] + gameBoard[8]) === -3 ||
    (gameBoard[0] + gameBoard[3] + gameBoard[6]) === -3 ||
    (gameBoard[1] + gameBoard[4] + gameBoard[7]) === -3 ||
    (gameBoard[2] + gameBoard[5] + gameBoard[8]) === -3 ||
    (gameBoard[0] + gameBoard[4] + gameBoard[8]) === -3 ||
    (gameBoard[6] + gameBoard[4] + gameBoard[2]) === -3)) {
    $("#player").text(p2Name + " wins!");
    toggleReplayButton('on');
    $("td").toggle("click")
  }
  else if (counter === 8) {
    $("#player").text("Cats Game!");
    toggleReplayButton('on');
    $("td").toggle("click")
  }
}
