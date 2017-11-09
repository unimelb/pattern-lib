import Vue from 'vue';
import pretty from 'pretty';
import { paramCase } from 'change-case';
import stripHtmlComments from 'strip-html-comments';
import withReadme from 'storybook-readme/with-readme';
import { codeBlock, storyDecorator } from '.storybook/utils';

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
    readmeArr.push('#### HTML template', codeBlock(pretty(reverseEngineerTemplate(vm))));
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
export function mount(Component) {
  // Create component instance without mounting it
  const vm = new Vue(Component);

  // Render the instance outside of the DOM and return it
  return vm.$mount();
}

/**
 * Reverse-engineer the Vue or HTML template of a Vue component instance.
 * @param {Vue} vm
 * @return {String}
 */
export function reverseEngineerTemplate(vm) {
  // Get root vnode (ignore wrapper)
  const root = vm._vnode;

  // Convert vnode to DOM element
  const elem = vnodeToElement(root);

  // Return markup after cleaning it a little
  return cleanUpBooleanAttrs(elem.outerHTML);
}

/**
 * Convert a Vnode to a DOM element (or text node).
 * @param {Object} vnode
 * @return {Node}
 */
function vnodeToElement(vnode) {
  // A) Text node
  if (vnode.text) return document.createTextNode(vnode.text);

  // B) Vue component or DOM element
  const { componentOptions } = vnode;
  const isDomNode = !componentOptions; // whether vnode represents a normal DOM element (like `div`) or a Vue component

  // Find tag name and create element
  const tag = isDomNode ? vnode.tag : paramCase(componentOptions.tag);
  const elem = document.createElement(tag);

  const props = componentOptions && componentOptions.propsData;
  if (props) Object.keys(props).forEach((prop) => { elem.setAttribute(paramCase(prop), props[prop]); });

  // Add `slot` attribute, classes, and remaining attributes
  const { attrs, slot, staticClass } = vnode.data || {};
  if (slot) elem.setAttribute('slot', slot);
  if (staticClass) elem.className = staticClass;
  if (attrs) Object.keys(attrs).forEach((attr) => { elem.setAttribute(attr, attrs[attr]); });

  // Process and append children recursively
  const children = (isDomNode ? vnode.children : componentOptions.children) || [];
  children.forEach((child) => { elem.appendChild(vnodeToElement(child)); });

  return elem;
}

/**
 * Clean up boolean attributes - e.g. `open=""` to `open`
 * @param {String} markup
 * @return {String}
 */
function cleanUpBooleanAttrs(markup) {
  return markup.replace(/=""/g, '');
}
