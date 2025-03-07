import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  
  let cardNumber = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "A", "J", "Q", "K"];
  let suit = ["Hearts", "Diamonds", "Spades", "Clubs"];
  let randomCardNumber = Math.floor(Math.random() * cardNumber.length);
  let ramdomCardSuit = Math.floor(Math.random() * suit.length)

document.getElementById('cardcontent').innerHTML = cardNumber[randomCardNumber];
document.getElementById('card').className = "";
document.getElementById('card').classList.add("card");
document.getElementById('card').classList.add(getSuitClass(finalSuit));

}

function getSuitClass(suit) {
  switch (suit) {
    case "Hearts": return "suit-hearts";
    case "Diamonds": return "suit-diamonds";
    case "Spades": return "suit-spades";
    case "Clubs": return "suit-clubs";

  }
}
