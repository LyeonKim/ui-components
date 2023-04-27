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

      html.classList.add('init');
    }
  };
})(window, document, jQuery);

window.addEventListener('DOMContentLoaded', () => {
  UI.init();
});