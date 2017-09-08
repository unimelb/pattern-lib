import { configure } from '@storybook/vue';

// Import lib styles
import '../components/index.css';
import './index.css';

// Import lib scripts
import '../components/index.js';


const stories = require.context('../components', true, /stories\/index\.js$/);

function loadStories() {
  stories.keys().forEach((filename) => stories(filename))
}

configure(loadStories, module);
