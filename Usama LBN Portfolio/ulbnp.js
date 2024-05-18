//taggle icon navbar
let menuIcon = document.querySelector ('#menu-icon');
let navbar = document.querySelector ('.navbar');

menuIcon .onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}
//Scroll Section>>

let sections = document.getElementsByTagName('section');
let navLinks = document.getElementsByTagName('header nav a');
let arr = Array.from(sections);
let arrNavLinks = Array.from(navLinks);

window.onscroll = () => {
  //sticky header
  arr.forEach (sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
  
    if(top >= offset && top < offset + height) {
      //active navbar links
      arrNavLinks.forEach (links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*='+ id +']').classList.add('active'); 
      });

      //the code below to use when we animate the whole page according to the content

      sec.classList.add('show-animate');
    }

    else {
      sec.classList.remove('show-animate');
    }
    
  });
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  //remove toggle icon and navbar when click navbar link (scroll)//
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

  //animation footer on scroll

  let footer = document.querySelector('footer');

  footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}