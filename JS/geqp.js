const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const year = document.querySelector("#year");

function toggleMenu() {
  const isOpen = navbar.classList.toggle("active");

  menuIcon.classList.toggle("bx-menu", !isOpen);
  menuIcon.classList.toggle("bx-x", isOpen);
  menuIcon.setAttribute("aria-expanded", String(isOpen));
  menuIcon.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
}

menuIcon.addEventListener("click", toggleMenu);

menuIcon.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    toggleMenu();
  }
});

navbar.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    menuIcon.classList.remove("bx-x");
    menuIcon.classList.add("bx-menu");
    menuIcon.setAttribute("aria-expanded", "false");
    menuIcon.setAttribute("aria-label", "Abrir menu");
  });
});

if (year) {
  year.textContent = new Date().getFullYear();
}

document.querySelector(".contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  window.alert("O formulário ainda precisa ser conectado a um serviço para enviar mensagens.");
});