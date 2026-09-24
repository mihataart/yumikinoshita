// YUMI KINOSHITA - Main JavaScript

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var navList = document.querySelector('.nav-list');

  if (toggle && navList) {
    toggle.addEventListener('click', function () {
      navList.classList.toggle('is-open');
    });
  }

  var navLinks = document.querySelectorAll('.nav-list a');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      navList.classList.remove('is-open');
    });
  });
});
