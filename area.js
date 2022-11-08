const base = document.querySelector(".base");
const height = document.querySelector(".height");
const output = document.querySelector("#output");
const area_btn = document.querySelector("#area-btn");

function calculateArea() {
  if (base.value.length === 0 || height.value.length === 0) {
    output.innerText = "Empty fields are not allowed!";
    return;
  }
  if (Number(base.value) <= 0 || Number(height.value) <= 0) {
    output.innerText = "Invalid data entred";
    return;
  }
  const area = 0.5 * (base.value * height.value);
  output.innerText = "The area of the triangle is " + area;
}

area_btn.addEventListener("click", calculateArea);