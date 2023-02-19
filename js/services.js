/* card slider */
const cardWrapper = document.querySelector('.card-wrapper')
const cardItems = document.querySelectorAll('.card-wrapper > *')
const cardLength = cardItems.length
const perView = 3
let totalScroll = 0
const delay = 3000

cardWrapper.style.setProperty('--per-view', perView)
for(let i = 0; i < perView; i++) {
    cardWrapper.insertAdjacentHTML('beforeend', cardItems[i].outerHTML)
}

let autoScroll = setInterval(scrolling, delay)

function scrolling() {
    totalScroll++
    if(totalScroll == cardLength + 1) {
        clearInterval(autoScroll)
        totalScroll = 1
        cardWrapper.style.transition = '0s'
        cardWrapper.style.left = '0'
        autoScroll = setInterval(scrolling, delay)
    }
    const widthElement = document.querySelector('.card-wrapper > :first-child').offsetWidth + 24
    cardWrapper.style.left = `-${totalScroll * widthElement}px`
    cardWrapper.style.transition = '2s'
}