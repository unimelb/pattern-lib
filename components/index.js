/*  eslint-disable no-new */
import Ike from 'ike.js';

import { version } from '../package.json';
import * as utils from './shared/utils';
import sprite from './icons/sprite.svg';

import './side-panel';
import './photo-gallery';
import initTracking from './page/tracking';

window.ui = {
  utils,
};

// Inject SVG sprite
new Ike(sprite, version);

// Initialise page on DOM loaded
document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.classList.remove('no-js');
  initTracking();
});
