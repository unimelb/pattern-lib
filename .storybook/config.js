import Vue from 'vue';
import { configure } from '@storybook/vue';
import Icon from 'icons/stories/Icon.vue';
import SectionWrap from '../components/section/stories/SectionWrap.vue';

// Import lib and documentation styles
import '../components/index.css';
import './index.css';

// Import lib scripts
import '../components/index.js';

// Register shared documentation components
Vue.component('icon', Icon);
Vue.component('section-wrap', SectionWrap);

// Load stories
const stories = require.context('../components', true, /stories\/index\.js$/);
configure(loadStories, module);

function loadStories() {
  stories.keys().forEach((filename) => stories(filename))
}
