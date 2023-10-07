let score = 0;
let num1 = Math.ceil(Math.random() * 10);
let num2 = Math.ceil(Math.random() * 10);
let inputEl = document.getElementById("input"); // The capture from the form input
let operator = "";

// Multiplication data
let question = document.getElementById("question");
let correctAns;

// Listeners
let additionEl = document.getElementById("addition");
let subtractionEl = document.getElementById("subtraction");
let multiplicationEl = document.getElementById("multiplication");
let divisionEl = document.getElementById("division");

const selections = function (operatorName, symbol) {
  document.getElementById("gameArea").classList.remove("hidden");
  operator = operatorName;
  num1 = Math.ceil(Math.random() * 10);
  num2 = Math.ceil(Math.random() * 10);
  document.getElementById("firstNum").textContent = num1;
  document.getElementById("secondNum").textContent = num2;
  document.getElementById("operator").textContent = symbol;

  switch (symbol) {
    case "+":
      correctAns = num1 + num2;
      break;
    case "-":
      correctAns = num1 - num2;
      break;
    case "/":
      correctAns = num1 / num2;
      break;
    case "x":
      correctAns = num1 * num2;
      break;
    // Handle other cases if needed
    default:
      // Handle the default case here (if symbol is not one of the expected values)
      break;
  }

  // if (symbol === "+") correctAns = num1 + num2;
  // if (symbol === "-") correctAns = num1 - num2;
  // if (symbol === "/") correctAns = num1 / num2;
  // if (symbol === "x") correctAns = num1 * num2;
};

additionEl.addEventListener("click", function () {
  selections("addition", "+");
});
subtractionEl.addEventListener("click", function () {
  selections("subtraction", "-");
  console.log(correctAns);
});
multiplicationEl.addEventListener("click", function () {
  selections("multiplication", "x");
});
divisionEl.addEventListener("click", function () {
  selections("division", "/");
});

// Setting the score display content
const scoreDisplay = document.getElementById("score");
scoreDisplay.innerHTML = `Score: ${score}`;

const formEl = document.getElementById("form");
formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  const userAns = +inputEl.value;
  if (userAns === correctAns) {
    score++;
  } else {
    score--;
  }
  const scoreDisplay = document.getElementById("score");
  scoreDisplay.innerHTML = `Score: ${score}`;
  document.getElementById("input").value = "";
  document.getElementById(operator).click();
  // if (operator === "addition") {
  //   document.getElementById("addition").click();
  // } else if (operator === "subtraction") {
  //   document.getElementById("subtraction").click();
  // } else if (operator === "multiplication") {
  //   document.getElementById("multiplication").click();
  // } else {
  //   document.getElementById("division").click();
  // }
});

//Reset button

const resetbutton = document.getElementById("reset");

resetbutton.addEventListener("click", function (e) {
  e.preventDefault();
  score = 0;
  scoreDisplay.innerHTML = `Score: 0`;
  // document.getElementById("gameArea").classList.add("hidden");
});
