import Ike from 'ike.js';

import { version } from '../package.json';
import sprite from './icons/sprite.svg';
import HeaderTools from './top-nav/header-tools';
import Frdialogmodal from './modal/dialogmodal';

import * as shared from './shared';
import './progressive-image';

// Expose JS utilities
window.ui = {
  utils: shared.utils,
  loadHeaderTools: () => {
    new HeaderTools(); // eslint-disable-line no-new
  },
};

// Inject SVG sprite
new Ike(sprite, version); // eslint-disable-line no-new

// Initialise page on DOM loaded
document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.classList.remove('no-js');
  window.ui.loadHeaderTools();
  Frdialogmodal();
});
