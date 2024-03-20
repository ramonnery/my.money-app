export default function valuesFormatter(value) {
    
    const currencyFormatBrl = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })

    const formattedValue = currencyFormatBrl.format(value)
    console.log(formattedValue)

    return formattedValue
}
