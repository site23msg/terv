
const popUpImg = document.querySelectorAll('.popupimg')
const body = document.querySelector('body')
const modal = document.querySelector('.modal');

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

Array.from(popUpImg).map( img => {
  img.addEventListener('click', () => {
    openModal();
    body.classList.add('overflow-hidden');
  })
})

function openModal() {
  document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}
