(function () {
  "use strict";

  var ready = confirm("Salutations! Are you ready to venture into the South of France?");
  if (ready === true) {
    alert("Let's saddle up!");
  } else {
    alert("Unfortunately, you must go. Saddle up!");
  };

  alert("First, you must choose your meeple.");

  var meepleColor = prompt("What color of meeple do you desire? You may choose from: blue, green, black, yellow or red.");
  if (meepleColor === "blue" || meepleColor === "Blue") {
    alert("Congratulations on choosing blue! You must be feeling peaceful today. Next, you will decide how you would like to move forward on the starting tile.");
  } else if (meepleColor === "green" || meepleColor === "Green") {
    alert("Congratulations on choosing green! You must be full of life today. Next, you will decide how you would like to move forward on the starting tile.");
  } else if (meepleColor === "black" || meepleColor === "Black") {
    alert("Congratulations on choosing black! You must be feeling mysterious today. Next, you will decide how you would like to move forward on the starting tile.");
  } else if (meepleColor === "yellow" || meepleColor === "Yellow") {
    alert("Congratulations on choosing yellow! You must be happy today. Next, you will decide how you would like to move forward on the starting tile.");
  } else if (meepleColor === "red" || meepleColor === "Red") {
    alert("Congratulations on choosing red! You must be angry today. Next, you will decide how you would like to move forward on the starting tile.");
  };


  var startTile = prompt("Choose wisely, for the first tile you may place a" + meepleColor + " meeple on the: road, city or field.");
  if (startTile === "road" || startTile === "Road") {
    alert("You have not chosen wisely. Alongside the road you became a thief and were thrown in jail. Game over!");
    return false;
  } else if (startTile === "city" || startTile === "City") {
    alert("Splendid choice! You have started building a city. The next tile will be chosen at random by you.");
  } else if (startTile === "field" || startTile === "Field") {
    alert("Splendid choice! You have started a farm. The next tile will be chosen at random by you.");
  };

  //var tileType = ["road", "monastery", "city", "field"];

  var tileChoice = prompt("The next tile chooses your fate. Roll the imaginary die. Choose: 1, 2, 3 or 4.");
  if (tileChoice === "1") {
    alert("You have not chosen wisely. You have randomly chosen the road tile. Alongside the road you became a thief and were thrown in jail. Game over! (Click OK to see your score!)");
  }
  else if (tileChoice === "2") {
    alert("Splendid choice, again! You have randomly chosen the monastery tile. You have become a monk and will live for all of eternity. You win! (Click OK to see your score!)");
  }
  else if (tileChoice === "3") {
    alert("You have not chosen wisely. You have randomly chosen the city tile. You have become a knight and ruled your city poorly. The citizens have overpowered you and sent you to the guillotine. Game over! (Click OK to see your score!)");
  }
  else if (tileChoice === "4") {
    alert("Splendid choice, again! You have randomly chosen the field tile. You have become a farmer and shall provide food for your family evermore. You win! (Click OK to see your score!)");
  }


  // var name = prompt("What is your name?");

  // console.log("Hi " + name + "!");

  // var meepleTitle = ["Thief", "Monk", "Knight", "Farmer"];
})();
