/*  eslint-disable no-new */
import Vue from 'vue';
import VueProgressiveImage from 'vue-progressive-image';

import lazyBgImg from '../../components/progressive-image';
import { AccordionGroup, AccordionPanel } from '../../components/accordion';
import ModalDialog from '../../components/modal';
import PageNav from '../../components/page-nav';
import PageSearch from '../../components/page-search';

import '../../components';

// Register Vue plugins, directives and components
Vue.use(VueProgressiveImage);
Vue.directive('bgimg', lazyBgImg);
Vue.component('accordion-group', AccordionGroup);
Vue.component('accordion-panel', AccordionPanel);
Vue.component('modal-dialog', ModalDialog);
Vue.component('page-nav', PageNav);
Vue.component('page-search', PageSearch);

// Create Vue instance
new Vue({ el: '#ui' });
