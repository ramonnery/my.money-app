export default function isInput() {
    const radios = document.getElementsByName('transaction-type')
    let radioValue

    radios.forEach(radio => {
        if(radio.checked) {
            radioValue = radio.value
            return
        }
    })

    return radioValue === 'input'
}