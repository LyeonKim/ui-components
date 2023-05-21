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
      document.addEventListener('click', (event) => {
        if (event.target.closest('.dropdown-menu')) {
          const dropBtn = event.target;
          const dropMenu = dropBtn.closest('.dropdown-menu');
          const isOpen = dropMenu.classList.contains('is-open');

          const closeDropMenu = () => {dropMenu.classList.remove('is-open');};

          const activeDropMenu = () => {
            dropMenu.classList.add('is-open');

            document.addEventListener('click', (item) => {
              if (item.target.type == 'button' && item.target.closest('.drop-btn') && !item.target.classList.contains('drop-btn')) {
                dropBtn.innerText = item.target.innerText;
                closeDropMenu();
              }
            });
          };

          isOpen ? closeDropMenu() : activeDropMenu();

          document.addEventListener('click', (e) => {
            if (!e.target.closest('.dropdown-menu')) {
              closeDropMenu();
            }
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