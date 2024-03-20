import valuesFormatter from "./valuesFormatter.js"

export default function renderCosts({id, description, value, date}) {
    const tr = createTr(id)
    
    const descriptionTd = createTd(description)
    const valueTd = createTd(value)
    const dateTd = createTd(date)

    const editIcon = createImg(id, '../assets/images/edit.svg')
    const deleteIcon = createImg(id, '../assets/images/delete.svg')
    const iconsTd = createTd(editIcon, deleteIcon)

    tr.append(descriptionTd, valueTd, dateTd, iconsTd)
    document.querySelector('tbody').appendChild(tr)
 }

 function createTr(id) {
    const tr = document.createElement('tr')
    tr.id = `cost-${id}`
    return tr
 }

 function createTd(...args) {

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

function createImg(id, src) {
    const img = document.createElement('img')
    img.id = `img-${id}`
    img.src = src
    return img
}

function isNumber(content) {
    return typeof content === 'number'
}