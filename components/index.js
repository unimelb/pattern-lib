/*  eslint-disable no-new */
import Vue from 'vue';
import Ike from 'ike.js';
import sprite from './icons/sprite.svg';

import * as utils from './shared/utils';
import { version } from '../package.json';

import './side-panel';
import './photo-gallery';

// Expose JS utilities
window.ui = { utils };

// Inject SVG sprite
new Ike(sprite, version);

// Initialise page on DOM loaded
document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.classList.remove('no-js');
  initTracking();
});

function initTracking() {
  // Track pattern library version
  window.utag_data = window.utag_data || {};
  window.utag_data.uom_version = `v${version}`;

  utils.loadScript('https://tags.tiqcdn.com/utag/unimelb/main/prod/utag.js')
    .then(() => {
      if (process.env.NODE_ENV !== 'production') return;

      // Set up tracking of Vue render errors in production
      Vue.config.errorHandler = (err) => {
        trackError('vue-render', err);
      };
    });
}

function trackError(category, err) {
  if (!window.utag) return;
  window.utag.link({
    ga_EventCategory: category,
    ga_EventAction: 'error',
    ga_EventLabel: err.toString(),
  });
}
