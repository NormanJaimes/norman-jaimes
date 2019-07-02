let toogleMenu = document.getElementById('toggle__menu'),
    nav = document.getElementById('nav'),
    logo = document.querySelector('.logo');

    toogleMenu.addEventListener('click', () =>{
      nav.classList.toggle('show');
      logo.classList.toggle('translateX');
    });