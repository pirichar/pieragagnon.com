console.log("The script is working");

// button.addEventListener('click',() => button.classList.toggle('altcolor'));
// button.addEventListener('click',console.log('clicked on the button'));
// button.addEventListener('click', () => button.classList.toggle('altColor'));

const menuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');

menuToggle.addEventListener('click', () => {
    if (sideMenu.style.right === '-250px' || !sideMenu.style.right) {
        sideMenu.style.right = '0';
    } else {
        sideMenu.style.right = '-250px';
    }
});
