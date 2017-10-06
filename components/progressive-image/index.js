import Vue from 'vue';
import VueProgressiveImage from 'vue-progressive-image';
import ProgBgImg from './progbgimg';

Vue.directive('bgimg', ProgBgImg);
Vue.use(VueProgressiveImage);
