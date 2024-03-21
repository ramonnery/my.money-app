import sum from './math.js'
import updateColorCard from './updateColorCard.js'

export default function renderCards({value, input}) {

    const inputs = document.querySelector('#inputs')
    const outputs = document.querySelector('#outputs')
    const totals = document.querySelector('#total')
    
    const costInput = Number(inputs.textContent)
    const costOutput = Number(outputs.textContent)
    const costTotal = Number(totals.textContent)

    if(input) {
        const totalInputs = sum(costInput, value).toFixed(2)
        inputs.innerText = totalInputs
    }

    else {
        value *= -1
        const totalOutpus = sum(costOutput, value).toFixed(2)
        outputs.innerText = totalOutpus
    }

    const total = sum(value, costTotal).toFixed(2)
    totals.innerText = total

    updateColorCard(total)

}