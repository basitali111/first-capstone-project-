const mobileNav = document.querySelector('.menu');
const navHeader = document.querySelector('header');
const toggleNavbar = () => {
  navHeader.classList.toggle('active');
};
mobileNav.addEventListener('click', () => toggleNavbar());
const popuparray = [
  {

    highlights:
        ' Nawaz Ali',
    highlights2:
        'Ahamd Ali',
    image: 'Capstone/speakers/speaker_01.png',
    image2: 'Capstone/speakers/speaker_02.png',

  },
  {

    highlights:
        'Basit Ali',
    highlights2:
        'Asif Ali',
    image: 'Capstone/speakers/speaker_03.png',
    image2: 'Capstone/speakers/speaker_04.png',
  },
  {

    highlights:
        ' Adil Ali',
    highlights2:
        'Ahmad Ali',
    image: 'Capstone/speakers/speaker_05.png',
    image2: 'Capstone/speakers/speaker_06.png',

  },
];
const popup = document.querySelector('.speaker');
const card2 = document.createElement('h2');
card2.innerText = 'Featured Speakers';
popup.appendChild(card2);
popuparray.forEach((element, i) => {
  const card = document.createElement('div');
  card.classList = 'speaker-cont2';
  const popupcard = `
    <div class="speaker-one">
    <div class="speaker-close">
     <div class="box-image">
       <img src="${popuparray[i].image}" alt="speaker1" class="speaker-image">
      </div>
      <div class="text-speaker">
        <h4>${popuparray[i].highlights}</h4>
         <p class="speaker-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita.</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ab porro quibusdam.</p>
      </div>
     </div>
     <div class="speaker-close">
      <div class="box-image">
       <img src="${popuparray[i].image2}" alt="speaker1" class="speaker-image">
      </div>
     <div class="text-speaker">
        <h4>${popuparray[i].highlights2}</h4>
        <p class="speaker-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ab porro quibusdam.</p>
     </div>
   </div>
   <div class="more-container">
     <a href="#" class="more-btn">More <img src="capstone/Header/arrow_down.png" alt=""></a>

   </div>
  </div>
  `;
  card.innerHTML += popupcard;
  popup.appendChild(card);
});
const loadMoreBtn = document.querySelector('.morebtn');
let currentItem = 2;
loadMoreBtn.onclick = () => {
  const boxes = [...document.querySelectorAll('.speaker-close')];
  for (let i = currentItem; i < currentItem + 2; i += 1) {
    boxes[i].style.display = 'flex';
  }
  currentItem += 2;
  if (currentItem >= boxes.length) {
    loadMoreBtn.style.display = 'none';
  }
};
