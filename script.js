// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Back to top button
const backToTop = document.createElement('button');
backToTop.textContent = '↑ Top';
backToTop.id = 'backToTop';
document.body.appendChild(backToTop);

backToTop.style.position = 'fixed';
backToTop.style.bottom = '20px';
backToTop.style.right = '20px';
backToTop.style.padding = '8px 12px';
backToTop.style.fontSize = '14px';
backToTop.style.background = 'linear-gradient(90deg, #6c8cff, #8a7dff)';
backToTop.style.color = '#fff';
backToTop.style.border = 'none';
backToTop.style.borderRadius = '6px';
backToTop.style.cursor = 'pointer';
backToTop.style.display = 'none';
backToTop.style.zIndex = '999';

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
