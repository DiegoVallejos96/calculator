const screen = document.querySelector('#calculator-screen')
let number = ''
let valueScreen = []

if (valueScreen.length === 0) {
    screen.textContent = '0';
}

document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (key === '1') {
        btnOne.click();
    }else if (key === '2') {
        btnTwo.click();
    }else if (key === '3') {
        btnThree.click();
    }else if (key === '4') {
        btnFour.click();
    }else if (key === '5') {
        btnFive.click();
    }else if (key === '6') {
        btnSix.click();
    }else if (key === '7') {
        btnSeven.click();
    }else if (key === '8') {
        btnEight.click();
    }else if (key === '9') {
        btnNine.click();
    }else if (key === '0') {
        btnZero.click();
    }else if (key === '+') {
        btnAdd.click();
    }else if (key === '-') {
        btnSubtract.click();
    }else if (key === '*') {
        btnMultiply.click();
    }else if (key === '/') {
        btnDivide.click();
    }else if (key === 'Delete') {
        btnAc.click();
    }else if (key === 'Backspace') {
        btnAc.click();
    }else if (key === 'Enter') {
        btnEqual.click();
    }else if (key === '.') {
        btnDot.click();
    }
})

const btnDot = document.querySelector('#dot')
btnDot.addEventListener("click", () => {
    screen.textContent += '.'
    number += '.'
    valueScreen.push(number)
    console.log(valueScreen);
})

const btnZero = document.querySelector('#n0')
btnZero.addEventListener("click", () => {
    screen.textContent += '0'
    number += '0'
    valueScreen.push(number)
    console.log(valueScreen);
})

const btnOne = document.querySelector('#n1')
btnOne.addEventListener("click", () => {
    if(screen.textContent[0] === '0'){
        screen.textContent = ''
    }
    screen.textContent += '1'
    number += '1'
    valueScreen.push(number)
    console.log(valueScreen);
})

const btnTwo = document.querySelector('#n2')
btnTwo.addEventListener("click", () => {
    if(screen.textContent[0] === '0'){
        screen.textContent = ''
    }
    screen.textContent += '2'
    number += '2'
    valueScreen.push(number)
    console.log(valueScreen);

})

const btnThree = document.querySelector('#n3')
btnThree.addEventListener("click", () => {
    if(screen.textContent[0] === '0'){
        screen.textContent = ''
    }
    screen.textContent += '3'
    number += '3'
    valueScreen.push(number)
    console.log(valueScreen);
})

const btnFour = document.querySelector('#n4')
btnFour.addEventListener("click", () => {
    if(screen.textContent[0] === '0'){
        screen.textContent = ''
    }
    screen.textContent += '4'
    number += '4'
    valueScreen.push(number)
    console.log(valueScreen);
})

const btnFive = document.querySelector('#n5')
btnFive.addEventListener("click", () => {
    if(screen.textContent[0] === '0'){
        screen.textContent = ''
    }
    screen.textContent += '5'
    number += '5'
    valueScreen.push(number)
    console.log(valueScreen);
})

const btnSix = document.querySelector('#n6')
btnSix.addEventListener("click", () => {
    if(screen.textContent[0] === '0'){
        screen.textContent = ''
    }
    screen.textContent += '6'
    number += '6'
    valueScreen.push(number)
    console.log(valueScreen);
})

const btnSeven = document.querySelector('#n7')
btnSeven.addEventListener("click", () => {
    if(screen.textContent[0] === '0'){
        screen.textContent = ''
    }
    screen.textContent += '7'
    number += '7'
    valueScreen.push(number)
    console.log(valueScreen);
})

const btnEight = document.querySelector('#n8')
btnEight.addEventListener("click", () => {
    if(screen.textContent[0] === '0'){
        screen.textContent = ''
    }
    screen.textContent += '8'
    number += '8'
    valueScreen.push(number)
    console.log(valueScreen);
})

const btnNine = document.querySelector('#n9')
btnNine.addEventListener("click", () => {
    if(screen.textContent[0] === '0'){
        screen.textContent = ''
    }
    screen.textContent += '9'
    number += '9'
    valueScreen.push(number)
    console.log(valueScreen);
})

const btnAc = document.querySelector('#bAC')
btnAc.addEventListener("click", () => {
    screen.textContent = "0"
    number = '0'
    valueScreen = []
    console.clear()
})

const btnAdd = document.querySelector('#bAdd')
btnAdd.addEventListener("click", () => {
    if (valueScreen[valueScreen.length - 1] === '+' || valueScreen[valueScreen.length - 1] === '-' || valueScreen[valueScreen.length - 1] === '*' || valueScreen[valueScreen.length - 1] === '/'){
        operate(0,'+',0)
        valueScreen = []
    }
    if (valueScreen.includes('-') || valueScreen.includes('+') || valueScreen.includes('*') || valueScreen.includes('/')) {
        operate(valueScreen[0],valueScreen[1],valueScreen[valueScreen.length - 1])
        console.log(valueScreen);
    }  
    if (valueScreen != ''){
        screen.textContent += '+'
        let lastValue = valueScreen[valueScreen.length - 1]
        console.log('el ultimo valor es', lastValue);
        valueScreen = []
        valueScreen.push(lastValue,'+')
        console.log(valueScreen);
        number = ''
    }else {
        screen.textContent = ''
    }
})

const btnSubtract = document.querySelector('#bSubs')
btnSubtract.addEventListener("click", () => {
    if (valueScreen[valueScreen.length - 1] === '+' || valueScreen[valueScreen.length - 1] === '-' || valueScreen[valueScreen.length - 1] === '*' || valueScreen[valueScreen.length - 1] === '/'){
        operate(0,'+',0)
        screen.textContent = '0'
        valueScreen = []
    }
    if (valueScreen.includes('-') || valueScreen.includes('+') || valueScreen.includes('*') || valueScreen.includes('/')) {
        operate(valueScreen[0],valueScreen[1],valueScreen[valueScreen.length - 1])
        console.log(valueScreen);
    }
    if (valueScreen != ''){
        screen.textContent += '-'
        let lastValue = valueScreen[valueScreen.length - 1]
        console.log('el ultimo valor es', lastValue);
        valueScreen = []
        valueScreen.push(lastValue,'-')
        console.log(valueScreen);
        number = ''
    }else {
        screen.textContent = ''
    }
})

const btnMultiply = document.querySelector('#bMult')
btnMultiply.addEventListener("click", () => {
    if (valueScreen[valueScreen.length - 1] === '+' || valueScreen[valueScreen.length - 1] === '-' || valueScreen[valueScreen.length - 1] === '*' || valueScreen[valueScreen.length - 1] === '/'){
        operate(0,'+',0)
        screen.textContent = '0'
        valueScreen = []
    }
    if (valueScreen.includes('-') || valueScreen.includes('+') || valueScreen.includes('*') || valueScreen.includes('/')) {
        operate(valueScreen[0],valueScreen[1],valueScreen[valueScreen.length - 1])
        console.log(valueScreen);
    }
    if (valueScreen != ''){
        screen.textContent += '*'
        let lastValue = valueScreen[valueScreen.length - 1]
        console.log('el ultimo valor es', lastValue);
        valueScreen = []
        valueScreen.push(lastValue,'*')
        console.log(valueScreen);
        number = ''
    }else {
        screen.textContent = ''
    }
})

const btnDivide = document.querySelector('#bDiv')
btnDivide.addEventListener("click", () => {  
    if (valueScreen[valueScreen.length - 1] === '+' || valueScreen[valueScreen.length - 1] === '-' || valueScreen[valueScreen.length - 1] === '*' || valueScreen[valueScreen.length - 1] === '/'){
        operate(0,'+',0)
        screen.textContent = '0'
        valueScreen = []
    }
    if (valueScreen.includes('-') || valueScreen.includes('+') || valueScreen.includes('*') || valueScreen.includes('/')) {
        operate(valueScreen[0],valueScreen[1],valueScreen[valueScreen.length - 1])
        console.log(valueScreen);
    }
    if (valueScreen != ''){
        screen.textContent += '/'
        let lastValue = valueScreen[valueScreen.length - 1]
        console.log('el ultimo valor es', lastValue);
        valueScreen = []
        valueScreen.push(lastValue,'/')
        console.log(valueScreen);
        number = ''
    }else {
        screen.textContent = ''
    }
})

const btnEqual = document.querySelector('#bEqual')
btnEqual.addEventListener("click", () => {
    if (valueScreen[valueScreen.length - 1] === '+' || valueScreen[valueScreen.length - 1] === '-' || valueScreen[valueScreen.length - 1] === '*' || valueScreen[valueScreen.length - 1] === '/'){
        operate(0,'+',0)
        screen.textContent = '0'
        valueScreen = []
    }
    screen.textContent = ' '
    operate(valueScreen[0],valueScreen[1],valueScreen[valueScreen.length - 1])
    console.log(valueScreen);
})

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

function add (a,b){
    let result = (parseFloat(a)+parseFloat(b)).toFixed(4);
    let resultFormated = parseFloat(result.toString())
    if (Number.isInteger(resultFormated)){
        valueScreen = [resultFormated] 
        screen.textContent = valueScreen[0]
    }else{
        valueScreen = [resultFormated]
        screen.textContent = valueScreen[0]
    }
    return console.log(resultFormated);
}

function subtract (a,b){
    let result = (parseFloat(a)-parseFloat(b)).toFixed(4);
    let resultFormated = parseFloat(result.toString())
    if (Number.isInteger(resultFormated)){
        valueScreen = [resultFormated] 
        screen.textContent = valueScreen[0]
    }else{
        valueScreen = [resultFormated]
        screen.textContent = valueScreen[0]
    }
    return console.log(resultFormated);
}

function multiply (a,b){
    let result = (parseFloat(a)*parseFloat(b)).toFixed(4);
    let resultFormated = parseFloat(result.toString())
    if (Number.isInteger(resultFormated)){
        valueScreen = [resultFormated] 
        screen.textContent = valueScreen[0]
    }else{
        valueScreen = [resultFormated]
        screen.textContent = valueScreen[0]
    }
    return console.log(resultFormated);
}

function divide (a,b){
    if (b === '0'){
        screen.textContent = '-.- omg man...'
    }else {
        let result = (parseFloat(a)/parseFloat(b)).toFixed(4);
        let resultFormated = parseFloat(result.toString())
        if (Number.isInteger(resultFormated)){
            valueScreen = [resultFormated] 
            screen.textContent = valueScreen[0]
        }else{
            valueScreen = [resultFormated]
            screen.textContent = valueScreen[0]
        }
        return console.log(resultFormated);
    }
}



