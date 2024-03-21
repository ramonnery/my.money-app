export default function updateColorCard(value) {
    const totalCard = document.querySelectorAll('.cards')[2]

    if(value > 0) {
        if(totalCard.classList.contains('card-negative')) {
            totalCard.classList.remove('card-negative')
        }

        totalCard.classList.toggle('card-positive')
        return
    }
    else if(value < 0) {
        if(totalCard.classList.contains('card-positive')) {
            totalCard.classList.remove('card-positive')
        }

        totalCard.classList.toggle('card-negative')
        return
    }
    
    totalCard.classList.remove('card-positive')
    totalCard.classList.remove('card-negative')

}