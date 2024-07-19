"use strict";

const myArr = ["Rock", "Paper", "Scissors"];

let idx = Math.floor(Math.random() * 3);
let computer = myArr[idx];
let player = prompt("Rock, Paper or Scissors");
let message = "player " + player + " vs computer " + computer + " ";

if (player === computer) {
 message += "it's a tie";
} else if (player > computer) {
 if (idx == 0 && player === "Scissors") {
 message += "Computer Wins";
 } else {
 message += "Player Wins";  
 }
} else {
 if (idx == 2 && player === "Rock") {
 message += "Player Wins";
 } else {
    message += "Computer Wins";
 }
}
console.log(message);