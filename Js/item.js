//iteam 1
const buyBtns = document.querySelector('.js-tickets')
const cvitem = document.querySelector('.js-modal-cv-')
const modal = document.querySelector('.modal')
const modalClose = document.querySelector('.js-modal-close')
function showTickets() {
    modal.classList.add('open')
}
function hideTickets() {
    modal.classList.remove('open')
}
buyBtns.addEventListener('click', showTickets)
modalClose.addEventListener('click', hideTickets)
modal.addEventListener('click', hideTickets)
cvitem.addEventListener('click', function (event) {
    event.stopPropagation()
})

//iteam 2
const buyBtns2 = document.querySelector('.js-tickets-2')
const cvitem2 = document.querySelector('.js-modal--cv2')
const modal2 = document.querySelector('.modal2')
const modalClose2 = document.querySelector('.js-modal-close2')
function showTickets2() {
    modal2.classList.add('open')
}
function hideTickets2() {
    modal2.classList.remove('open')
}
buyBtns2.addEventListener('click', showTickets2)
modalClose2.addEventListener('click', hideTickets2)
modal2.addEventListener('click', hideTickets2)
cvitem2.addEventListener('click', function (event) {
    event.stopPropagation()
})

//iteam 3
const buyBtns3 = document.querySelector('.js-tickets-3')
const cvitem3 = document.querySelector('.js-modal--cv3')
const modal3 = document.querySelector('.modal3')
const modalClose3 = document.querySelector('.js-modal-close3')
function showTickets3() {
    modal3.classList.add('open')
}
function hideTickets3() {
    modal3.classList.remove('open')
}
buyBtns3.addEventListener('click', showTickets3)
modalClose3.addEventListener('click', hideTickets3)
modal3.addEventListener('click', hideTickets3)
cvitem3.addEventListener('click', function (event) {
    event.stopPropagation()
})

//iteam 4
const buyBtns4 = document.querySelector('.js-tickets-4')
const cvitem4 = document.querySelector('.js-modal--cv4')
const modal4 = document.querySelector('.modal4')
const modalClose4 = document.querySelector('.js-modal-close4')
function showTickets4() {
    modal4.classList.add('open')
}
function hideTickets4() {
    modal4.classList.remove('open')
}
buyBtns4.addEventListener('click', showTickets4)
modalClose4.addEventListener('click', hideTickets4)
modal4.addEventListener('click', hideTickets4)
cvitem4.addEventListener('click', function (event) {
    event.stopPropagation()
})

//iteam 5
const buyBtns5 = document.querySelector('.js-tickets-5')
const cvitem5 = document.querySelector('.js-modal--cv5')
const modal5 = document.querySelector('.modal5')
const modalClose5 = document.querySelector('.js-modal-close5')
function showTickets5() {
    modal5.classList.add('open')
}
function hideTickets5() {
    modal5.classList.remove('open')
}
buyBtns5.addEventListener('click', showTickets5)
modalClose5.addEventListener('click', hideTickets5)
modal5.addEventListener('click', hideTickets5)
cvitem5.addEventListener('click', function (event) {
    event.stopPropagation()
})