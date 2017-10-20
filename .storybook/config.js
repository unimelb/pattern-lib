import Vue from 'vue';
import { configure, addDecorator } from '@storybook/vue';
import { setOptions } from '@storybook/addon-options';
import VueProgressiveImage from 'vue-progressive-image';

import { storyDecorator } from './utils';
import SvgIcon from 'icons/SvgIcon.vue';
import SectionWrap from '../components/section/SectionWrap.vue';
import ListItem from '../components/listing/stories/listitem.vue';
import ButtonIcon from '../components/buttons/ButtonIcon.vue';

import { version } from '../package.json';

// Import documentation styles
import './index.css';

// Import components
import '../components/index.css';
import '../components/index.js';

// Register shared documentation plugins and components
Vue.use(VueProgressiveImage);
Vue.component('SvgIcon', SvgIcon);
Vue.component('SectionWrap', SectionWrap);
Vue.component('ListItem', ListItem);
Vue.component('ButtonIcon', ButtonIcon);

// Add polymorphic decorator
addDecorator(storyDecorator);

setOptions({
  name: `Web Templates v${version}`,
  url: '/',
});

// Load stories
const stories = require.context('../components', true, /stories\/index\.js$/);
configure(loadStories, module);

function loadStories() {
  stories.keys().forEach(filename => stories(filename));
}
