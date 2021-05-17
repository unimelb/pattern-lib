/*  eslint-disable no-new */
import Vue from 'vue';

import VueScrollTo from 'vue-scrollto';
import VScrollLock from 'v-scroll-lock';
import * as utils from './shared/utils';
import { version } from '../package.json';

// Add VueScrollTo setup

// Auto-inject SVG icon sprite with `svg-sprite-loader`
import './icons/sprite';

Vue.use(VueScrollTo, {
  duration: 500,
  easing: 'ease-out',
});

Vue.use(VScrollLock);

// Promise polyfill
require('es6-promise').polyfill();

// Expose JS utilities
window.ui = { utils };

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
      if (process.env.NODE_ENV !== 'production') {
        return;
      }

      // Set up tracking of Vue render errors in production
      Vue.config.errorHandler = (err) => {
        trackError('vue-render', err);
      };
    });
}

function trackError(category, err) {
  if (!window.utag) {
    return;
  }
  window.utag.link({
    ga_EventCategory: category,
    ga_EventAction: 'error',
    ga_EventLabel: err.toString(),
  });
}
