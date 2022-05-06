// toggle menuImg & small device navbar onclick
let menu = document.querySelector(".menuImg");
let navbar = document.querySelector(".navbar");
menu.onclick = () => {
  menu.classList.toggle("closeImg");
  navbar.classList.toggle("active");
}

// when a user scroll top remove navbar and closeImg
window.onscroll = () => { 
  menu.classList.remove("closeImg");
  navbar.classList.remove("active");

// scroll top button 
  let goTop = document.querySelector(".goTop");
  if (window.scrollY > 200) {
    goTop.classList.add("active");
  } else {
    goTop.classList.remove("active");
  }
}

// when user click navbar link set active class
let menuLink = document.querySelectorAll(".navbar .nav li a");
Array.from(menuLink).forEach((item, index) => {
  item.onclick = (e) => { 
let activeMenuLink = document.querySelector(".navbar .nav li a.active");
    activeMenuLink.classList.remove("active"); // remove active class
    e.target.classList.add("active"); // add active class

     menu.classList.remove("closeImg");
     navbar.classList.remove("active");
  }
})

//image styles
var slideIndex = 1;
showSlides(slideIndex);

function nextSlide(n) {
  showSlides(slideIndex += 1);
}

function prevSlide(n) {
  showSlides(slideIndex -= 1);
}

function showSlides(n) {
  var i;
  var x = document.getElementsByClassName("slideImg");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "flex";  
}

// rellax js
var rellax = new Rellax('.rellax', {
  center: true
});