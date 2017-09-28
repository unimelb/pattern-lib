import svg4everbody from 'svg4everybody';
import HeaderTools from './top-nav/header-tools';
import Frdialogmodal from './modal/dialogmodal.js';

import './icons';
import './footer';
import './progressive-image';

svg4everbody();

const initPage = () => {
  document.documentElement.classList.remove('no-js');
  loadHeaderTools();
  Frdialogmodal();
};

document.addEventListener('DOMContentLoaded', initPage);

window.loadHeaderTools = () => {
  new HeaderTools();
};
