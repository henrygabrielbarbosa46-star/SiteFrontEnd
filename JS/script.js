//Menu
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
const teamContainer = document.querySelector('.team-container');

if (nextBtn && prevBtn && teamSlider) {
    // Funções de navegação do slider
    const nextSlide = () => {
        const items = document.querySelectorAll('.team-card');
        if (items.length > 0) {
            teamSlider.appendChild(items[0]);
        }
    };

    const prevSlide = () => {
        const items = document.querySelectorAll('.team-card');
        if (items.length > 0) {
            teamSlider.prepend(items[items.length - 1]);
        }
    };

    // Eventos de clique nos botões
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Gestos de toque / arraste no celular
    if (teamContainer) {
        let touchStartX = 0;
        let touchEndX = 0;
        const minSwipeDistance = 40;

        teamContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].clientX;
        }, { passive: true });

        teamContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].clientX;
            const swipeDistance = touchStartX - touchEndX;

            if (swipeDistance > minSwipeDistance) {
                nextSlide(); // Arrastou para a esquerda
            } else if (swipeDistance < -minSwipeDistance) {
                prevSlide(); // Arrastou para a direita
            }
        }, { passive: true });
    }
}