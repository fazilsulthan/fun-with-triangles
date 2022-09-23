const sides = document.querySelectorAll("#side-input");
const areaBtn = document.querySelector("#area-btn");
const outputEl = document.querySelector("#output");
function calculateArea(a, b) {
  const areaTriangle = (1 / 2) * a * b;
  return areaTriangle.toFixed(2);
}
function calculateAreaOfTriangle() {
  if ((sides[0].value, sides[1].value >= 1)) {
    const areaOfTriangle = calculateArea(
      Number(sides[0].value),
      Number(sides[1].value)
    );
    outputEl.innerText = "The area of the triangle is" + " " + areaOfTriangle;
  } else {
    // console.log("test");
    outputEl.innerText = " Enter a Positive Value";
  }
}
areaBtn.addEventListener("click", calculateAreaOfTriangle);
