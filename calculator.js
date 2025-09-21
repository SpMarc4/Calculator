function add(a,b) {
    let result = Number(a) + Number(b)
    return String(result)
};

function subtract(a,b) {
    let result = Number(a) - Number(b)
    return String(result)
};

function multiply(a,b) {
    let result = Number(a) * Number(b)
    return String(result)
};

function divide(a,b) {
    let result = Number(a) / Number(b)
    return String(result)
};

let firstNum = 0;
let secondNum = 0;
let operator = '+';

function operate (a,b, operator) {
    if (operator == '+') {
        return add(a,b);
    }

    else if (operator == '-') {
        return subtract(a,b);
    }

    else if (operator == '*') {
        return multiply(a,b);
    }

    else if (operator == '/') {
        return divide(a,b);
    }

    else {
        alert("Invalid Operator")
        console.log("Invalid Operator")
        return;
    }
};



// Select numbers from the DOM

let numbers = document.querySelectorAll(".num");


let operands = document.querySelectorAll(".op");

// Select display from the DOM

let display = document.querySelector(".display");

// Select special characters from the DOM

let extraButtons = document.querySelector(".eb")

// Initialize variable value 1 aka accumulator

let value1 = '';

// Initialize variable value 2 aka actualValue

let value2 = '';

// Initialize variable operand

let operand = '';

// Initialize the display

display.textContent = value1+operand+value2;


// Creation of a function to update the display

function updateDisplay() {
    display.textContent = value1+operand+value2;
};


// If there's not operand we accumulate the clicked value in value 1
// else in value 2

function valueAccumulator(value) {
    if (operand == '') {
        value1 += value
        console.log(`Value1 : ${value1}`)
    }
    else {
        value2 += value
        console.log(`Value2 : ${value2}`)

    }
    updateDisplay()

}

// We create an event to change value 1 or value 2

numbers.forEach( function (num) {
    if ((num.textContent != ' ')) 
        {
        num.addEventListener("click", 
            function () {
                valueAccumulator(num.textContent);}
            );
        }
    })


// Operate if the operand is not null

function operandOperate (opClicked) {
    // If the operand is != ''  operate value 1 and value 2
    if (operand != '') {
    
        // Update value 1 to the result of the operation
        value1 = operate(value1,value2,operand);
        
        // Update value 2 to ''
        value2 = '';
    }
}

// Update the operand

function operandUpdate (opClicked) {
    
    // Update the operation
    operand = opClicked
    
    // Display of the values
    updateDisplay()

}

// We create an event listener to update the operand when it's clicked

operands.forEach( function (op) {
        op.addEventListener("click", 
            function () {
                operandOperate(op.textContent);
                operandUpdate(op.textContent);}
            );
    })



// The undo function will extract the last character of the display.
// But it's important to update the values and operand. So it's
// necesary to know which is the last non Null value. We are going
// to extract characters from the end to the start.
// value2 -> operand -> value1


// The function clear will be responsible of reset all the values

function clear() {
    // Reset of the values and operand
    value1 = '';
    value2 = '';
    operand = '';
    updateDisplay()

}



