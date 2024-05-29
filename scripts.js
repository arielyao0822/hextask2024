document.querySelector('.hamburger-menu .open').addEventListener('click', function() {
  document.querySelector('.mobile_menu').classList.add('active');
  document.querySelector('.hamburger-menu .open').style.display = 'none';
  document.querySelector('.hamburger-menu .close').style.display = 'block';
});

document.querySelector('.hamburger-menu .close').addEventListener('click', function() {
  document.querySelector('.mobile_menu').classList.remove('active');
  document.querySelector('.hamburger-menu .open').style.display = 'block';
  document.querySelector('.hamburger-menu .close').style.display = 'none';
});
