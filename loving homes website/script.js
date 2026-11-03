function setupMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".mainnav__menu");

  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

function setupTestimonials() {
  const cards = Array.from(document.querySelectorAll(".testimonial"));
  const prev = document.querySelector("[data-prev]");
  const next = document.querySelector("[data-next]");
  if (!cards.length || !prev || !next) return;

  let index = 0;
  let autoplayId;

  const show = (newIndex) => {
    cards[index].classList.remove("is-active");
    index = (newIndex + cards.length) % cards.length;
    cards[index].classList.add("is-active");
  };

  const goNext = () => show(index + 1);
  const goPrev = () => show(index - 1);

  const startAutoplay = () => {
    stopAutoplay();
    autoplayId = window.setInterval(goNext, 5000);
  };

  const stopAutoplay = () => {
    if (autoplayId) clearInterval(autoplayId);
  };

  prev.addEventListener("click", () => {
    goPrev();
    startAutoplay();
  });

  next.addEventListener("click", () => {
    goNext();
    startAutoplay();
  });

  startAutoplay();
}

function setupContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    if (!form.checkValidity()) return;
    e.preventDefault();
    const thanks = document.querySelector("[data-contact-thanks]");
    if (thanks) thanks.hidden = false;
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupMobileMenu();
  setupTestimonials();
  setupContactForm();
});
