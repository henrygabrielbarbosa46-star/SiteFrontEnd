let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navLinks = document.querySelectorAll('header nav a');
let sections = document.querySelectorAll('section');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

// Footer
const footerGrid = document.querySelector('.footer-grid');

if (footerGrid) {
    footerGrid.addEventListener('mousemove', (event) => {
        const rect = footerGrid.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        footerGrid.style.setProperty('--mouse-x', `${x}px`);
        footerGrid.style.setProperty('--mouse-y', `${y}px`);
    });

    footerGrid.addEventListener('mouseleave', () => {
        footerGrid.style.setProperty('--mouse-x', '-200px');
        footerGrid.style.setProperty('--mouse-y', '-200px');
    });
}

// Slider
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const teamSlider = document.querySelector('.team-slider');

if (nextBtn && prevBtn && teamSlider) {
    nextBtn.addEventListener('click', () => {
        const items = document.querySelectorAll('.team-card');
        teamSlider.appendChild(items[0]);
    });

    prevBtn.addEventListener('click', () => {
        const items = document.querySelectorAll('.team-card');
        teamSlider.prepend(items[items.length - 1]);
    });
}