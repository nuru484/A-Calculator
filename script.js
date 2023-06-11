let num1;
let num2;
let operator;


function addition(num1,num2){
    return num1 + num2;
};

function subtraction(num1, num2){
    return (num1 - num2);
};

function multiplication(num1, num2){
    return (num1 * num2);
};

function division(num1, num2){
    return (num1 / num2);
};

function operate(operator, num1, num2) {
    let result;
  
    if (operator === '+') {
      result = addition(num1, num2);
    } else if (operator === '-') {
      result = subtraction(num1, num2);
    } else if (operator === '*') {
      result = multiplication(num1, num2);
    } else if (operator === '/') {
      result = division(num1, num2);
    } else {
      console.log('Invalid operator');
      return;
    }
    return result;
  };

  console.log(operate('/', 2, 2));
  