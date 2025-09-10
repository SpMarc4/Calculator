function add(a,b) {
    return a + b
};

function subtract(a,b) {
    return a - b
};

function multiply(a,b) {
    return a * b
};

function divide(a,b) {
    return a / b
};

let firstNum = 0;
let secondNum = 0;
let operator = '+';

function operate (a,b, operator) {
    if (operator == '+') {
        add(a,b);
    }

    else if (operator == '-') {
        subtract(a,b);
    }

    else if (operator == '*') {
        multiply(a,b);
    }

    else if (operator == '/') {
        divide(a,b);
    }

    else {
        alert("Invalid Operator")
        console.log("Invalid Operator")
        return;
    }
};

function display_num (num){
    // Select the element "display" of the calculator
    let display = document.querySelector(".display");
    // Extract and save the value of the number clicked
    numVal = num.target.textContent;
    console.log(numVal)
    // Add the content of the number clicked in the "display element"
    display.textContent += numVal;

};

let numbers = document.querySelectorAll(".num");
numbers.forEach( function (elem) {
    if ((elem.textContent != ' ')) 
        {
            console.log(elem.textContent)
            elem.addEventListener("click",display_num)}
    })
