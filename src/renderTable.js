import { createTr, createTd, createImg } from "./createTags.js"

export default function renderTable({id, description, value, date, input}) {
    const tr = createTr(id)
    
    const descriptionTd = createTd(description)
    const valueTd = createTd(value)
    const dateTd = createTd(date)

    const editIcon = createImg(id, '../assets/images/edit.svg')
    const deleteIcon = createImg(id, '../assets/images/delete.svg')
    const iconsTd = createTd(editIcon, deleteIcon)

    input ? valueTd.style.color = '#4CAF50' : valueTd.style.color = '#FF5252'

    tr.append(descriptionTd, valueTd, dateTd, iconsTd)
    document.querySelector('tbody').appendChild(tr)
 }
