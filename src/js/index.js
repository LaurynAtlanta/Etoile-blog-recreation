

//slider
let slide = document.querySelector('.slide');
let sliderImage = slide.querySelector('.sliderimage');
let sliderP = slide.querySelector('.sliderp');
let sliderHeader = slide.querySelector('.sliderheader');
let sliderCategory = slide.querySelector('.slidercategory');
let sliderButton = slide.querySelector('button');

//first post
let one =document.querySelector('.one');
let postcontent = one.querySelector('.postcontent');
let h1 = postcontent.querySelector('h1').textContent;
let p = postcontent.querySelector('p').textContent;
let category = postcontent.querySelector('.category').innerHTML;
let button = postcontent.querySelector('button').innerHTML;

let two =document.querySelector('.one');
let postcontentsecond = two.querySelector('.postcontent');
let h1second = postcontent.querySelector('h1').textContent;
let psecond = postcontent.querySelector('p').textContent;
let categorysecond = postcontent.querySelector('.category').innerHTML;
let buttonsecond = postcontent.querySelector('button').innerHTML;


setTimeout(function changeSlider(){
  sliderImage.style.backgroundImage = 'url("/src/public/images/photo2.jpg")';
  sliderP.textContent= p;
  sliderHeader.textContent = h1;
  sliderCategory.innerHTML = category;
  sliderButton.innerHTML = button;
  sliderImage.style.transition = "all 2s";
}, 4000);

changeSlider();


