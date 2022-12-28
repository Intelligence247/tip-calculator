let tip = document.querySelector('#tip')
let total = document.querySelector('#total')
let each = document.querySelector('#each')
let input1 = document.querySelector('#input1')
let input2 = document.querySelector('#input2')
let selects = document.querySelector('select')
let main = document.querySelector('main')
let btn = document.querySelector('button')
let errM = document.querySelector('.errorMessages')
let ans = document.querySelector('.answers')
let muchErr = document.querySelector('#howMuch')
let manyErr = document.querySelector('#howmanypeople')
let err = document.querySelector('#chooseErr')
err.innerHTML = ''
manyErr.innerHTML = ''
muchErr.innerHTML = ''

btn.addEventListener('click', (e) => {
    const result = selects.value
    console.log(result)
    errM.style.width = '90%'
    errM.style.height = 'max-content'
    errM.style.marginTop = '1.3rem'
    errM.style.backgroundColor = '#f8d7da';
    errM.style.gap = '0.7rem'

    ans.style.width = '90%'
    ans.style.padding = '0.6rem'
    ans.style.height = 'max-content'
    ans.style.textAlign = 'center'

    tip.textContent = `Tip Amount $ ${(input1.value * (1 + (result / 100)) - input1.value).toFixed(2)}`
    total.textContent = `Total Amount $ ${(input1.value * (1 + (result / 100))).toFixed(2)}`
    each.textContent = `Each Person Owes $ ${((input1.value * (1 + (result / 100))) / input2.value).toFixed(2)}`

    if (result === 'select') {
        err.textContent = 'You Must Select a Service'
        // ans.style.display = 'none'
        err.style.display = 'block'

    } else {
        err.style.display = 'none'
        // ans.style.display = 'block'
    }

    if (input1.value.length <= 0) {
        muchErr.textContent = 'Bill Amount Cannot Be Blank'
        // ans.style.display = 'none'
        muchErr.style.display = 'block'
    } else {
        muchErr.style.display = 'none'
        // ans.style.display = 'block'

    }


    if (input2.value.length <= 0 || input2.value == 0) {
        manyErr.textContent = 'Number Of Users Must Be Greater Than Zero'
        // ans.style.display = 'none'
        manyErr.style.display = 'block'
    } else {
        manyErr.style.display = 'none'
        // ans.style.display = 'block'

    }

    if (input1.value.length >= 1 && input2.value.length >= 1 && result != 'select') {
        ans.style.display = 'block'
    } else {
        ans.style.display = 'none'
    }
})
