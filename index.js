document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false,
  });

  const toggleBtn = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.sidebar');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('active');
    });
  }

  new Typed('#typed', {
    strings: ['Software Developer', 'Tech Enthusiast', 'Open Source Contributor'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
  });
});
