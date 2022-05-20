let errorParagrah = document.getElementById("error")

function purchase() {
    console.log("button click")
    errorParagrah.textContent = "Something went wrong, please try again"
}

let num1 = 8
let num2 = 2

document.getElementById("num1").textContent = num1
document.getElementById("num2").textContent = num2

let sum = document.getElementById("sum")

function addF() {
    let res = num1 + num2
    sum.textContent = "Sum: " + res
}

function subF() {
    let res = num1 - num2
    sum.textContent = "Sum: " + res
}

function divF() {
    let res = num1 / num2
    sum.textContent = "Sum: " + res
}

function mulF() {
    let res = num1 * num2
    sum.textContent = "Sum: " + res
}