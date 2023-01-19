function rockPaperScissors (playerMove) {
  const rock = "Rock";
  const paper = "Paper";
  const scissors = "Scissors";
  

  if (playerMove === "r" || playerMove === "rock") {
    playerMove = rock;
    console.log("You choose Rock");
  } else if (playerMove === "p" || playerMove === "paper") {
    playerMove = paper;
    console.log("You choose Paper");
  } else if (playerMove === "s" || playerMove === "scissors") {
    playerMove = scissors;
    console.log("You choose Scissors");
  } else {
    console.log("Stop trying to cheat, pal! You know the options!");
  }

  let computerRandomNumber = Math.floor(Math.random() * 3) + 1;
  let computerMove = 0;
  switch (computerRandomNumber) {
    case 1:
      computerMove = rock;
      break;
    case 2:
      computerMove = paper;
    case 3:
      computerMove = scissors;
      break;
  }

  console.log(`Mikel Arteta chooses ${computerMove}`);

  if (
    (playerMove === rock && computerMove === scissors) ||
    (playerMove === paper && computerMove === rock) ||
    (playerMove === scissors && computerMove === paper)
  ) {
    console.log("You just won against Arsenal!");
  } else if (
    (playerMove === rock && computerMove === paper) ||
    (playerMove === paper && computerMove === scissors) ||
    (playerMove === scissors && computerMove === rock)
  ) {
    console.log("You lost to the best team in the world!");
  } else if (
    (playerMove === rock && computerMove === rock) ||
    (playerMove === paper && computerMove === paper) ||
    (playerMove === scissors && computerMove === scissors)
  ) {
    console.log("Draw at Emirates stadium");
  }
}

  rockPaperScissors("rock")