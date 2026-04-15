document.addEventListener('DOMContentLoaded', function () {

  // Hamburger toggle
  var ham = document.getElementById('hamburger');
  var nav = document.getElementById('headerNav');
  if (ham && nav) {
    ham.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Active nav link
  var page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.header-nav a').forEach(function (a) {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  // Modal open
  document.querySelectorAll('[data-modal="contact"]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.getElementById('contactModal').classList.add('open');
    });
  });

  // Modal close
  document.getElementById('modalClose') && document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('contactModal') && document.getElementById('contactModal').addEventListener('click', function (e) {
    if (e.target === this) closeModal();
  });

  function closeModal() {
    document.getElementById('contactModal').classList.remove('open');
  }

  // Form submit
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.querySelector('[name="name"]').value.trim();
      var phone = form.querySelector('[name="phone"]').value.trim();
      if (!name || !phone) {
        alert("Будь ласка, заповніть обов'язкові поля.");
        return;
      }
      closeModal();
      form.reset();
      var toast = document.getElementById('toast');
      toast.classList.add('show');
      setTimeout(function () { toast.classList.remove('show'); }, 4000);
    });
  }

  // Carousel
  var slides = document.querySelectorAll('.c-slide');
  var dots = document.querySelectorAll('.c-dot');
  var current = 0;

  function showSlide(n) {
    slides.forEach(function (s, i) {
      s.style.display = i === n ? 'block' : 'none';
    });
    dots.forEach(function (d, i) {
      d.classList.toggle('active', i === n);
    });
    current = n;
  }

  if (slides.length > 0) {
    showSlide(0);
    dots.forEach(function (d, i) {
      d.addEventListener('click', function () { showSlide(i); });
    });
    setInterval(function () {
      showSlide((current + 1) % slides.length);
    }, 3500);
  }
});
