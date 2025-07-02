/**
 * Carrossel de Depoimentos
 */
document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.slide');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  let index = 0;

  function mostrarSlide(i) {
    slides.forEach(slide => slide.classList.remove('ativo'));
    slides[i].classList.add('ativo');
  }

  prev.addEventListener('click', () => {
    index = (index === 0) ? slides.length - 1 : index - 1;
    mostrarSlide(index);
  });

  next.addEventListener('click', () => {
    index = (index === slides.length - 1) ? 0 : index + 1;
    mostrarSlide(index);
  });

  mostrarSlide(index);
});

/**
 * Máscara de Telefone
 */
document.addEventListener("DOMContentLoaded", () => {
  const inputTelefone = document.getElementById("telefone");
  inputTelefone.addEventListener("input", () => {
    inputTelefone.value = inputTelefone.value.replace(/[^0-9]/g, "");
  });
});

/**
 * Animações de Seções
 */
const sections = document.querySelectorAll('.proposito-section, .imagem-texto-section, .depoimentos, .servicos-section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

/**
 * Animação dos Cards de Produto
 */
const cardsServico = document.querySelectorAll('.card-servico');
const observerCards = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      cardsServico.forEach((card, i) => {
        setTimeout(() => {
          card.classList.add('active');
        }, i * 200);
      });
      observerCards.disconnect();
    }
  });
}, { threshold: 0.2 });

cardsServico.forEach(card => observerCards.observe(card));

/**
 * Menu Responsivo
 */
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".nav");
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});