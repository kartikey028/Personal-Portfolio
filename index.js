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
// DARK MODE TOGGLE
const toggle = document.getElementById('darkModeToggle');

// Save dark mode preference in local storage
toggle.addEventListener('change', () => {
  if (toggle.checked) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  }
});
/*
// Load saved theme
window.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
    toggle.checked = true;
  }
});
*/
