const sides = document.querySelectorAll('.side-input');
const hypotenuseBtn = document.querySelector('#hypotenuse-btn');
const outputEl = document.querySelector('#output');

function calculateSumOfSquares(a,b) {
    const sumOfSquares = a*a +b*b;
    return sumOfSquares;
}

function calculateHypotenuse() {
    if (sides[0].value.length === 0 || sides[1].value.length === 0) {
        outputEl.innerText = "Please enter all the fields";
        return;
    }
    if (Number(sides[0].value) <= 0 || Number(sides[1].value) <= 0) {
        outputEl.innerText = "Invalid Data Entred";
        return;
    }
    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value));
    const lengthOfHpotenuse = Math.sqrt(sumOfSquares);
    outputEl.innerText = "The length of hypotenuse is " + lengthOfHpotenuse;;
}

hypotenuseBtn.addEventListener('click',calculateHypotenuse)