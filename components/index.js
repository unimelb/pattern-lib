import svg4everbody from 'svg4everybody';
import HeaderTools from './top-nav/header-tools';

import './icons';
import './footer';
import './progressive-image';

svg4everbody();

const initPage = () => {
  document.documentElement.classList.remove('no-js');
  loadHeaderTools();
};

document.addEventListener('DOMContentLoaded', initPage);

window.loadHeaderTools = () => {
  new HeaderTools();
};
