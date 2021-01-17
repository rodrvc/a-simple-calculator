// painting
const btnNumber = document.querySelectorAll('[data-number]');
const btnOperator = document.querySelectorAll('[data-operator]');
const btnResult = document.querySelector('[data-result]');

const currentNumber = document.querySelector('[data-screen]');
const btnReset = document.querySelector('[data-reset]');
const btnRemove = document.querySelector('[data-remove]');

let isResult = false;
let isError = false;


btnNumber.forEach(btn => {
    btn.addEventListener('click', function () { // current number exist
        if (isError) {
            currentNumber.innerHTML = '';
            isError = false;
        }

        currentNumber.innerHTML = currentNumber.innerHTML + btn.innerHTML

        lastDigit = currentNumber.innerHTML.charAt(currentNumber.innerHTML.length - 1);
        isOperator = /\+|\-|\/|\*/.test(lastDigit)
        console.log(lastDigit)

        if (!isOperator && isResult) { // cause is posible add operator to result not numbers
            currentNumber.innerHTML = btn.innerHTML
            isResult = false;
        }

    })
})

btnOperator.forEach(btn => {
    btn.addEventListener('click', function () {
        if (isError) 
            return currentNumber.innerHTML = '';
        


        if (currentNumber.innerHTML == '') 
            return currentNumber.innerHTML = '';
        


        currentNumber.innerHTML = currentNumber.innerHTML + btn.innerHTML
        isResult = false;
    })
})


btnResult.addEventListener('click', function () {
    let result;
    console.log(currentNumber.innerHTML)
    try {
        result = parseFloat(eval(currentNumber.innerHTML));
    } catch (error) {
        isError = true;
        return currentNumber.innerHTML = 'error :(!'
    }


    if (currentNumber.innerHTML == '') 
        return currentNumber.innerHTML = ''


    


    currentNumber.innerHTML = result;
    isResult = true;
})


btnReset.addEventListener('click', function () {
    currentNumber.innerHTML = '';
    console.log('heelloo  asdasd ')
    isResult = false;
})

btnRemove.addEventListener('click', () => {
    currentNumber.innerHTML = currentNumber.innerHTML.slice(0, -1)
    console.log("Se ha borrado un digito")
})
