import Vue from 'vue';
import { configure } from '@storybook/vue';
import Icon from '../components/icons/stories/Icon.vue';

// Import lib styles
import '../components/index.css';

// Register shared documentation components
Vue.component('icon', Icon);

// Load stories
const stories = require.context('../components', true, /stories\/index\.js$/);
configure(loadStories, module);

function loadStories() {
  stories.keys().forEach((filename) => stories(filename))
}
