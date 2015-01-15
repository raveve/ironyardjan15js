var ready = confirm("Salutations! Are you ready to venture into the South of France?");
if (ready === true) {
  alert("Let's saddle up!");
} else {
  alert("Unfortunately, you must go. Saddle up!");
};

alert("First, you must choose your meeple.");

var meepleColor = prompt("What color of meeple do you desire? You may choose: Blue, Green, Black, Yellow or Red.");
if (meepleColor === "Blue" || meepleColor === "blue") {
  alert("Congratulations on choosing blue! You must be feeling peaceful today. Next, you will decide how you would like to move forward on the starting tile.");
} else if (meepleColor === "Green" || meepleColor === "green") {
  alert("Congratulations on choosing green! You must be full of life today. Next, you will decide how you would like to move forward on the starting tile.");
} else if (meepleColor === "Black" || meepleColor === "black") {
  alert("Congratulations on choosing black! You must be feeling mysterious today. Next, you will decide how you would like to move forward on the starting tile.");
} else if (meepleColor === "Yellow" || meepleColor === "yellow") {
  alert("Congratulations on choosing yellow! You must be happy today. Next, you will decide how you would like to move forward on the starting tile.");
} else if (meepleColor === "Red" || meepleColor === "red") {
  alert("Congratulations on choosing red! You must be angry today. Next, you will decide how you would like to move forward on the starting tile.");
};

var startTile = prompt("Choose wisely, for the first tile you may place your" meepleColor "meeple on the: road, city or field.");




// var name = prompt("What is your name?");

// console.log("Hi " + name + "!");

// var meepleColor = ["Blue", "Green", "Black", "Yellow", "Red"];

var tileType = ["Road", "Monastery", "City", "Field"];

var meepleTitle = ["Thief", "Monk", "Knight", "Farmer"];
