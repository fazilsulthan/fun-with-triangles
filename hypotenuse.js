const sides = document.querySelectorAll("#side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputEl = document.querySelector("#output");
function calculateSumOfSquares(a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}
function calculateHypotenuse() {
  if ((sides[0].value, sides[1].value >= 1)) {
    const sumOfSquares = calculateSumOfSquares(
      Number(sides[0].value),
      Number(sides[1].value)
    );
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares).toFixed(2);
    outputEl.innerText =
      "The length of hypotenuse is" + " " + lengthOfHypotenuse;
  } else {
    outputEl.innerText = "Enter a Positive Value";
  }
}
hypotenuseBtn.addEventListener("click", calculateHypotenuse);
