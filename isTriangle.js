const inputs = document.querySelectorAll('.angle-input');
const isTriangleBtn = document.querySelector('#is-triangle-btn');
const outputEl = document.querySelector('#output');

function calculateSumOfAngles(angle1,angle2,angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles
}

function isTriangle() {
    if (
        inputs[0].value.length === 0 || inputs[1].value.length === 0 || inputs[2].value.length === 0) {
        outputEl.innerText = "Please Enter all the fields";
        return;
    }
    if (Number(inputs[0].value) <= 0 || Number(inputs[1].value) <= 0 || Number(inputs[2].value) <= 0) {
        outputEl.innerText = "Invalid Data Entered";
        return;
    }
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
    if(sumOfAngles === 180)
    {
        outputEl.innerText = "The angles form a triangle";
    }
    else
    {
        outputEl.innerText = "The angles don't form a triangle";
    }
}

isTriangleBtn.addEventListener("click",isTriangle)

// calculateSumOfAngles(50,60,70)