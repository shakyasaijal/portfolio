
document.addEventListener('DOMContentLoaded', function () {
    // append plus symbol to every list item that has children
    var parentItems = document.querySelectorAll('#mobile-nav .parent');
    parentItems.forEach(function (item) {
      var span = document.createElement('span');
      span.className = 'open-menu';
      item.appendChild(span);
    });
  
    // fix non-scrolling overflow issue on mobile devices
    var mobileNav = document.querySelector('#mobile-nav > ul');
    var overflowDiv = document.createElement('div');
    overflowDiv.className = 'overflow';
    mobileNav.parentNode.insertBefore(overflowDiv, mobileNav);
    overflowDiv.appendChild(mobileNav);
  
    function setMaxHeight() {
      var windowHeight = window.innerHeight;
      var vph = windowHeight - 57; // 57px - height of #mobile-nav
      overflowDiv.style.maxHeight = vph + 'px';
    }
  
    window.addEventListener('load', setMaxHeight);
    window.addEventListener('resize', setMaxHeight);
  
    // global variables
    var menu = document.querySelector('.overflow > ul');
    var bg = document.querySelector('html, body');
  
    // toggle background scrolling
    function bgScrolling() {
      // if menu has toggled class... *
      if (menu.classList.contains('open')) {
        // * disable background scrolling
        bg.style.overflowY = 'hidden';
        bg.style.height = 'auto';
      } else {
        // * enable background scrolling
        bg.style.overflowY = 'visible';
        bg.style.height = '100%';
      }
    }
  
    // menu button click events
    var menuButton = document.querySelector('.menu-button');
    menuButton.addEventListener('click', function (e) {
      e.preventDefault();
      // activate toggles
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
      menu.classList.toggle('open');
      bgScrolling();
    });
  
    // list item click events
    var openMenuItems = document.querySelectorAll('.open-menu');
    openMenuItems.forEach(function (item) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        var ul = this.previousElementSibling;
        ul.style.display = ul.style.display === 'block' ? 'none' : 'block';
        this.classList.toggle('rotate');
      });
    });
  });