import Vue from 'vue';
import { configure, addDecorator } from '@storybook/vue';
import { checkA11y } from '@storybook/addon-a11y';

import { setOptions } from '@storybook/addon-options';

import VueProgressiveImage from 'vue-progressive-image';

import { storyDecorator } from './utils';
import SvgIcon from '../components/icons/SvgIcon.vue';
import SectionWrap from '../components/section/SectionWrap.vue';
import ListItem from '../components/listing/ListItem.vue';
import ButtonIcon from '../components/buttons/ButtonIcon.vue';

import { version, repository } from '../package.json';

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
addDecorator(checkA11y);


// Configure Storybook UI
setOptions({
  name: `Pattern Library v${version}`,
  url: repository.url.replace(/\.git$/, ''),
});

// Load stories
const stories = require.context('../components', true, /stories\/index\.js$/);
configure(loadStories, module);

function loadStories() {
  stories.keys().forEach(filename => stories(filename));
}
