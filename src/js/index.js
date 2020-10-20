let trialbutton = document.querySelector('.trial');

let slide = document.querySelector('.slide');
let sliderImage = slide.querySelector('.sliderimage');
let sliderP = slide.querySelector('.sliderp');
let sliderHeader = slide.querySelector('.sliderheader');
let sliderCategory = slide.querySelector('.slidercategory');
let sliderButton = slide.querySelector('button');

let one =document.querySelector('.one');
let postcontent = one.querySelector('.postcontent');
let h1 = postcontent.querySelector('h1').textContent;
let p = postcontent.querySelector('p').textContent;
let category = postcontent.querySelector('.category').innerHTML;
let button = postcontent.querySelector('button').innerHTML;


// setTimeout(changeSlider, 4000);
// trialbutton.addEventListener('click', changeSlider);

setTimeout(function changeSlider(){
  sliderImage.style.backgroundImage = 'url("/src/public/images/photo2.jpg")';
  sliderP.textContent= p;
  sliderHeader.textContent = h1;
  sliderCategory.innerHTML = category;
  sliderButton.innerHTML = button;
}, 4000);

changeSlider();

