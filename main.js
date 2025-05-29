document.addEventListener('DOMContentLoaded', function() {
  const barsMenu = document.querySelector('.bars-menu');
  const navItems = document.querySelector('.nav-items');

  if (barsMenu && navItems) {
    barsMenu.addEventListener('click', function() {
      navItems.classList.toggle('active');
    });

    // Fecha o menu ao clicar em um link (bom para mobile)
    navItems.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navItems.classList.remove('active');
      });
    });
  }
});