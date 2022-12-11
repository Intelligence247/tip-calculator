let tip = document.querySelector('#tip')
let total = document.querySelector('#total')
let each = document.querySelector('#each')
let input1 = document.querySelector('#input1')
let input2 = document.querySelector('#input2')
let selects = document.querySelector('select')
let main = document.querySelector('main')
let btn = document.querySelector('button')
let errM = document.querySelector('.errorMessages')
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

        tip.textContent = `Tip Amount $ ${(input1.value * (1 + (result.percent / 100)) - input1.value).toFixed(2)}`
        total.textContent = `Total Amount $ ${(input1.value * (1 + (result.percent / 100))).toFixed(2)}`
        each.textContent = `Each Person Owes $ ${((input1.value * (1 + (result.percent / 100))) / input2.value).toFixed(2)}`

        if (result.rate === 'select') {
            let err = document.querySelector('#chooseErr')
            err.textContent = 'You Must Select a Service'

        }



    })
})