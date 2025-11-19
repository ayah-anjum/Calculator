let display = document.getElementById('display');
let currentExpression = '';

function appendToDisplay(value) {
    currentExpression += value;
    display.innerText = currentExpression;
}

function clearDisplay() {
    currentExpression = '';
    display.innerText = '';
}

function backspace() {
    currentExpression = currentExpression.slice(0, -1);
    display.innerText = currentExpression;
}

function calculate() {
    try {
        let result = eval(currentExpression);
        display.innerText = result;
        currentExpression = result.toString();
    } catch (error) {
        display.innerText = 'Error';
        currentExpression = '';
    }
}
