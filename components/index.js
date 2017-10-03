import Ike from 'ike.js';

import { version } from '../package.json';
import sprite from './icons/sprite.svg';
import HeaderTools from './top-nav/header-tools';
import Frdialogmodal from './modal/dialogmodal.js';

import './shared';
import './progressive-image';

// Inject SVG sprite
const Sprite = new Ike(sprite, version);

const initPage = () => {
  document.documentElement.classList.remove('no-js');
  loadHeaderTools();
  Frdialogmodal();
};

document.addEventListener('DOMContentLoaded', initPage);

window.loadHeaderTools = () => {
  new HeaderTools();
};
