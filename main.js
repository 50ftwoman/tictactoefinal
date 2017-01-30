

//var player1Pic = "http://www.drodd.com/images14/x32.jpg";
//var player2Pic = "http://graffitialphabet.org/letter-o/gangster-graffiti-alphabet-o.jpg";

var player1 = true;
var player2 = true;



var cardOne = document.getElementById('cardOne');
var cardTwo = document.getElementById('cardTwo');
var cardThree = document.getElementById('cardThree');
var cardFour = document.getElementById('cardFour');
var cardFive = document.getElementById('cardFive');
var cardSix = document.getElementById('cardSix');
var cardSeven = document.getElementById('cardSeven');
var cardEight = document.getElementById('cardEight');
var cardNine = document.getElementById('cardNine');


var board = document.getElementsByClassName('blankbox');


for (var i = 0; i < board.length; i++) {
   board[i].addEventListener('click', function() {
    if (player1 == true) {
      this.style.backgroundImage = "url('http://etc.usf.edu/presentations/extras/letters/theme_alphabets/25/34/X-150.png')"
      this.setAttribute("box", "1");
      player1 = false;
      this.removeEventListener('click', arguments.callee);
    } else  {
      player2 = true
      this.style.backgroundImage = "url('http://etc.usf.edu/presentations/extras/letters/theme_alphabets/25/25/O-400.png')"
      this.setAttribute('box', "2");
      player1 = true;
      this.removeEventListener('click', arguments.callee);

    }
    winner()
  })
}






var winner = function () {
  if((board[0].getAttribute('box') === "1") && (board[1].getAttribute('box') === "1") && (board[2].getAttribute('box') === "1")) {
  alert("Player 1 wins!");
}
  if((board[0].getAttribute('box') === "1") && (board[3].getAttribute('box') === "1") && (board[6].getAttribute('box') === "1")) {
  alert("Player 1 wins!");
}
  if((board[0].getAttribute('box') === "1") && (board[4].getAttribute('box') === "1") && (board[8].getAttribute('box') === "1")){
  alert("Player 1 wins!");
} if((board[1].getAttribute('box') === "1") && (board[4].getAttribute('box') === "1") && (board[7].getAttribute('box') === "1")){
alert("Player 1 wins!");
} if((board[2].getAttribute('box') === "1") && (board[4].getAttribute('box') === "1") && (board[6].getAttribute('box') === "1")){
alert("Player 1 wins!");
} if((board[2].getAttribute('box') === "1") && (board[5].getAttribute('box') === "1") && (board[8].getAttribute('box') === "1")){
alert("Player 1 wins!");
} if((board[3].getAttribute('box') === "1") && (board[4].getAttribute('box') === "1") && (board[5].getAttribute('box') === "1")){
alert("Player 1 wins!");
} if((board[6].getAttribute('box') === "1") && (board[7].getAttribute('box') === "1") && (board[2].getAttribute('box') === "1")){
alert("Player 1 wins!");
}

// player 2

if((board[0].getAttribute('box') === "2") && (board[1].getAttribute('box') === "2") && (board[2].getAttribute('box') === "2")){
alert("Player 2 wins!");
}
if((board[0].getAttribute('box') === "2") && (board[3].getAttribute('box') === "2") && (board[6].getAttribute('box') === "2")){
alert("Player 2 wins!");
}
if((board[0].getAttribute('box') === "2") && (board[4].getAttribute('box') === "2") && (board[8].getAttribute('box') === "2")){
alert("Player 2 wins!");
} if((board[1].getAttribute('box') === "2") && (board[4].getAttribute('box') === "2") && (board[7].getAttribute('box') === "2")){
alert("Player 2 wins!");
} if((board[2].getAttribute('box') === "2") && (board[4].getAttribute('box') === "2") && (board[6].getAttribute('box') === "2")){
alert("Player 2 wins!");
} if((board[2].getAttribute('box') === "2") && (board[5].getAttribute('box') === "2") && (board[8].getAttribute('box') === "2")){
alert("Player 2 wins!");
} if((board[3].getAttribute('box') === "2") && (board[4].getAttribute('box') === "2") && (board[5].getAttribute('box') === "2")){
alert("Player 2 wins!");
}if((board[6].getAttribute('box') === "2") && (board[7].getAttribute('box') === "2") && (board[2].getAttribute('box') === "2")){
alert("Player 2 wins!");
}
}









//
// var winningMatches = {
//   combo1: [0, 1, 3],
//   combo2: [0, 3, 6],
//   combo3: [0, 4, 8],
//   combo4: [1, 4, 7],
//   combo5: [2, 4, 6],
//   combo6: [2, 5, 8],
//   combo7: [3, 4, 5],
//   combo8: [6, 2, 7],
// }
//





//working click board

// for (var i = 0; i < board.length; i++) {
//    board[i].addEventListener('click', function() {
//     if (player1 == true) {
//       this.style.backgroundImage = "url('http://www.drodd.com/images14/x32.jpg')"
//       this.setAttribute('box', "1");
//       player1 = false
//     } else
//       this.style.backgroundImage = "url('http://graffitialphabet.org/letter-o/gangster-graffiti-alphabet-o.jpg')"
//       this.setAttribute('box', "2");
//       player1 = true;
//   })
// }



  // function determineWinner() {
  //   if (player1 == true)
  //     document.getElementById('board').removeAttribute('onClick')
  // }
