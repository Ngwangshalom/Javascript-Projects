const num1 = parseFloat(log("Enter first number:"));
const operator = log("Enter operator (+, -, *, /):");
const num2 = parseFloat(log("Enter second number:"));
let result;

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
        result = num1 / num2;
        break;
    default:
        console.log("Invalid operator");
        break;
}

if (result !== undefined) {
    console.log(`${num1} ${operator} ${num2} = ${result}`);
}
