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

      // drop-menu
      document.addEventListener('click', (event) => {
        if(event.target.closest('.drop-menu')){ //closest(선택자) = 해당 선택자와 동일한 요소를 찾을 때 까지 -> e.target은 자신 ~ 부모를 순회하며 찾는다.
          const dropBtn  = event.target;
          const dropMenu = dropBtn.closest('.drop-menu');
          const isOpen = dropMenu.classList.contains('is-open');

          const closeDropMenu = () => { dropMenu.classList.remove('is-open') };

          const activeDropMenu = () => { 
            dropMenu.classList.add('is-open');

            document.addEventListener('click', (item) => {
              if(item.target.type == 'button' && !item.target.classList.contains('drop-btn')) {
                dropBtn.innerText = item.target.innerText;
                closeDropMenu();
              }
            });
          }

          isOpen ? closeDropMenu() : activeDropMenu();

          document.addEventListener('click', (e) => {
            if(!e.target.closest('.drop-menu')) {
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