//dark-light
const man = document.querySelector('.light')
const bulb = document.querySelector('.switch1')
const bulb2 = document.querySelector('.switch2')

function dark() {
    man.classList.add('dark')
    bulb.classList.add('off')
    bulb2.classList.add('on')
}
function light() {
    man.classList.remove('dark')
    bulb.classList.remove('off')
    bulb2.classList.remove('on')
}
bulb.addEventListener('click', dark)
bulb2.addEventListener('click', light)