// Select DOM Elements

const display = document.querySelector("#display");

const numberButtons = document.querySelectorAll(".number");

const operatorButtons = document.querySelectorAll(".operator");

const equalsButton = document.querySelector("#equals");

const clearButton = document.querySelector("#clear");

// Calculator Variables

let currentInput = "";

let previousInput = "";

let operator = "";

// Update Display Function

function updateDisplay() {
    display.textContent = currentInput || "0";
}

// Number Button Events

numberButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const value = button.textContent;

        // Prevent multiple decimal points

        if (value === "." && currentInput.includes(".")) {
            return;
        }

        currentInput += value;

        updateDisplay();

    });

});

// Operator Button Events

operatorButtons.forEach((button) => {

    button.addEventListener("click", () => {

        // Guard Clause

        if (currentInput === "") {
            return;
        }

        previousInput = currentInput;

        operator = button.textContent;

        currentInput = "";

    });

});

// Equals Button

equalsButton.addEventListener("click", () => {

    // Guard Clause

    if (previousInput === "" || currentInput === "") {
        return;
    }

    const num1 = parseFloat(previousInput);

    const num2 = parseFloat(currentInput);

    let result;

    switch (operator) {

        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "*":
            result = num1 * num2;
            break;

        case "/":

            if (num2 === 0) {

                display.textContent = "Error";

                currentInput = "";

                previousInput = "";

                operator = "";

                return;

            }

            result = num1 / num2;

            break;

        default:
            return;

    }

    currentInput = result.toString();

    previousInput = "";

    operator = "";

    updateDisplay();

});

// Clear Button

clearButton.addEventListener("click", () => {

    currentInput = "";

    previousInput = "";

    operator = "";

    updateDisplay();

});