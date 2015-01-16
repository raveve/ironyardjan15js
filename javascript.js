
(function () {
  "use strict";


  var ready = confirm("Salutations! Are you ready to venture into the South of France?");
  if (ready === true) {
    alert("Let's saddle up!");
  } else {
    alert("Unfortunately, you must go. Saddle up!");
  };


  alert("First, you must choose your meeple.");


  var meepleColor = prompt("What color of meeple do you desire? You may choose from: blue, green, black, yellow or red.").toLowerCase();
  if (meepleColor === "blue") {
    alert("Congratulations on choosing blue! You must be feeling peaceful today. Next, you will decide how you would like to move forward on the starting tile.");
  } else if (meepleColor === "green") {
    alert("Congratulations on choosing green! You must be full of life today. Next, you will decide how you would like to move forward on the starting tile.");
  } else if (meepleColor === "black") {
    alert("Congratulations on choosing black! You must be feeling mysterious today. Next, you will decide how you would like to move forward on the starting tile.");
  } else if (meepleColor === "yellow") {
    alert("Congratulations on choosing yellow! You must be happy today. Next, you will decide how you would like to move forward on the starting tile.");
  } else if (meepleColor === "red") {
    alert("Congratulations on choosing red! You must be angry today. Next, you will decide how you would like to move forward on the starting tile.");
  };


  var startTile = prompt("Choose wisely, for the first tile you may place a " + meepleColor + " meeple on the: road, city or field.").toLowerCase();
  if (startTile === "road") {
    alert("You have not chosen wisely. Alongside the road you became a thief and were thrown in jail. Game over!");
    return false;
  } else if (startTile === "city") {
    alert("Splendid choice! You have started building a city. The next tile will be chosen at random by you.");
  } else if (startTile === "field") {
    alert("Splendid choice! You have started a farm. The next tile will be chosen at random by you.");
  };


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


  var p1, p2, p3, p4;

  var pointsP1 = {
    true: 25,
    false: 0
  };

  Object.keys(pointsP1).forEach(function(key) {
    if(ready) {
      p1 = 25;
    }
  });

  var pointsP2 = {
    blue: 15,
    green: 25,
    black: 10,
    yellow: 20,
    red: 5
  };

  Object.keys(pointsP2).forEach(function(key) {
    if(meepleColor ===  key) {
      p2 = pointsP2[key];
    }
  });

  var pointsP3 = {
    road: 0,
    city: 15,
    field: 25
  };

  Object.keys(pointsP3).forEach(function(key) {
    if(startTile ===  key) {
      p3 = pointsP3[key];
    }
  });

  var pointsP4 = {
    "1": 10,
    "2": 25,
    "3": 0,
    "4": 20
  };

  Object.keys(pointsP4).forEach(function(key) {
    if(tileChoice ===  key) {
      p4 = pointsP4[key];
    }
  });

  var score = {
    sum: function(p1, p2, p3, p4) {
      return p1 + p2 + p3 + p4;
    }
  };


  var scoreMessage = alert("Your final score is: " + score.sum(p1, p2, p3, p4) + " / 100. Thanks for playing!");

})();
