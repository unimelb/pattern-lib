import { configure } from '@storybook/vue';

// Import lib styles
import '../components/index.css';


const stories = require.context('../components', true, /stories\.js$/);

function loadStories() {
  stories.keys().forEach((filename) => stories(filename))
}

configure(loadStories, module);
