import { sum, subtract } from './math.js'
import valuesFormatter from './valuesFormatter.js'

export default function renderCards({value, input}) {

    const inputs = document.querySelector('#inputs')
    const outputs = document.querySelector('#outputs')
    const total = document.querySelector('#total')

    const cost = Number(inputs.textContent)

    if(input) {
        let cost = Number(inputs.textContent)
        const totalInputs = sum(cost, value).toFixed(2)
        inputs.innerText = totalInputs
    }
    else {
        let cost = Number(outputs.textContent)
        const totalOutpus = subtract(cost, value).toFixed(2)
        outputs.innerText = totalOutpus
    }
}