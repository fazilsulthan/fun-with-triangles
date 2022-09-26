const inputs = document.querySelectorAll("#angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector("#output");
function calculateSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}
function isTriangle() {
  if (inputs[0].value > 0 && inputs[1].value > 0 && inputs[2].value > 0) {
    const sumOfAngles = calculateSumOfAngles(
      Number(inputs[0].value),
      Number(inputs[1].value),
      Number(inputs[2].value)
    );
    if (sumOfAngles === 180) {
      outputEl.innerText = "The angles form a triangle";
    } else {
      outputEl.innerText = "The angles dont form a triangle";
    }
  } else {
    outputEl.innerText =
      "Angles cannot be 0 and -ve values, Enter a valid number!!";
  }
}
isTriangleBtn.addEventListener("click", isTriangle);
