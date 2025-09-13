// Efek muncul saat discroll
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    const secTop = sec.getBoundingClientRect().top;
    if (secTop < window.innerHeight - 100) {
      sec.classList.add('show');
    }
  });
});
