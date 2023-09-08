console.log("The script is working");

const menuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');

menuToggle.addEventListener('click', () => {
    if (sideMenu.style.right === '-250px' || !sideMenu.style.right) {
        sideMenu.style.right = '0';
    } else {
        sideMenu.style.right = '-250px';
    }
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                behavior: 'smooth',
                top: targetElement.offsetTop
            });
        }
    });
});