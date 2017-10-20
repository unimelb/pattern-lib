import Blanket from './blanket';

export default class Search {
  constructor() {
    this.root = document.querySelector('.header-tools');

    if (this.root) {
      this.blanket = new Blanket();

      // Search
      this.searchTrigger = document.querySelector('.header-tools__search > a');
      if (this.searchTrigger && !this.searchTrigger.getAttribute('data-bound')) {
        if (this.searchTrigger && this.searchTrigger.getAttribute('href') === '#search') {
          this.headerSearch = document.querySelector('.page-header-search');
          if (this.headerSearch) { this.searchTrigger.addEventListener('click', this.activateSearch.bind(this)); }
        }
        this.searchTrigger.setAttribute('data-bound', true);
      }
    }
  }

  activateSearch(e) {
    e.preventDefault();
    this.root.classList.add('search-active');

    this.headerSearch.classList.add('active');
    this.headerSearch.querySelector('.link-icon--close').addEventListener('click', this.handleSearchClose.bind(this));

    this.blanket.el.classList.add('white');
    this.blanket.el.addEventListener('click', this.handleSearchClose.bind(this));

    this.headerSearch.querySelector('input[type="search"]').focus();
  }

  handleSearchClose(e) {
    e.preventDefault();
    this.blanket.el.classList.remove('white');
    this.headerSearch.classList.remove('active');
    this.root.classList.remove('search-active');
  }
}
