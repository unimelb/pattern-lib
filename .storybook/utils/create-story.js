import Vue from 'vue';
import pretty from 'pretty';
import merge from 'lodash.merge';
import withReadme from 'storybook-readme/with-readme';
import { storyDecorator } from '.storybook/utils';

const readmeDefaults = {
  custom: null,
  htmlTemplate: false,
  vueTemplate: true,
  source: {
    full: true,
    minified: false,
    decorated: false,
  },
};

/**
 * Prepare a story component and generate its README.
 * Usage: `storiesOf('my-component').add('my-story', createStory(MyStory))`
 * @param {Component} Story - the story's Vue component
 * @param {Object} opts - options for readme panel
 */
export default function createStory(Story) {
  const readmeOpts = merge({}, readmeDefaults, Story.readme || {});
  const readme = generateReadme(Story, readmeOpts);
  return withReadme(readme, () => Story);
}

function generateReadme(Story, opts) {
  const readmeArr = [];

  if (opts.custom) readmeArr.push(custom);
  // if (opts.htmlTemplate) readmeArr.push('## HTML template', codeBlock(renderHtmlTemplate()));
  // if (opts.vueTemplate) readmeArr.push('## Vue template', codeBlock(renderVueTemplate(), 'vue'));

  if (!opts.source) return readmeArr.join('\n');

  const { full, minified, decorated } = opts.source;
  readmeArr.push('## Source');

  if (full || minified) {
    const source = renderToString(Story);

    if (full) readmeArr.push(codeBlock(pretty(source)));
    if (minified) readmeArr.push('### Minified', codeBlock(source.replace(/\n/g, '')));
  }

  if (decorated) {
    const decoratedSource = renderToString(storyDecorator(() => Story));
    readmeArr.push('### Decorated', codeBlock(pretty(decoratedSource)));
  }

  return readmeArr.join('\n');
}

function renderToString(Component) {
  // Create component instance without mounting it
  const vm = new Vue({ render: createElement => createElement(Component) });

  // Render the instance outside of the DOM
  vm.$mount();
  return vm.$el.outerHTML;
}

function codeBlock(markup, lang = 'html') {
  return '```' + lang + '\n' + markup + '\n```'; // eslint-disable-line prefer-template
}
