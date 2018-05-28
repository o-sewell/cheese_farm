const elem = document.querySelector('.main-carousel');

const flkty = new Flickity( '.main-carousel', {
  cellAlign: 'left',
  contain: true,
  prevNextButtons: false,
  pageDots: false,
  pauseAutoPlayOnHover: false,
  autoPlay: true,
  bgLazyLoad: true
});


const controller = new ScrollMagic.Controller();
const scene =  new ScrollMagic.Scene({
  triggerElement: '.farming',
  duration: '90%',
  triggerHook: 0.8
})
.setClassToggle('.farming', 'fade-in')
.addIndicators()
.addTo(controller);


const controller2 = new ScrollMagic.Controller();
const scene2 =  new ScrollMagic.Scene({
  triggerElement: '.benefits',
  duration: '110%',
  triggerHook: 0.8
})
.setClassToggle('.benefits', 'fade-up')
.addIndicators()
.addTo(controller2);


/* Change background colors */
const vintageCheddar = document.querySelector('.vintage-cheddar');
const matureCheddar = document.querySelector('.mature-cheddar');
const mildCheddar = document.querySelector('.mild-cheddar');
const redLeicester = document.querySelector('.red-leicester');
const cheshire = document.querySelector('.cheshire');


const rangebg = document.querySelector('.range');


vintageCheddar.addEventListener('mouseover',function() {
  rangebg.style.background = '#7C95A5';
});

matureCheddar.addEventListener('mouseover',function() {
  rangebg.style.background = '#B2A699';
});

mildCheddar.addEventListener('mouseover',function() {
  rangebg.style.background = '#ACBD85';
});

redLeicester.addEventListener('mouseover',function() {
  rangebg.style.background = '#A1615A';
});

cheshire.addEventListener('mouseover',function() {
  rangebg.style.background = '#96A0AB';
});


