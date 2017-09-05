import { configure } from '@storybook/vue';

function loadStories() {
  require.context('../components', true, /stories/);
}

configure(loadStories, module);
