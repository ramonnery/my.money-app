import renderTable from "./renderTable.js"
import renderCards from "./renderCards.js"

async function fetchCosts() {
    const response = await fetch('http://localhost:3000/costs')
    const costs = await response.json()
    
    costs.forEach(renderCards)
    costs.forEach(renderTable)

}

fetchCosts()
