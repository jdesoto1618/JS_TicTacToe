document.addEventListener('DOMContentLoaded', ()=> {
  $("td").on("click", function() {
    index = $(this).attr("id").split("")[1]; //grab the number of the ID only. Since I named my ID's f#, I need to grab the second index to get the number.
    if(board[index] === 0) { //This works because it checks to see if an entry is 0 before proceeding. Index is defined above this with index = $(this).attr("id").split("")[1];.
      if(counter % 2 === 0) {
          $(this).text("X")
          board[index] = player1;
      }
  } //end of board index if statement
    win(); //check who has won
    counter++
    AI();
  })
  $("input").click(function(){
    index = 0; //clear the index when the button is clicked. This is to start the game, or clear it to start it over.
    board = [0,0,0,0,0,0,0,0,0];
    counter = 0;
    $("td").text("")
    $("td").toggle("click")
    $("#player").text("")
    toggleReplayButton('off');
  }) // end of td click
}) //end of ready function
// save player names
var p1Name = prompt('Player 1, enter your name!');
var p2Name = prompt('Player 2, enter your name!');

var board = [0,0,0,
             0,0,0,
             0,0,0]; //Use all zeros here as placeholders of sorts. Technically these dont have to be zero, but we went with zero when writing the rest of the code.
var counter = 0; //This keeps track of which player's turn it is. It is used with mod 2 to switch between player1 and player2.
var index; //Initialize this as empty. Once the program runs, each click will update index. The first click will update the index, which for now is on line 3.
var player1 = 1;
var player2 = -1; //This needs to be here since we used a check for each index being 0 in order to update the board. This doesn't have to be 2, but using 2 for player 2 sorta makes sense.
var p1Score = 0;
var p2Score = 0;

function AI () {
  index = Math.floor(Math.random()*9)
  while (board[index] != 0) {
    index = Math.floor(Math.random()*9) //if it's the wrong index, generate another number
  }
    board[index] = player2;
    $("#f"+index).text("O")
    counter++;
}

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

function win() { //Can be refactored later, but these are set up to determine winners
  if ((board[0] + board[1] + board[2] === 3 ||
     (board[3] + board[4] + board[5]) === 3 ||
     (board[6] + board[7] + board[8]) === 3 ||
     (board[0] + board[3] + board[6]) === 3 ||
     (board[1] + board[4] + board[7]) === 3 ||
     (board[2] + board[5] + board[8]) === 3 ||
     (board[0] + board[4] + board[8]) === 3 ||
     (board[6] + board[4] + board[2]) === 3)) {
     $("#player").text(p1Name + " wins!");
    toggleReplayButton('on');
     $("td").toggle("click")
  }
  else if ((board[0] + board[1] + board[2] === -3 ||
     (board[3] + board[4] + board[5]) === -3 ||
     (board[6] + board[7] + board[8]) === -3 ||
     (board[0] + board[3] + board[6]) === -3 ||
     (board[1] + board[4] + board[7]) === -3 ||
     (board[2] + board[5] + board[8]) === -3 ||
     (board[0] + board[4] + board[8]) === -3 ||
     (board[6] + board[4] + board[2]) === -3)) {
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
