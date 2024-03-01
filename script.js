const screen = document.querySelector('#calculator-screen')

const btnZero = document.querySelector('#n0')
btnZero.addEventListener("click", () => {
    screen.textContent += '0'
    number += '0'
    valueScreen.push(number)
    console.log(valueScreen);
})

const btnOne = document.querySelector('#n1')
btnOne.addEventListener("click", () => {
    screen.textContent += '1'
    number += '1'
    valueScreen.push(number)
    console.log(valueScreen);
})

const btnTwo = document.querySelector('#n2')
btnTwo.addEventListener("click", () => {
    screen.textContent += '2'
    number += '2'
    valueScreen.push(number)
    console.log(valueScreen);

})
const btnThree = document.querySelector('#n3')
btnThree.addEventListener("click", () => {
    screen.textContent += '3'
    number += '3'
    valueScreen.push(number)
    console.log(valueScreen);
})
const btnFour = document.querySelector('#n4')
btnFour.addEventListener("click", () => {
    screen.textContent += '4'
    number += '4'
    valueScreen.push(number)
    console.log(valueScreen);
})
const btnFive = document.querySelector('#n5')
btnFive.addEventListener("click", () => {
    screen.textContent += '5'
    number += '5'
    valueScreen.push(number)
    console.log(valueScreen);
})
const btnSix = document.querySelector('#n6')
btnSix.addEventListener("click", () => {
    screen.textContent += '6'
    number += '6'
    valueScreen.push(number)
    console.log(valueScreen);
})
const btnSeven = document.querySelector('#n7')
btnSeven.addEventListener("click", () => {
    screen.textContent += '7'
    number += '7'
    valueScreen.push(number)
    console.log(valueScreen);
})
const btnEight = document.querySelector('#n8')
btnEight.addEventListener("click", () => {
    screen.textContent += '8'
    number += '8'
    valueScreen.push(number)
    console.log(valueScreen);
})
const btnNine = document.querySelector('#n9')
btnNine.addEventListener("click", () => {
    screen.textContent += '9'
    number += '9'
    valueScreen.push(number)
    console.log(valueScreen);
})
const btnCe = document.querySelector('#bCE')
btnCe.addEventListener("click", () => {
    screen.textContent = ""
})
const btnAdd = document.querySelector('#bAdd')
btnAdd.addEventListener("click", () => {
    screen.textContent += '+'
    let lastValue = valueScreen[valueScreen.length - 1]
    console.log('el ultimo valor es', lastValue);
    valueScreen = []
    valueScreen.push(lastValue,'+')
    console.log(valueScreen);
    number = ''
})
const btnSubtract = document.querySelector('#bSubs')
btnSubtract.addEventListener("click", () => {
    screen.textContent += '-'
    let lastValue = valueScreen[valueScreen.length - 1]
    console.log('el ultimo valor es', lastValue);
    valueScreen = []
    valueScreen.push(lastValue,'-')
    console.log(valueScreen);
    number = ''
})
const btnMultiply = document.querySelector('#bMult')
btnMultiply.addEventListener("click", () => {
    screen.textContent += '*'
    let lastValue = valueScreen[valueScreen.length - 1]
    console.log('el ultimo valor es', lastValue);
    valueScreen = []
    valueScreen.push(lastValue,'*')
    console.log(valueScreen);
    number = ''
})
const btnDivide = document.querySelector('#bDiv')
btnDivide.addEventListener("click", () => {  
    screen.textContent += '/'
    let lastValue = valueScreen[valueScreen.length - 1]
    console.log('el ultimo valor es', lastValue);
    valueScreen = []
    valueScreen.push(lastValue,'/')
    console.log(valueScreen);
    number = ''
})
const btnEqual = document.querySelector('#bEqual')
btnEqual.addEventListener("click", () => {
    screen.textContent = ' '
    operate(valueScreen[0],valueScreen[1],valueScreen[valueScreen.length - 1])
    console.log(valueScreen);
})


let number = ''
// const second = ""
// const operator = ''
let valueScreen = []

// a operate le mando un array con 3 objetos, firstnumber toma el array [1] y asi



function operate(a,b,c){
    if (b === '+'){
        add(a,c);
        number = ''
        
    }else if (b === '-'){
        subtract(a,c);
        number = ''
    }else if (b === '*'){
        multiply(a,c);
        number = ''
    }else if (b === '/'){
        divide(a,c);
        number = ''
    }
    
}
//operate()

function add (a,b){
    let result = parseInt(a)+parseInt(b);
    valueScreen = [result] 
    return console.log(result);
    
}

function subtract (a,b){
    let result = parseInt(a)-parseInt(b);
    valueScreen = [result] 
    return console.log(result);
}

function multiply (a,b){
    let result = parseInt(a)*parseInt(b);
    valueScreen = [result] 
    return console.log(result);
}

function divide (a,b){
    let result = parseInt(a)/parseInt(b);
    valueScreen = [result] 
    return console.log(result);}



