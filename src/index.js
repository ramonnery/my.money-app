import renderCosts from "./renderCosts.js"

async function fetchCosts() {
    const response = await fetch('http://localhost:3000/costs')
    const costs = await response.json()
    
    costs.forEach(renderCosts)
}

fetchCosts()

// function teste(...args) {
//     args.forEach(arg => {
//         if(typeof arg === 'number') {
//             console.log(`${arg} é um número.`)
//         }
//     })

//     let numero  = args[0]
//     console.log(numero)
// }
// teste(1)