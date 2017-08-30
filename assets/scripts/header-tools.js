import Blanket from './blanket';
import LocalNav from './local-nav';

export default class HeaderTools {
  constructor() {
    this.root = document.querySelector('.header-tools');

    if (this.root) {
      this.blanket = new Blanket();

      // Search
      this.searchTrigger = document.querySelector('.header-tools__search > a');
      if (this.searchTrigger && this.searchTrigger.getAttribute('href') === '#search') {
        this.headerSearch = document.querySelector('.page-header-search');
        if (this.headerSearch)
          this.searchTrigger.addEventListener('click', this.activateSearch.bind(this));
      }

      // Menu
      this.menuTrigger = document.querySelector('.header-tools__menu > a');
      if (this.menuTrigger) {
        this.menuTrigger.addEventListener('click', this.activateMenu.bind(this));
        this.menuTarget = document.getElementById('sitemap');
        this.menu = new LocalNav(this.menuTarget, {
          root: document.body,
          closeLocalNav: this.dismissMenu.bind(this)
        });
      }
    }
  }

  activateSearch(e) {
    e.preventDefault();
    this.root.classList.add('search-active');

    this.headerSearch.classList.add('active');
    this.headerSearch.querySelector('.icon-link--close').addEventListener('click', this.handleSearchClose.bind(this));

    this.blanket.el.classList.add('white');
    this.blanket.el.addEventListener('click', this.handleSearchClose.bind(this));

    this.headerSearch.querySelector('input[type="search"]').focus();
  }

  handleSearchClose(e) {
    e.preventDefault();
    this.blanket.el.classList.remove('white');
    this.headerSearch.classList.remove('active');
    this.root.classList.remove('search-active');
  };

  activateMenu(e) {
    e.preventDefault();
    this.blanket.show({ onClick: this.dismissMenu.bind(this) });
    this.menuTarget.classList.add('active');
  }

  dismissMenu() {
    this.blanket.hide();
    this.menuTarget.classList.remove('active');
  }
};
