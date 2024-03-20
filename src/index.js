

async function fetchCosts() {
    const response = await fetch('http://localhost:3000/costs')
    const costs = await response.json()
    
    costs.forEach(cost => {
        console.log(typeof cost.id)
    })
}

fetchCosts()