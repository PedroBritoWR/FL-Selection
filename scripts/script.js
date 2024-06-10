let prevButton = document.getElementById('prev')
let nexButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')

let active = 0;
firstPosition = 0;
lastPosition = items.length - 1;
function setSlider() {
  nexButton.onclick = () => {
    let itemOld = container.querySelector('.list .item.active');
    itemOld.classList.remove('active');

    active = active + 1 > lastPosition ? 0 : active + 1;
    items[active].classList.add('active');

    let dotsOld = indicator.querySelector('ul li.active');
    dotsOld.classList.remove('active');
    dots[active].classList.add('active');
    indicator.querySelector('.number').innerHTML = '0' + (active + 1);

  }

  prevButton.onclick = () => {
    let itemOld = container.querySelector('.list .item.active');
    itemOld.classList.remove('active');

    active = active - 1 < firstPosition ? lastPosition : active - 1;
    items[active].classList.add('active');
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  setSlider();
});
