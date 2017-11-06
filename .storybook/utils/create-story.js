import Vue from 'vue';
import pretty from 'pretty';
import merge from 'lodash.merge';
import withReadme from 'storybook-readme/with-readme';
import { codeBlock, storyDecorator } from '.storybook/utils';

const readmeDefaults = {
  custom: null,
  htmlTemplate: false,
  // vueTemplate: true,
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

/**
 * Generate a story's README.
 * @param {Object} Story
 * @param {Object} opts
 * @return {String}
 */
function generateReadme(Story, opts) {
  const readmeArr = [];

  // Start with custom documentation, if provided
  if (opts.custom) readmeArr.push(opts.custom);

  // Mount story and retrieve HTML source
  const vm = mount(Story);
  const source = (vm.$el.outerHTML || '').replace(/(\<!--.*?\-->)/g, ''); // strip comments

  // Render and append HTML template
  if (opts.htmlTemplate) readmeArr.push('#### HTML template', codeBlock(pretty(reverseEngineerHtmlTemplate(vm))));
  // if (opts.vueTemplate) readmeArr.push('#### Vue template', codeBlock(renderVueTemplate(), 'vue'));
  if (!opts.source) return readmeArr.join('\n'); // return README if complete

  // Append full, minified and decorated source in turn
  if (opts.source.minified) readmeArr.push('#### Minified source', codeBlock(source.replace(/\n/g, '')));
  if (opts.source.full) readmeArr.push('#### Source', codeBlock(pretty(source)));

  if (opts.source.decorated) {
    const decoratedSource = mount(storyDecorator(() => Story)).$el.outerHTML;
    readmeArr.push('#### Decorated source', codeBlock(pretty(decoratedSource)));
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
  const vm = new Vue({ render: createElement => createElement(Component) });

  // Render the instance outside of the DOM and return it
  return vm.$mount();
}

/**
 * Reverse-engineer the HTML template of a Vue component instance.
 * @param {Vue} vm
 * @return {String}
 */
function reverseEngineerHtmlTemplate(vm) {
  // Get root vnode (ignore wrapper)
  const root = vm.$children[0]._vnode;

  // Convert vnode to DOM element
  const elem = vnodeToElement(root);

  // Retrieve markup and clean it a little
  const markup = cleanUpBooleanAttrs(elem.outerHTML);
  return markup;
}

function vnodeToElement(vnode) {
  // A) Text node
  if (vnode.text) return document.createTextNode(vnode.text);

  // B) Vue component or DOM element
  const { componentOptions } = vnode;
  const isDomNode = !componentOptions; // whether vnode represents a normal DOM element (like `div`) or a Vue component

  // Find tag name and create element
  const tag = isDomNode ? vnode.tag : pascalToKebab(componentOptions.tag);
  const elem = document.createElement(tag);

  const props = componentOptions && componentOptions.propsData;
  if (props) Object.keys(props).forEach(prop => { elem.setAttribute(prop, props[prop]); });

  // Add `slot` attribute, classes, and remaining attributes
  const { attrs, slot, staticClass } = vnode.data || {};
  if (slot) elem.setAttribute('slot', slot);
  if (staticClass) elem.className = staticClass;
  if (attrs) Object.keys(attrs).forEach(attr => { elem.setAttribute(attr, attrs[attr]); });

  // Process and append children recursively
  const children = (isDomNode ? vnode.children : componentOptions.children) || [];
  children.forEach(child => { elem.appendChild(vnodeToElement(child)); });

  return elem;
}

/**
 * Convert a Pascal-case string to kebab case.
 * @param {String} txt
 * @return {String}
 */
function pascalToKebab(txt) {
  return txt.replace(/[a-z]([A-Z])+/g, m => (`${m[0]}-${m.substring(1)}`)).toLowerCase();
}

/**
 * Clean up boolean attributes - e.g. `open=""` to `open`
 * @param {String} markup
 * @return {String}
 */
function cleanUpBooleanAttrs(markup) {
  return markup.replace(/=""/g, '');
}
