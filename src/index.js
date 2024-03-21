import renderCosts from "./renderCosts.js"
import isInput from "./isInput.js"

const url = 'http://localhost:3000/costs'

const addButton = document.querySelector('#add')
const cancelButton = document.querySelector('#cancel')
const modal = document.querySelector('dialog')

addButton.onclick = () => {
    modal.showModal()
}

cancelButton.onclick = () => {
    modal.close()
}

const form = document.querySelector('form')

form.onsubmit = async (ev) => {
    ev.preventDefault()

    const costData = {
        description: document.querySelector('#description').value,
        value: document.querySelector('#price').value,
        date: document.querySelector('#date'),
        input: isInput()
    }

    const response = await fetch('http://localhost:3000/costs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(costData)
    })

    const savedCost = response.json()
    form.reset()

    renderTable(savedCost)
    renderCards(savedCost)
}



renderCosts()
