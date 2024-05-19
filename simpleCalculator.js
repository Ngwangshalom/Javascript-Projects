const num1 = parseFloat(prompt("Enter first number:"));
const operator = prompt("Enter operator (+, -, *, /):");
const num2 = parseFloat(prompt("Enter second number:"));
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
