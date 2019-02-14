/*  eslint-disable no-new */
import 'babel-polyfill';

import Vue from 'vue';
import VueProgressiveImage from 'vue-progressive-image';
import Ike from 'ike.js';
import {
  version,
} from '../../package.json';

import ToggleBlock from '../../components/toggle/ToggleBlock.vue';
import ToggleGroup from '../../components/toggle/ToggleGroup.vue';
import ToggleBlockMobile from '../../components/toggle/ToggleBlockMobile.vue';
import Accordion from '../../components/accordion/Accordion.vue';
import AccordionGroup from '../../components/accordion/AccordionGroup.vue';
import CheckList from '../../components/check-list';
import MegaMenu from '../../components/page/megamenu';
import ModalDialog from '../../components/modal';
import PageNav from '../../components/page/nav';
import PageSearch from '../../components/page/search';
import PageSearchForm from '../../components/page/search/PageSearchForm.vue';
import PageFooter from '../../components/page/footer';
import Tabs from '../../components/tabs/Tabs.vue';
import Tab from '../../components/tabs/Tab.vue';
import PhotoGallery from '../../components/photo-gallery';
import InPageNavigation from '../../components/page/navigation/InPageNavigation.vue';
import OutPageNavigation from '../../components/page/navigation/OutPageNavigation.vue';
import FocusWrapper from '../../components/focusWrapper/FocusWrapper.vue';
import SvgIcon from '../../components/icons/SvgIcon.vue';


import '../../components';

// Inject SVG sprite
const loadExternalAssets = process.env.LOAD_EXTERNAL_ASSETS === 'true';
const publicPath = loadExternalAssets
  ? `${process.env.CDN_URL}/v${version}/`
  : '';
new Ike(`${publicPath}sprite.svg`, version);

// Load shared SVG assets
require.context('../../components/shared', false, /\.svg$/);

// Register Vue plugins, directives and components
Vue.use(VueProgressiveImage);
Vue.component('toggle-block', ToggleBlock);
Vue.component('toggle-group', ToggleGroup);
Vue.component('toggle-block-mobile', ToggleBlockMobile);
Vue.component('accordion', Accordion);
Vue.component('accordion-group', AccordionGroup);
Vue.component('check-list', CheckList);
Vue.component('mega-menu', MegaMenu);
Vue.component('modal-dialog', ModalDialog);
Vue.component('page-footer', PageFooter);
Vue.component('page-nav', PageNav);
Vue.component('page-search', PageSearch);
Vue.component('page-search-form', PageSearchForm);
Vue.component('tabs', Tabs);
Vue.component('tab', Tab);
Vue.component('photo-gallery', PhotoGallery);
Vue.component('in-page-navigation', InPageNavigation);
Vue.component('out-page-navigation', OutPageNavigation);
Vue.component('focus-wrapper', FocusWrapper);
Vue.component('svg-icon', SvgIcon);

// Create Vue instance
new Vue({
  el: '#ui',
});
