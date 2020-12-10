import 'focus-visible';
import 'picturefill';
import 'lazysizes';
import 'lazysizes/plugins/unveilhooks/ls.unveilhooks';
import 'lazysizes/plugins/parent-fit/ls.parent-fit.js';

window.addEventListener('load', function() {
  // SERVICE WORKER
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
  }

  /* ======================
   #MOBILE NAVIGATION
   https://inclusive-components.design/menus-menu-buttons/
   ====================== */

  var html = document.querySelectorAll('html')[0];
  var nav = document.querySelectorAll('.js-nav')[0];
  var navButton = document.querySelectorAll('.js-nav-toggle')[0];

  function toggleNav() {
    var expanded = this.getAttribute('aria-expanded') === 'true';

    html.classList.toggle('has-nav');
    nav.classList.toggle('is-visible');
    navButton.innerText = `Close`;

    this.setAttribute('aria-expanded', !expanded);

    if (nav.classList.contains('is-visible')) {
      navButton.innerText = `Close`;
    } else {
      navButton.innerText = `Menu`;
    }
  }

  navButton.addEventListener('click', toggleNav);
});
