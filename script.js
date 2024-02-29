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



