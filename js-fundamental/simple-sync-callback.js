const calculator = (number1, number2, operation, bahasa = indonesia) => {
    const result = operation(number1, number2);
    bahasa(result);
};

const indonesia = (result) => {
    console.log(`hasilnya adalah ${result}`);
};

const english = (result) => {
    console.log(`the result is ${result}`);
};

const add = (number1, number2) => {
    return number1 + number2;
};

const subtract = (number1, number2) => {
    return number1 - number2;
};

const bagi = (number1, number2) => {
    return number1 / number2;
};

calculator(3, 9, add);
calculator(42, 2, subtract, english);
calculator(4, 2, bagi);
