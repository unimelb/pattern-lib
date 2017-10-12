/*  eslint-disable no-new */
import Vue from 'vue';
import VueProgressiveImage from 'vue-progressive-image';

import lazyBgImg from '../../components/progressive-image';
import { Accordion, AccordionBlock } from '../../components/accordion';

import '../../components';

// Register Vue plugins, directives and components
Vue.use(VueProgressiveImage);
Vue.directive('bgimg', lazyBgImg);
Vue.component('accordion', Accordion);
Vue.component('accordion-block', AccordionBlock);

// Create Vue instance
new Vue({ el: '#ui' });
