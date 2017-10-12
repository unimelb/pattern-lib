import withReadme from 'storybook-readme/with-readme';
import { renderMarkup } from '.storybook/utils';

function htmlBlock(markup) {
  return '```html\n' + markup + '\n```'; // eslint-disable-line prefer-template
}

/**
 * Create a story factory.
 * Usage: `storiesOf('my-component').add('my-story', createStory(MyStory))`
 * @param {Component} Story - the story's Vue component
 * @param {Object} opts - options for readme panel
 */
export default function createStory(Story, opts = { showMinifiedMarkup: false, customReadme: false, shallowRender: false}) {
  const { prettified, minified } = renderMarkup(Story, opts);
  let readme = opts.customReadme;
  if (!readme) {
    readme = `${opts.showMinifiedMarkup ? `### Minified markup\n${htmlBlock(minified)}\n### Markup\n` : ''}${htmlBlock(prettified)}`;
  }
  return withReadme(readme, () => Story);
}
