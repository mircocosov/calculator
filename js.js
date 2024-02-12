let prevNumber = 0
let currentNumber = 0
let prevOperation = '+'

const outputEl = document.getElementById("output")

const setCurrentNumber = (value) => {
    currentNumber = value
    outputEl.innerHTML = currentNumber
}


const onDigitClick = (digit) => {
    setCurrentNumber(Number(`${currentNumber}${digit}`))
}

const executeOperation = (operation, firstNumber, secondNumber) => {
    switch (operation) {
        case '+':
            return firstNumber + secondNumber
        case '-':
            return firstNumber - secondNumber
        case '*':
            return firstNumber * secondNumber
        case '/':
            return firstNumber / secondNumber
        default:
            throw new Error('Лох')
    }
}

const onPluse = () => {
    prevNumber = executeOperation(prevOperation, prevNumber, currentNumber)
    prevOperation = '+'
    setCurrentNumber(0)
}

const onMinus = () => {
    prevNumber = executeOperation(prevOperation, prevNumber, currentNumber)
    prevOperation = '-'
    setCurrentNumber(0)
}

const onMultiply = () => {
    prevNumber = executeOperation(prevOperation, prevNumber, currentNumber)
    prevOperation = '*'
    setCurrentNumber(0)
}

const onDivision = () => {
    prevNumber = executeOperation(prevOperation, prevNumber, currentNumber)
    prevOperation = '/'
    setCurrentNumber(0)
}

const onEqual = () => {
    setCurrentNumber(executeOperation(prevOperation, prevNumber, currentNumber))
    prevNumber = 0
    prevOperation = '+'
}

const onClear = () => {
    prevNumber = 0
    prevOperation = '+'
    setCurrentNumber(0)
}