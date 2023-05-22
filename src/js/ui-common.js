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
				if(e.target.closest('.dropdown-menu')){ 
					const dropMenu = e.target.closest('.dropdown-menu');
					const isOpen = dropMenu.classList.contains('is-open');

					if(e.target.closest('.drop-btn')) {
						isOpen ? dropMenu.classList.remove('is-open') : dropMenu.classList.add('is-open');
					}

					if(e.target.closest('.item')) {
						const newText =  e.target.closest('.item').innerText;
						document.querySelector('.drop-btn').innerText = newText;

						dropMenu.classList.remove('is-open')
					}

				} else if (!e.target.closest('.dropdown-menu')) {
					const dropMenu = document.querySelector('.dropdown-menu');
					dropMenu.classList.remove('is-open');
				}
			});

			//accordion
			const accoItem = document.querySelectorAll('.accordion .item');


			
			html.classList.add('init');
		}
	};
})(window, document, jQuery);

window.addEventListener('DOMContentLoaded', () => {
	UI.init();
});