import withReadme from 'storybook-readme/with-readme';
import { renderMarkup } from '.storybook/utils';

function htmlBlock(markup) {
  return '```html\n' + markup + '\n```'; // eslint-disable-line prefer-template
}

/**
 * Create a story factory.
 * Usage: `storiesOf('my-component').add('my-story', createStory(MyStory))`
 * @param {Component} Story - the story's Vue component
 * @param {Boolean} showMinifiedMarkup - whether to show minifed markup in README
 */
export default function createStory(Story, showMinifiedMarkup = false) {
  const { prettified, minified } = renderMarkup(Story);
  const readme = `${showMinifiedMarkup ? `### Minified markup\n${htmlBlock(minified)}\n### Markup\n` : ''}${htmlBlock(prettified)}`;
  return withReadme(readme, () => Story);
}
