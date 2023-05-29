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
        if (dropdownMenu) {
          const isOpen = dropdownMenu.classList.contains('is-open');
          const dropBtn = e.target.closest('.drop-btn');

          if (dropBtn) {
            isOpen ? dropdownMenu.classList.remove('is-open') : dropdownMenu.classList.add('is-open');
          }

          if (e.target.closest('.item')) {
            const newText = e.target.closest('.item').innerText;

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

      // accoridon
      // 아코디언이 한 페이지에 여러개 들어갈 수 있음.
      // .accordion > .item > [ .title > a ] + .content
      // 헐 근데,,, 아코디언 item > content > 안에...아코디언이 들어간다면....????????????? ㅠㅠ?????
      const accordionArr = document.querySelectorAll('.accordion');
      accordionArr.forEach(function(acco){
        var accoItems = acco.querySelectorAll('.item');

        accoItems.forEach( function (item) {
          var itemAnchor = item.querySelector('a');

          itemAnchor.addEventListener('click', (e) => {
            var isOpen = item.classList.contains('is-open');
            var itemContent = item.querySelector('.content');

            e.stopImmediatePropagation();
            e.preventDefault(); 

            isOpen ? item.classList.remove('is-open'): openAcco();

            function openAcco() {
              var itemAnchorValue = itemAnchor.hash.replace(/#/g, '');
              var itemId = itemContent.id;

              if(itemAnchorValue === itemId ) {
                const target = itemContent.closest('.item');
                target.classList.add('is-open');
              }
            }
          });
        }); 
      });

      // tabs
      const tabsArr = document.querySelectorAll('.tabs');
      tabsArr.forEach(function(tabs){
        var tabsItems = tabs.querySelectorAll('.tab-menu .tab-list .item');
        var tabsContents = tabs.querySelectorAll('.tab-content .content-list .content');

        tabsItems.forEach( function (item) {
          var itemAnchor = item.querySelector('a');
          
          itemAnchor.addEventListener('click', (e) => {
            e.stopImmediatePropagation();
            e.preventDefault(); 

            var itemAnchorValue = itemAnchor.hash.replace(/#/g, '');
            var contentId = tabsContents.id;

            function removaActive () {
              tabsItems.forEach(function(item){
                if(item.classList.contains('.is-active')) {
                  item.classList.remove('is-active')
                }
              });
              tabsContents.forEach(function(content){
                  if(content.classList.contains('.is-active')) {
                    content.classList.remove('is-active')
                  }
              });
            }

            if (itemAnchorValue === contentId) {
              removaActive();
              
            }

            // is-active 될 때, tabsItems랑 tabsConts 요소 전부 돌면서 우선 제거 해야댐 ㅇㅇ

            // function opentabs() {
            //   var itemAnchorValue = itemAnchor.hash.replace(/#/g, '');
            //   var itemId = itemContent.id;

            //   if(itemAnchorValue === itemId ) {
            //     const target = itemContent.closest('.item');
            //     target.classList.add('is-open');
            //   }
            // }
          });
        }); 
      });

      html.classList.add('init');
    }
  };
})(window, document, jQuery);

window.addEventListener('DOMContentLoaded', () => {
  UI.init();
});