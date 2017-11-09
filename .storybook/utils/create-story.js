import Vue from 'vue';
import pretty from 'pretty';
import stripHtmlComments from 'strip-html-comments';
import withReadme from 'storybook-readme/with-readme';
import { codeBlock, htmlTemplate, storyDecorator } from '.storybook/utils';

const readmeDefaults = {
  custom: null,
  html: false,
  source: true,
  minified: false,
  decorated: false,
};

/**
 * Prepare a story component and generate its README.
 * Usage: `storiesOf('my-component').add('my-story', createStory(MyStory))`
 * @param {Component} Story - the story's Vue component
 * @param {Object} opts - options for readme panel
 */
export default function createStory(Story) {
  const readmeOpts = Object.assign({}, readmeDefaults, Story.readme || {});
  const readme = generateReadme(Story, readmeOpts);
  return withReadme(readme, () => Story);
}

/**
 * Generate a story's README.
 * @param {Object} Story
 * @param {Object} opts
 * @return {String}
 */
export function generateReadme(Story, opts) {
  const readmeArr = [];

  // Start with custom documentation, if provided
  if (opts.custom) readmeArr.push(opts.custom);

  // Mount story and retrieve HTML source
  const vm = mount(Story);

  if (opts.html) {
    // Reverse-engineer and append HTML template
    readmeArr.push('#### HTML template', codeBlock(htmlTemplate(vm)));
  }

  if (opts.source || opts.minified || opts.decorated) {
    // Retrieve full HTML source from mounted story and strip comments left by Vue's `v-if` directive
    const source = stripHtmlComments(vm.$el.outerHTML || '');

    // Append minified, full and decorated source in turn
    if (opts.minified) readmeArr.push('#### Minified source', codeBlock(source.replace(/\n/g, '')));
    if (opts.source) readmeArr.push('#### Source', codeBlock(pretty(source)));

    if (opts.decorated) {
      const decoratedSource = mount(storyDecorator(() => Story)).$el.outerHTML;
      readmeArr.push('#### Decorated source', codeBlock(pretty(decoratedSource)));
    }
  }

  return readmeArr.join('\n');
}

/**
 * Mount a Vue component outside of the DOM.
 * @param {Object} Component
 * @return {Vue}
 */
function mount(Component) {
  // Create component instance without mounting it
  const vm = new Vue(Component);

  // Render the instance outside of the DOM and return it
  return vm.$mount();
}
