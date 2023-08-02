function calculator(num1, num2, op) {
    if (isNaN(num1) || isNaN(num2)) {
        return "It's not a number";
    }
    
    switch (op) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return 'Cannot divide by zero';
            }
            return num1 / num2;
        default:
            return 'Invalid operator';
    }
}