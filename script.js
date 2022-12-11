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
const selectObj = [
    { rate: 'select' },
    { rate: 'great', percent: 20 },
    { rate: 'good', percent: 10 },
    { rate: 'bad', percent: 2 },
]

selects.addEventListener('change', (e) => {
    btn.addEventListener('click', () => {
        const result = selectObj.find((d) => d.rate == e.target.value)
        console.log(result)
        console.log(result.percent)

        errM.style.width = '90%'
        errM.style.height = 'max-content'
        errM.style.marginTop = '1.3rem'
        errM.style.backgroundColor = '#f8d7da';

        ans.style.width = '90%'
        ans.style.padding = '0.6rem'
        ans.style.height = 'max-content'
        ans.style.gap = '0.5rem'

        tip.textContent = `Tip Amount $ ${(input1.value * (1 + (result.percent / 100)) - input1.value).toFixed(2)}`
        total.textContent = `Total Amount $ ${(input1.value * (1 + (result.percent / 100))).toFixed(2)}`
        each.textContent = `Each Person Owes $ ${((input1.value * (1 + (result.percent / 100))) / input2.value).toFixed(2)}`

        if (result.rate === 'select') {
            err.textContent = 'You Must Select a Service'
            ans.style.display = 'none'
        } else {
            err.style.display = 'none'
        }
        if (input1.value == null || input1.value == 0) {
            muchErr.textContent = 'Bill Amount Cannot Be Blank'
            ans.style.display = 'none'
        } else {
            muchErr.style.display = 'none'
        }


        if (input2.value == null || input2.value == 0) {
            manyErr.textContent = 'Number Of Users Must Be Greater Than Zero'
            ans.style.display = 'none'
        } else {
            manyErr.style.display = 'none'
        }
    })
})