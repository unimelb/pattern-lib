/*  eslint-disable no-new */
import Ike from 'ike.js';

import { version } from '../package.json';
import * as utils from './shared/utils';
import sprite from './icons/sprite.svg';

import HeaderTools from './top-nav/header-tools';
import Frdialogmodal from './modal/dialogmodal';

window.ui = {
  utils,
  loadHeaderTools: () => { new HeaderTools(); },
  frdialogmodal: Frdialogmodal,
};

// Inject SVG sprite
new Ike(sprite, version);

// Initialise page on DOM loaded
document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.classList.remove('no-js');
  window.ui.loadHeaderTools();
  window.ui.frdialogmodal();
});
