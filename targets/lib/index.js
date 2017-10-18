/*  eslint-disable no-new */
import Vue from 'vue';
import VueProgressiveImage from 'vue-progressive-image';

import lazyBgImg from '../../components/progressive-image';
import { AccordionGroup, AccordionPanel } from '../../components/accordion';
import ModalDialog from '../../components/modal';

import '../../components';

// Register Vue plugins, directives and components
Vue.use(VueProgressiveImage);
Vue.directive('bgimg', lazyBgImg);
Vue.component('accordion-group', AccordionGroup);
Vue.component('accordion-panel', AccordionPanel);
Vue.component('modal-dialog', ModalDialog);

// Create Vue instance
new Vue({ el: '#ui' });
