import renderTable from "./renderTable.js"
import renderCards from "./renderCards.js"

export default async function renderCosts(url) {
    const response = await fetch(url)
    const costs = await response.json()
    
    costs.forEach(renderCards)
    costs.forEach(renderTable)

}