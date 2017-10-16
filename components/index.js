import Vue from 'vue';
import Ike from 'ike.js';

import { version } from '../package.json';
import * as utils from './shared/utils';
import sprite from './icons/sprite.svg';
import HeaderTools from './top-nav/header-tools';
import Frdialogmodal from './modal/dialogmodal';
import VueProgressiveImage from 'vue-progressive-image';
// import Fraccordion from './accordion/_fr-accordion';

import * as shared from './shared';

import './progressive-image';
import './accordion';

// Expose JS utilities
window.ui = {
  utils,
  loadHeaderTools: () => { new HeaderTools(); },
  frdialogmodal: Frdialogmodal,
};

// Inject SVG sprite
new Ike(sprite, version); // eslint-disable-line no-new

// Initialise page on DOM loaded
document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.classList.remove('no-js');
  window.ui.loadHeaderTools();
  window.ui.frdialogmodal();

  new Vue({ // eslint-disable-line no-new
    el: 'main',
  }).use(VueProgressiveImage);
});
