/*  eslint-disable no-new */
import 'babel-polyfill';

import Vue from 'vue';
import VueProgressiveImage from 'vue-progressive-image';
import Ike from 'ike.js';
import { version } from '../../package.json';

import SectionToggle from '../../components/section/toggle';
import CheckList from '../../components/check-list';
import ModalDialog from '../../components/modal';
import PageNav from '../../components/page/nav';
import PageSearch from '../../components/page/search';
import TabGroup from '../../components/tabs';
import AccordionGroup from '../../components/accordion';
import PhotoGallery from '../../components/photo-gallery';

import '../../components';

// Inject SVG sprite
const loadExternalAssets = process.env.LOAD_EXTERNAL_ASSETS === 'true';
const publicPath = loadExternalAssets ? `${process.env.CDN_URL}/v${version}/` : '';
new Ike(`${publicPath}sprite.svg`, version);

// Load shared SVG assets
require.context('../../components/shared', false, /\.svg$/);

// Register Vue plugins, directives and components
Vue.use(VueProgressiveImage);
Vue.component('section-toggle', SectionToggle);
Vue.component('check-list', CheckList);
Vue.component('modal-dialog', ModalDialog);
Vue.component('page-nav', PageNav);
Vue.component('page-search', PageSearch);
Vue.component('tab-group', TabGroup);
Vue.component('accordion-group', AccordionGroup);
Vue.component('photo-gallery', PhotoGallery);

// Create Vue instance
new Vue({ el: '#ui' });
