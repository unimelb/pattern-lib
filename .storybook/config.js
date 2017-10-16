import Vue from 'vue';
import { configure, addDecorator } from '@storybook/vue';
import VueProgressiveImage from 'vue-progressive-image';

import { storyDecorator } from './utils';
import Icon from 'icons/stories/Icon.vue';
import SectionWrap from '../components/section/SectionWrap.vue';
import ListItem from '../components/listing/stories/listitem.vue';
import ButtonIcon from '../components/buttons/stories/ButtonIcon.vue';

// Import documentation styles
import './index.css';

// Import components
import '../components/index.css';
import '../components/index.js';

// Register shared documentation plugins and components
Vue.use(VueProgressiveImage);
Vue.component('icon', Icon);
Vue.component('SectionWrap', SectionWrap);
Vue.component('ListItem', ListItem);
Vue.component('button-icon', ButtonIcon);

// Add polymorphic decorator
addDecorator(storyDecorator);

// Load stories
const stories = require.context('../components', true, /stories\/index\.js$/);
configure(loadStories, module);

function loadStories() {
  stories.keys().forEach(filename => stories(filename));
}
