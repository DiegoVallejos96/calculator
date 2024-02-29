const screen = document.querySelector('#calculator-screen')

var btnOne = document.querySelector('#n1')
btnOne.addEventListener("click", () => {
    screen.textContent += '1'
})


const btnTwo = document.querySelector('#n2')
btnTwo.addEventListener("click", () => {
    screen.textContent += '2'
})
const btnThree = document.querySelector('#n3')
btnThree.addEventListener("click", () => {
    screen.textContent += '3'
})
const btnFour = document.querySelector('#n4')
btnFour.addEventListener("click", () => {
    screen.textContent += '4'
})
const btnFive = document.querySelector('#n5')
btnFive.addEventListener("click", () => {
    screen.textContent += '5'
})
const btnSix = document.querySelector('#n6')
btnSix.addEventListener("click", () => {
    screen.textContent += '6'
})
const btnSeven = document.querySelector('#n7')
btnSeven.addEventListener("click", () => {
    screen.textContent += '7'
})
const btnEight = document.querySelector('#n8')
btnEight.addEventListener("click", () => {
    screen.textContent += '8'
})
const btnNine = document.querySelector('#n9')
btnNine.addEventListener("click", () => {
    screen.textContent += '9'
})
const btnCe = document.querySelector('#bCE')
btnCe.addEventListener("click", () => {
    screen.textContent = ""
})
const btnAdd = document.querySelector('#bAdd')
btnAdd.addEventListener("click", () => {
    screen.textContent += '+'
})
const btnSubtract = document.querySelector('#bSubs')
btnSubtract.addEventListener("click", () => {
    screen.textContent += '-'
})
const btnMultiply = document.querySelector('#bMult')
btnMultiply.addEventListener("click", () => {
    screen.textContent += '*'
})
const btnDivide = document.querySelector('#bDiv')
btnDivide.addEventListener("click", () => {
    screen.textContent += '/'
})
const btnEqual = document.querySelector('#bEqual')
btnEqual.addEventListener("click", () => {
    screen.textContent += '='
})

const valueScreen = 0





function operate(){
    const firstNumber = prompt('')
    const operator = prompt('')
    const secondNumber = prompt('')
    if (operator === '+'){
        console.log(add(firstNumber,secondNumber));
    }else if (operator === '-'){
        sustract(firstNumber,secondNumber)
    }else if (operator === '*'){
        multiply(firstNumber,secondNumber)
    }else if (operator === '/'){
        divide(firstNumber,secondNumber)
    }
}
//operate()

function add (a,b){
    return console.log(parseInt(a)+parseInt(b)); 
}

function subtract (a,b){
    return console.log(parseInt(a)-parseInt(b)); 
}

function multiply (a,b){
    return console.log(parseInt(a)*parseInt(b)); 
}

function divide (a,b){
    return console.log(parseInt(a)/parseInt(b)); 
}



