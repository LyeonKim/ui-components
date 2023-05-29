'use strict';

/**
 * UI Functions
 * @returns {Object}
 */

const UI = ((window, document, $) => {
return {
  /* init UI */
  init: () => {
  const html = document.documentElement;

      // dropdown-menu
      document.addEventListener('click', (e) => {
        const dropdownMenu = e.target.closest('.dropdown-menu');
        if(dropdownMenu){
          const isOpen = dropdownMenu.classList.contains('is-open');
          const dropBtn = e.target.closest('.drop-btn');

          if(dropBtn) {
            isOpen ? dropdownMenu.classList.remove('is-open') : dropdownMenu.classList.add('is-open');
          }

          if(e.target.closest('.item')) {
            const newText =  e.target.closest('.item').innerText;

            document.querySelector('.drop-btn').innerText = newText;
            dropdownMenu.classList.remove('is-open');
          }

        } else if (!e.target.closest('.dropdown-menu')) {
          const openDropMenus = document.querySelectorAll('.dropdown-menu.is-open');
          
          openDropMenus.forEach((dropmenu) => {
            dropmenu.classList.remove('is-open');
          });
        }
      });

      html.classList.add('init');
    }
  };
})(window, document, jQuery);

window.addEventListener('DOMContentLoaded', () => {
  UI.init();
});