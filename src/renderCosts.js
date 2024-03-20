export default function renderCosts(costsData) {
    
    createTr(costsData.id)
    
    costsData.forEach(cost => {
        if(cost == 'id')
    })
 }

 function createTr(id) {
    const tr = document.createElement('tr')
    tr.id = `cost-${id}`
 }

 function createTd(content) {

 }