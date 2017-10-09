import withReadme from 'storybook-readme/with-readme';
import { renderMarkup } from '.storybook/utils';

function htmlBlock(markup) {
  return '```html\n' + markup + '\n```';
}

export default function createStory(StoryComponent, showMinifiedMarkup = false) {
  const { prettified, minified } = renderMarkup(StoryComponent);
  const readme = `${showMinifiedMarkup ? `### Minified markup\n${htmlBlock(minified)}\n### Markup\n` : ''}${htmlBlock(prettified)}`;
  return withReadme(readme, () => StoryComponent);
}
