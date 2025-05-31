let correctNumber;
let chancesLeft;

function startGame() {
  correctNumber = Math.floor(Math.random() * 100) + 1;
  chancesLeft = 5;
  document.getElementById("message").textContent = "";
  document.getElementById("chances").textContent = "Chances Left: " + chancesLeft;
  document.getElementById("replayBtn").style.display = "none";
  document.getElementById("guessInput").disabled = false;
  document.getElementById("guessInput").value = '';
}

function submitGuess() {
  const userGuess = Number(document.getElementById("guessInput").value);
  const message = document.getElementById("message");

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    message.textContent = "Please enter a valid number between 1 and 100.";
    message.className = "error";
    return;
  }

  if (userGuess === correctNumber) {
    message.textContent = "🎉 Congratulations! You guessed the correct number!";
    message.className = "success";
    document.getElementById("replayBtn").style.display = "inline-block";
    document.getElementById("guessInput").disabled = true;
  } else {
    chancesLeft--;
    if (chancesLeft > 0) {
      message.textContent = userGuess > correctNumber 
        ? "Too high! Try a lower number." 
        : "Too low! Try a higher number.";
      message.className = "error";
      document.getElementById("chances").textContent = "Chances Left: " + chancesLeft;
    } else {
      message.textContent = `💥 Game over! The correct number was ${correctNumber}.`;
      message.className = "error";
      document.getElementById("replayBtn").style.display = "inline-block";
      document.getElementById("guessInput").disabled = true;
      document.getElementById("chances").textContent = "Chances Left: 0";
    }
  }
}

window.onload = startGame;
