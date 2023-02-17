
const popUpImg = document.querySelectorAll('.popupimg')
const body = document.querySelector('body')
const modal = document.querySelector('.modal');

// AOS INIT
try{
  AOS.init();
  console.log("Succes")}
  catch(e) {
      console.log(e);
  }


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
  body.classList.remove('overflow-hidden');
}

const langSelector = document.getElementById('language-select');
const hun =document.querySelectorAll('.hu');
const eng =document.querySelectorAll('.en');

selectedLanguage = localStorage.getItem('selectedLanguage');
updateText()

langSelector.addEventListener('click', (e) => {
 selectedLanguage = e.target.getAttribute('data-img-id')
  localStorage.setItem('selectedLanguage', selectedLanguage);
  updateText();
})


function updateText() {
  if(selectedLanguage === 'hu') {
    
    hun.forEach( hun => {
      hun.classList.remove('hidden')
    })
    eng.forEach( eng => {
      eng.classList.add('hidden')
    })
  }
  else {
    hun.forEach( hun => {
      hun.classList.add('hidden')
    })
    eng.forEach( eng => {
      eng.classList.remove('hidden')
    });
  }
}

const homeSection = document.getElementById("home");
const scroll = document.getElementById('scrollTotop');

window.addEventListener('scroll', () => {
    // console.log(document.body.offsetHeight)
    // console.log(window.pageYOffset)
    if (window.pageYOffset >= 2000) {
        scroll.classList.remove("translate-y-96");
        scroll.classList.add("translate-y-0", "duration-700", "ease-linear");
      } else {
        scroll.classList.add("translate-y-96");
      }
});

function scrollToTop() {
  try {
  homeSection.scrollIntoView({
      block: 'center',
      behavior: 'smooth'
  });
  }
  catch (e) {
      console.log(e)
  }
}

scroll.addEventListener('click',scrollToTop);
