import Vue from 'vue';
import ProgBgImg from './progbgimg.js';
import VueProgressiveImage from 'vue-progressive-image';

Vue.directive('bgimg', ProgBgImg);
Vue.use(VueProgressiveImage);
