//sudo code

//Grab each of the elements
// from the 'document'
//and store then in variables
//const leftInputElement = document.getElementById("leftInput");
// left input
//right input
//add button
//subtract button
//multiply button
//divide button
//result

const leftInputElement = document.getElementById("leftValue");
const rightInputElement = document.getElementById("rightValue");
const addButtonElement = document.getElementById("addButton");
const subtractButtonElement = document.getElementById("subtractButton");
const multiplyButtonElement = document.getElementById("multiplyButton");
const divideButtonElement = document.getElementById("divideButton");
const resultElement = document.getElementById("result");

// add event listeners to each
//math operator buttons
addButtonElement.addEventListener("click", function () {
  //grab left input value
  const leftValue = Number(leftInputElement.value);
  //grab right input value
  const rightValue = Number(rightInputElement.value);

  //add the two -->  call our add() function with the two values
  const result = add(leftValue, rightValue);

  //set the result into the result <span>
  resultElement.innerText = result;
});

subtractButtonElement.addEventListener("click", function () {
  //grab left input value
  const leftValue = Number(leftInputElement.value);
  //grab right input value
  const rightValue = Number(rightInputElement.value);

  //subtract the two -->  call our subtract () function with the two values
  const result = subtract(leftValue, rightValue);

  //set the result into the result <span>
  resultElement.innerText = result;
});

multiplyButtonElement.addEventListener("click", function () {
  //grab left input value
  const leftValue = Number(leftInputElement.value);
  //grab right input value
  const rightValue = Number(rightInputElement.value);

  //Multiply the two -->  call our Multiply() function with the two values
  const result = multiply(leftValue, rightValue);

  //set the result into the result <span>
  resultElement.innerText = result;
});

divideButtonElement.addEventListener("click", function () {
  //grab left input value
  const leftValue = Number(leftInputElement.value);
  //grab right input value
  const rightValue = Number(rightInputElement.value);

  //divide the two -->  call our divide() function with the two values
  const result = divide(leftValue, rightValue);

  //set the result into the result <span>
  resultElement.innerText = result;
});

//Create 4 functions - one for each
//math operator
function add(leftValue, rightValue) {
  const result = leftValue + rightValue;

  return result;
}

function subtract(leftValue, rightValue) {
  const result = leftValue - rightValue;

  return result;
}

function multiply(leftValue, rightValue) {
  const result = leftValue * rightValue;

  return result;
}

function divide(leftValue, rightValue) {
  const result = leftValue / rightValue;

  return result;
}

console.log(divide(leftValue, rightValue));
