import valuesFormatter from "./valuesFormatter.js"

export function createTr(id) {
    const tr = document.createElement('tr')
    tr.id = `cost-${id}`
    return tr
 }

 export function createTd(...args) {

    if(args.length === 2) {
        const [editIcon, deleteIcon] = args
        const td = document.createElement('td')
        td.appendChild(editIcon)
        td.appendChild(deleteIcon)
        return td
    }   

    const content = args[0]
    const td = document.createElement('td')
    td.textContent = isNumber(content) ? valuesFormatter(content) : content
    return td
 }

 export function createImg(id, src) {
    const img = document.createElement('img')
    img.id = `img-${id}`
    img.src = src
    return img
}

function isNumber(content) {
    return typeof content === 'number'
}