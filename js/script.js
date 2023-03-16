//Поисковик
const icon = document.querySelector('.icon');
const search = document.querySelector('.search');
const clear = document.querySelector('.clear');
//Поисковик активный
icon.onclick = function() {
   search.classList.toggle('active');
};

clear.onclick = function() {
   document.getElementById('mySearch').value = '';
};

//Настройка слайдера
$(document).ready(function () {
   $('.slider').slick({
     arrows:true,
     dots:true,
     adaptiveHeight:true,
     slidesToShow:1,
     slidesToScroll:1,
     speed:500,
     easing:'ease',
     infinite:true,
     initialSlide:0,
     autoplay:true,
     autoplaySpeed:3000,
     pauseOnFocus:true,
     pauseOnHover:true,
     pauseOnDotsHover:true,
   });
  });
//Настройка поп ап
const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');
//Поп ап открыть
openPopUp.addEventListener('click', function(e){
   e.preventDefault();
   popUp.classList.add('active');
})
//Поп ап закрыть
closePopUp.addEventListener('click', () => {
   popUp.classList.remove('active');
})