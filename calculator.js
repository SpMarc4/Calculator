function add(a,b) {
    let result = Math.round((Number(a) + Number(b))*100)/100
    return String(result)
};

function subtract(a,b) {
    let result = Math.round((Number(a) - Number(b))*100)/100
    return String(result)
};

function multiply(a,b) {
    let result = Math.round((Number(a) * Number(b))*100)/100
    return String(result)
};

function divide(a,b) {
    let result = Math.round((Number(a) / Number(b))*100)/100
    return String(result)
};


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
        if (b == '0') 
            {return 'Error: Division by 0'};
        return divide(a,b);
    }

    else {
        
        console.log("Invalid Operator")
        return a;
    }
    

};



// Select numbers from the DOM

let numbers = document.querySelectorAll(".num");


let operands = document.querySelectorAll(".op");

// Select display from the DOM

let display = document.querySelector(".display");

// Select special characters from the DOM

let extraButtons = document.querySelectorAll(".eb")

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

function operandUpdate (opClicked) {
    // If the operand is != ''  operate value 1 and value 2
    // Update value 1 to the result of the operation
    if ((operand != '') && (value1 != '') && (value2 != '')) {
        value1 = operate(value1,value2,operand);
            
        // Update value 2 to ''
        value2 = '';
        operand = '';
        
    }

    else if ((operand == '') && (value1 != '')) {
        operand = opClicked
    }
    
    }

function valueUpdate () {
    value1 = operate(value1,value2,operand);
            
    // Update value 2 to ''
    value2 = '';
    operand = '';
}

// We create an event listener to update the operand when it's clicked

operands.forEach( function (op) {
        op.addEventListener("click", 
            function () {
                operandUpdate(op.textContent);
                updateDisplay();}
            );
    })



// The undo function will extract the last character of the display.
// But it's important to update the values and operand. So it's
// necesary to know which is the last non Null value. We are going
// to extract characters from the end to the start.
// value2 -> operand -> value1

function undo() {
    if (value2 != '') {
        value2 = value2.slice(0,value2.length -1);
    }

    else if (operand != '') {
        operand = '';
    }

    else if (value1 != '') {
        value1 = value1.slice(0,value1.length -1);

    };
    updateDisplay();
};

// The function clear will be responsible of reset all the values

function clear() {
    // Reset of the values and operand
    value1 = '';
    value2 = '';
    operand = ''; 

};


// We create an event listener to apply the functions of the extra
// buttons.

extraButtons.forEach(
    function (eb) {
        if (eb.textContent == 'Undo') {
            eb.addEventListener("click", () => undo());
        }

        else if (eb.textContent == 'Clear') {
            eb.addEventListener("click", function () {
                clear();
                updateDisplay();
            });
        }
        
        else if (eb.textContent == '=') {
            eb.addEventListener("click", function() 
                {   valueUpdate(operand);
                    updateDisplay();
                    clear();
                });
        }
    }
)


