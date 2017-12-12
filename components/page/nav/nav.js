import Blanket from '../search/blanket';
import SiteNav from './site-nav';

export default class Nav {
  constructor() {
    this.root = document.querySelector('.header-tools');

    if (this.root) {
      this.blanket = new Blanket();

      // Menu
      this.menuTrigger = document.querySelector('.header-tools__menu > a');
      if (this.menuTrigger) {
        if (!this.menuTrigger.getAttribute('data-bound')) {
          this.menuTrigger.addEventListener('click', this.activateMenu.bind(this));
          this.menuTarget = document.getElementById('sitemap');
          this.menu = new SiteNav(this.menuTarget, {
            root: document.body,
            closeSiteNav: this.dismissMenu.bind(this),
          });
          this.menuTrigger.setAttribute('data-bound', true);
          this.menuTarget.setAttribute('aria-hidden', true);
        }
      }
    }
  }

  activateMenu(e) {
    e.preventDefault();
    this.blanket.show({ onClick: this.dismissMenu.bind(this) });
    this.menuTarget.classList.add('active');
    this.menuTarget.removeAttribute('aria-hidden');
  }

  dismissMenu() {
    this.blanket.hide();
    this.menuTarget.classList.remove('active');
    this.menuTarget.setAttribute('aria-hidden', true);
  }
}
