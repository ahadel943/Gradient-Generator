const buttons = [
  {
    id: 'b-1',
    imgSrc: 'arrow.png',
    deg: '30deg'
  },
  {
    id: 'b-2',
    imgSrc: 'arrow.png',
    deg: '60deg'
  },
  {
    id: 'b-3',
    imgSrc: 'arrow.png',
    deg: '90deg'
  },
  {
    id: 'b-4',
    imgSrc: 'arrow.png',
    deg: '120deg'
  },
  {
    id: 'b-5',
    imgSrc: 'arrow.png',
    deg: '150deg'
  },
  {
    id: 'b-6',
    imgSrc: 'arrow.png',
    deg: '180deg'
  },
  {
    id: 'b-7',
    imgSrc: 'arrow.png',
    deg: '210deg'
  },
  {
    id: 'b-8',
    imgSrc: 'arrow.png',
    deg: '240deg'
  },
  {
    id: 'b-9',
    imgSrc: 'arrow.png',
    deg: '270deg'
  },
  {
    id: 'b-10',
    imgSrc: 'arrow.png',
    deg: '300deg'
  },
  {
    id: 'b-11',
    imgSrc: 'arrow.png',
    deg: '330deg'
  },
  {
    id: 'b-12',
    imgSrc: 'arrow.png',
    deg: '360deg'
  }
]
let wrapper = document.querySelector('.wrapper');
let infoText = document.querySelector('.info-text');
let btnsWrapper = document.querySelector('.btns-wrapper');
let clrOne = document.querySelector('.clr-1');
let clrTwo = document.querySelector('.clr-2');

buttons.forEach((btn)=>{
  let img = document.createElement('img');
  img.src = btn.imgSrc;
  img.style.width = '20px';
  img.style.height = '20px';
  img.style.transform = `rotate(-${btn.deg})`;
  btnsWrapper.appendChild(img);
  img.addEventListener('click', (e) => {
    wrapper.style.background = `linear-gradient(${btn.deg}, ${clrOne.value}, ${clrTwo.value})`;
    infoText.textContent = `${btn.deg}, ${clrOne.value}, ${clrTwo.value}`;
  })
})

const getColor = () => {
  wrapper.style.background = `linear-gradient(to top, ${clrOne.value}, ${clrTwo.value})`;
}

clrOne.addEventListener('input', getColor);
clrTwo.addEventListener('input', getColor);