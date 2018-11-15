console.log("Up and Running!");

 // document.getElementById("instructionClick").onclick = function() {"toggleInstr"};
// HEre is the javascript to try and toggle the class of the instructions div
// function toggleInstr() {
	// var element = document.getElementById("instructions");
	// console.log(element);
    // element.classList.toggle(".showInstructions");
// };

//an attempt to use the jquery method which 
$(".instButton").click(function(){
	$(".instructions").toggleClass("showInstructions");
});



//a function to toggle the instructions off at the beginning..
// $(document).ready(function() {
// 	$(".instructions").toggle(0, function() {
// 		console.log("terminal loaded");
// 	})
// })
// // And the one that works for this...
// $(document).ready(function() {
// 	$("button").click(function () {
// 		$(".instructions").toggle(500, function(){
// 			console.log("The toggle method is finished!");
// 		});
// 	});
// });

// Function to insert and remove the text inside the div
// $(document).ready(function(){
// 	$("button").click(function () {
// 		$(".instructions").html('<p><small><span class="concentration">Concentration:</span> also known as Match Match, Memory, Pelmanism, Shinkei-suijaku, Pexeso or simply Pairs, is a card game in which all of the cards are laid face down on a surface and two cards are flipped face up over each turn. The object of the game is to turn over pairs of matching cards.</small></p>');
// 	});
// });

// created array and objects for cards
var cards = [{
	robotNum: 1,
	type: "robot 1",
	cardImage: "images/queen-of-diamonds.png"
	},
	{
	robotNum: 2,
	type: "robot 1",
	cardImage: "images/queen-of-diamonds.png"
	},
	{
	robotNum: 3,
	type: "robot 2",
	cardImage: "images/queen-of-hearts.png"
	},
	{
	robotNum: 4,
	type: "robot 2",
	cardImage: "images/queen-of-hearts.png"
	},
	{
	robotNum: 5,
	type: "robot 3",
	cardImage: "images/king-of-diamonds.png"
	},
	{
	robotNum: 6,
	type: "robot 3",
	cardImage: "images/king-of-diamonds.png"
	},
	{
	robotNum: 7,
	type: "robot 4",
	cardImage: "images/king-of-hearts.png"
	},
	{
	robotNum: 8,
	type: "robot 4",
	cardImage: "images/king-of-hearts.png"
	}
];
console.log(cards)
var ranCards = [];
// var ranNum = function () {
	for (var i = 0; i < 8; i++) {
		// var x = cards[Math.floor(Math.random() * (cards.length - 1))];
		// console.log(x);
		ranCards.push(cards.splice(Math.random() * (cards.length - 1),1)
			.pop());
		//potential if else statement that was meant to check if the object already exists in the new array.
		// if (ranCards[i].robotNum !== x.robotNum) {
		// 	ranCards.push(x);
		// }
		// else {
		// 	i = -1;
		// 	continue;
		// }
	};
// }
	


// function that sets up the game
var createBoard = function() {
	for (var i = 0; i < ranCards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('data-id', i);
		cardElement.setAttribute('src', 'images/cardback.png');
		// cardElement.addEventListener('click', flipCard);
		document.getElementById('gameBoard').appendChild(cardElement);
	}
}
// ranNum();
createBoard();
console.log(ranCards);