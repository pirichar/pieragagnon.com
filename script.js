console.log("The script is working");

// button.addEventListener('click',() => button.classList.toggle('altcolor'));
// button.addEventListener('click',console.log('clicked on the button'));
// button.addEventListener('click', () => button.classList.toggle('altColor'));

const menuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');

menuToggle.addEventListener('click', () => {
    if (sideMenu.style.left === '-250px' || !sideMenu.style.left) {
        sideMenu.style.left = '0';
    } else {
        sideMenu.style.left = '-250px';
    }
});



// // JavaScript to change the background color of the sticky header and side menu when scrolling
// const stickyHeader = document.querySelector('.sticky-header');
// const sideMenu = document.querySelector('.side-menu');
// const hero = document.querySelector('.hero');

// window.addEventListener('scroll', () => {
//     const scrollPosition = window.scrollY;
//     const heroHeight = hero.clientHeight;

//     if (scrollPosition > heroHeight) {
//         stickyHeader.style.backgroundColor = '#8B4513'; // Brown color
//         sideMenu.style.backgroundColor = '#8B4513'; // Brown color
//     } else {
//         stickyHeader.style.backgroundColor = 'transparent';
//         sideMenu.style.backgroundColor = 'transparent';
//     }
// });
