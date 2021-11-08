// calculator

const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const decimal = document.querySelector('#decimal');
const equals = document.querySelector('#equals');
const multiply = document.querySelector('#multiply');
const division = document.querySelector('#division');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const clear = document.querySelector('#clear');
const del = document.querySelector('#del');
const numbers = document.querySelector('#numbers');
const icons = document.querySelector('#icons');

let numberDisplay = '0';
let numberMemory = '0';
let currentOperator;
let newNumber = '0';


one.onclick = () => input1()
two.onclick = () => input2()
three.onclick = () => input3()
four.onclick = () => input4()
five.onclick = () => input5()
six.onclick = () => input6()
seven.onclick = () => input7()
eight.onclick = () => input8()
nine.onclick = () => input9()
zero.onclick = () => input0()
del.onclick = () => deleteNumber()
clear.onclick = () => clearNumber()
decimal.onclick = () => inputDecimal()

plus.addEventListener('click', function() {
    setOperator('addition');
    preOperate();
})

minus.addEventListener('click', function() {
    setOperator('subtraction');
    preOperate();
})

multiply.addEventListener('click', function() {
    setOperator('multiply');
    preOperate();
})

division.addEventListener('click', function() {
    setOperator('division');
    preOperate();
})

equals.addEventListener('click', function() {
    preOperate()
    numberDisplay = newNumber
    numberMemory = '0'
    update()
    
    
})

function input1() {
    if (numberDisplay == '0') {
        numberDisplay = '1';
        update()
    }
    else {
        numberDisplay = numberDisplay + '1';
        update()
    }
}

function input2() {
    if (numberDisplay == '0') {
        numberDisplay = '2';
        update()
    }
    else {
        numberDisplay = numberDisplay + '2';
        update()
    }
}

function input3() {
    if (numberDisplay == '0') {
        numberDisplay = '3';
        update()
    }
    else {
        numberDisplay = numberDisplay + '3';
        update()
    }
}

function input4() {
    if (numberDisplay == '0') {
        numberDisplay = '4';
        update()
    }
    else {
        numberDisplay = numberDisplay + '4';
        update()
    }
}

function input5() {
    if (numberDisplay == '0') {
        numberDisplay = '5';
        update()
    }
    else {
        numberDisplay = numberDisplay + '5';
        update()
    }
}

function input6() {
    if (numberDisplay == '0') {
        numberDisplay = '6';
        update()
    }
    else {
        numberDisplay = numberDisplay + '6';
        update()
    }
}

function input7() {
    if (numberDisplay == '0') {
        numberDisplay = '7';
        update()
    }
    else {
        numberDisplay = numberDisplay + '7';
        update()
    }
}

function input8() {
    if (numberDisplay == '0') {
        numberDisplay = '8';
        update()
    }
    else {
        numberDisplay = numberDisplay + '8';
        update()
    }
}

function input9() {
    if (numberDisplay == '0') {
        numberDisplay = '9';
        update()
    }
    else {
        numberDisplay = numberDisplay + '9';
        update()
    }
}

function input0() {
    if (numberDisplay == '0') {
        numberDisplay = '0';
        update()
    }
    else {
        numberDisplay = numberDisplay + '0';
        update()
    }
}

function inputDecimal() {
    if (numberDisplay == '0') {
        numberDisplay = '0.';
        update()
    }
    else {
        numberDisplay = numberDisplay + '.';
        update()
    }
}

function deleteNumber() {
    if (numberDisplay == '0') {
        numberDisplay = '0';
        update()
        }
    else {
        numberDisplay = numberDisplay.slice(0, (numberDisplay.length - 1))
        update()
        }
    }

function clearNumber() {
    numberDisplay = '0';
    numberMemory = '0';
    setOperator('none')
    update()
}

function preOperate() {
    if(numberMemory != '0') {
        numberDisplay = parseFloat(numberDisplay)
        numberMemory = operate(numberDisplay, numberMemory, currentOperator)
        update()
    }
    else {
    numberMemory = parseFloat(numberDisplay)
    numberDisplay = '0'
    }  
}


function setOperator(operator) {
    currentOperator = operator
}

function add(a, b) {
    newNumber = a + b 
}

function subtract(b, a) {
    newNumber = a - b
}

function multiplication(a, b) {
    newNumber = a * b
}

function divide(b, a) {
    newNumber = (a / b).toFixed(10)
}

function operate(numberDisplay, numberMemory, operator) {
    if(operator == 'addition') {
        add(numberDisplay, numberMemory)
    }
    else if(operator == 'subtraction') {
        subtract(numberDisplay, numberMemory)
    }
    else if(operator == 'multiply') {
        multiplication(numberDisplay, numberMemory)
    }
    else if(operator == 'division') {
        divide(numberDisplay, numberMemory)
    }
    return newNumber
}

function update() {
    numbers.innerText = numberDisplay;
}

update()