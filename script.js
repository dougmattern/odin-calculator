// calculator

// button constants

const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const decimal = document.querySelector("#decimal");
const equals = document.querySelector("#equals");
const multiply = document.querySelector("#multiply");
const division = document.querySelector("#division");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const clear = document.querySelector("#clear");
const del = document.querySelector("#del");
const numbers = document.querySelector("#numbers");
const memory = document.querySelector("#memory");
const icons = document.querySelector("#icons");

let numberDisplay = "0";
let numberMemory = "0";
let currentOperator;
let newNumber = "0";

// dark mode

const themeSwitch = document.getElementById("input");

themeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark-theme");
});

//button input functions

one.onclick = () => input1();
two.onclick = () => input2();
three.onclick = () => input3();
four.onclick = () => input4();
five.onclick = () => input5();
six.onclick = () => input6();
seven.onclick = () => input7();
eight.onclick = () => input8();
nine.onclick = () => input9();
zero.onclick = () => input0();
del.onclick = () => deleteNumber();
clear.onclick = () => clearNumber();
decimal.onclick = () => inputDecimal();

// operator button input functions

plus.addEventListener("click", function () {
  preOperate();
  setOperator("addition");
});

minus.addEventListener("click", function () {
  preOperate();
  setOperator("subtraction");
});

multiply.addEventListener("click", function () {
  preOperate();
  setOperator("multiply");
});

division.addEventListener("click", function () {
  preOperate();
  setOperator("division");
});

equals.addEventListener("click", function () {
  if (numberMemory != "0") {
    preOperate();
    numberDisplay = newNumber.toString();
    numberMemory = "0";
    activateIcon("none");
    update();
  } else {
    numberDisplay = numberDisplay;
  }
});

//input functions

function input1() {
  if (numberDisplay == "0") {
    numberDisplay = "1";
    update();
  } else {
    numberDisplay = numberDisplay + "1";
    update();
  }
}

function input2() {
  if (numberDisplay == "0") {
    numberDisplay = "2";
    update();
  } else {
    numberDisplay = numberDisplay + "2";
    update();
  }
}

function input3() {
  if (numberDisplay == "0") {
    numberDisplay = "3";
    update();
  } else {
    numberDisplay = numberDisplay + "3";
    update();
  }
}

function input4() {
  if (numberDisplay == "0") {
    numberDisplay = "4";
    update();
  } else {
    numberDisplay = numberDisplay + "4";
    update();
  }
}

function input5() {
  if (numberDisplay == "0") {
    numberDisplay = "5";
    update();
  } else {
    numberDisplay = numberDisplay + "5";
    update();
  }
}

function input6() {
  if (numberDisplay == "0") {
    numberDisplay = "6";
    update();
  } else {
    numberDisplay = numberDisplay + "6";
    update();
  }
}

function input7() {
  if (numberDisplay == "0") {
    numberDisplay = "7";
    update();
  } else {
    numberDisplay = numberDisplay + "7";
    update();
  }
}

function input8() {
  if (numberDisplay == "0") {
    numberDisplay = "8";
    update();
  } else {
    numberDisplay = numberDisplay + "8";
    update();
  }
}

function input9() {
  if (numberDisplay == "0") {
    numberDisplay = "9";
    update();
  } else {
    numberDisplay = numberDisplay + "9";
    update();
  }
}

function input0() {
  if (numberDisplay == "0") {
    numberDisplay = "0";
    update();
  } else {
    numberDisplay = numberDisplay + "0";
    update();
  }
}

function inputDecimal() {
  if (numberDisplay.includes(".")) {
    update();
  } else if (numberDisplay == "0") {
    numberDisplay = "0.";
    update();
  } else {
    numberDisplay = numberDisplay + ".";
    update();
  }
}

function deleteNumber() {
  if (numberDisplay == "0") {
    numberDisplay = "0";
  } else {
    numberDisplay = numberDisplay.slice(0, numberDisplay.length - 1);
    update();
  }
}

function clearNumber() {
  numberDisplay = "0";
  numberMemory = "0";
  setOperator("none");
  update();
}

// check if number in memory and store it or calculate pair and store it

function preOperate() {
  removeIcon();
  if (numberMemory != "0") {
    numberDisplay = parseFloat(numberDisplay);
    numberMemory = operate(numberDisplay, numberMemory, currentOperator);
    numberDisplay = "0";
    update();
  } else {
    numberMemory = parseFloat(numberDisplay);
    numberDisplay = "0";
  }
}

// operator icon display and reset

function setOperator(operator) {
  removeIcon();
  activateIcon(operator);
  currentOperator = operator;
}

function removeIcon(){
  iconplus.classList.remove("active");
  iconminus.classList.remove("active");
  iconmultiply.classList.remove("active");
  icondivide.classList.remove("active");
}

function activateIcon(operator) {
  if (operator == "addition") {
    iconplus.classList.add("active");
  } else if (operator == "subtraction") {
    iconminus.classList.add("active");
  } else if (operator == "multiply") {
    iconmultiply.classList.add("active");
  } else if (operator == "division") {
    icondivide.classList.add("active");
  }
}

//math functions

function add(a, b) {
  newNumber = a + b;
}

function subtract(b, a) {
  newNumber = a - b;
}

function multiplication(a, b) {
  newNumber = +(a * b).toFixed(6);
}

// divide by zero snarky message

function divide(b, a) {
  if (b == "0") {
    newNumber = "Genius here / 0";
  } else {
    newNumber = +(a / b).toFixed(6);
  }
}

function operate(numberDisplay, numberMemory, operator) {
  if (operator == "addition") {
    add(numberDisplay, numberMemory);
  } else if (operator == "subtraction") {
    subtract(numberDisplay, numberMemory);
  } else if (operator == "multiply") {
    multiplication(numberDisplay, numberMemory);
  } else if (operator == "division") {
    divide(numberDisplay, numberMemory);
  }
  return newNumber;
}

// refresh screen numbers and variable numbers

function update() {
  numbers.innerText = numberDisplay;
  memory.innerText = numberMemory;
}

update();
