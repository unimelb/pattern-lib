import svg4everbody from 'svg4everybody';
import HeaderTools from './top-nav/header-tools';
import Frdialogmodal from 'fr-dialogmodal';

import './icons';
import './footer';

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
