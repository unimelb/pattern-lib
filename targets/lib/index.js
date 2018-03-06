/*  eslint-disable no-new */
import 'babel-polyfill';

import Vue from 'vue';
import VueProgressiveImage from 'vue-progressive-image';
import Ike from 'ike.js';
import { version } from '../../package.json';

import SectionToggle from '../../components/section/toggle/SectionToggle.vue';
import SectionTogglePanel from '../../components/section/toggle/SectionTogglePanel.vue';
import CheckList from '../../components/check-list';
import ModalDialog from '../../components/modal';
import PageNav from '../../components/page/nav';
import PageSearch from '../../components/page/search';
import PageFooter from '../../components/page/footer';
import TabGroup from '../../components/tabs/TabGroup.vue';
import Tab from '../../components/tabs/Tab.vue';
import AccordionGroup from '../../components/accordion/AccordionGroup.vue';
import AccordionPanel from '../../components/accordion/AccordionPanel.vue';
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
Vue.component('section-toggle-panel', SectionTogglePanel);
Vue.component('check-list', CheckList);
Vue.component('modal-dialog', ModalDialog);
Vue.component('page-footer', PageFooter);
Vue.component('page-nav', PageNav);
Vue.component('page-search', PageSearch);
Vue.component('tab-group', TabGroup);
Vue.component('tab', Tab);
Vue.component('accordion-group', AccordionGroup);
Vue.component('accordion-panel', AccordionPanel);
Vue.component('photo-gallery', PhotoGallery);

// Create Vue instance
new Vue({ el: '#ui' });
