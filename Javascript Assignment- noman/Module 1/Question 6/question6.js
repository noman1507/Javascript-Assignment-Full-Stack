const doCalculation = confirm("Should I calculate the square root?");
const resultElement = document.getElementById("result");

if (doCalculation) {
  const number = parseFloat(prompt("Enter a number:"));

  if (number < 0) {
    resultElement.textContent = "The square root of a negative number is not defined.";
  } else {
    const sqrt = Math.sqrt(number);
    resultElement.textContent = `The square root of ${number} is ${sqrt.toFixed(2)}.`;
  }
} else {
  resultElement.textContent = "The square root is not calculated.";
}
