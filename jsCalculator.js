function calculator() {
    let num1 = parseFloat(prompt("Enter first number:"));
    let operator = prompt("Enter operator (+, -, *, /):");
    let num2 = parseFloat(prompt("Enter second number:"));
    
    let result;
    
    if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid input! Please enter numbers only.");
        return;
    }
    
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert("Cannot divide by zero!");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("Invalid operator! Use +, -, *, or /.");
            return;
    }
    
    alert("Result: " + result);
}

calculator();
