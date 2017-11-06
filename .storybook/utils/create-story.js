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
  if (opts.htmlTemplate) readmeArr.push('#### HTML template', codeBlock(pretty(renderMarkup(vm))));
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
 * Render a Vue component instance to string.
 * @param {Vue} vm
 * @return {String}
 */
function renderMarkup(vm) {
  const { componentInstance: comp } = vm._vnode;
  const { _vnode: node } = comp;
  let raw = '';

  // HTML outer
  let outer = document.createElement(node.tag);
  if (node.data && node.data.staticClass) {
    outer.classList.add(node.data.staticClass);
  }

  // Prevent double render
  const renderedUids = [];

  for (let h = 0, rootNodes = comp.$children.length; h < rootNodes; h += 1) {
    const parent = comp.$children[h].$vnode.context._vnode;
    // Pass an empty div through, otherwise track context uids rendered
    if ((parent.tag === 'div' && !(parent.data && parent.data.staticClass)) ||
      renderedUids.indexOf(comp.$children[h].$vnode.context._uid) === -1) {
      renderedUids.push(comp.$children[h].$vnode.context._uid);
      let recs = comp.$children[h].$options._renderChildren;
      if (recs) {
        // Component outer
        const componentProps = comp.$children[h].$vnode.componentOptions.propsData;
        outer = document.createElement(pascalToKebab(comp.$children[h].$vnode.componentOptions.tag));
        // Outer props
        if (componentProps) {
          for (let attrNames = Object.keys(componentProps), attrVals = Object.values(componentProps), i = attrNames.length - 1; i >= 0; i -= 1) {
            if (attrVals[i] !== 'false') {
              outer.setAttribute(`${attrNames[i]}`, attrVals[i]);
            }
          }
        }
        // Outer class
        if (comp.$children[h].$vnode.data.staticClass) {
          outer.classList.add(comp.$children[h].$vnode.data.staticClass);
        }
      } else {
        // HTML outer
        recs = node.children;
      }
      for (let i = 0, max = recs.length; i < max; i += 1) {
        if (recs[i].componentInstance && recs[i].componentInstance.$slots) {
          // Content of slot is another component
          const inner = document.createElement(pascalToKebab(recs[i].componentOptions.tag));
          let componentProps = recs[i].componentOptions.propsData;
          // Inner props
          if (componentProps) {
            for (let attrNames = Object.keys(componentProps), attrVals = Object.values(componentProps), j = attrNames.length - 1; j >= 0; j -= 1) {
              inner.setAttribute(`${attrNames[j]}`, attrVals[j]);
            }
          } else if (recs[i].data.attrs) {
            componentProps = recs[i].data.attrs;
            for (let attrNames = Object.keys(componentProps), attrVals = Object.values(componentProps), j = attrNames.length - 1; j >= 0; j -= 1) {
              inner.setAttribute(`${attrNames[j]}`, attrVals[j]);
            }
          }
          if (recs[i].data.staticClass) {
            inner.classList.add(recs[i].data.staticClass);
          }
          for (let slots = Object.values(recs[i].componentInstance.$slots), k = slots.length - 1; k >= 0; k -= 1) {
            for (let j = slots[k].length - 1; j >= 0; j -= 1) {
              let slotcontent;
              if (slots[k][j].elm && slots[k][j].tag && slots[k][j].data && slots[k][j].data.slot) {
                slotcontent = document.createElement(pascalToKebab(slots[k][j].tag));
                slotcontent.setAttribute('slot', slots[k][j].data.slot);
                inner.insertBefore(slotcontent, inner.firstChild);
              } else if (slots[k][j].elm) {
                // Filter empty nodes
                inner.insertBefore(slots[k][j].elm, inner.firstChild);
              } else if (slots[k][j].tag) {
                slotcontent = renderDown(slots[k][j]);
                const props = slots[k][j].data.attrs;
                if (props) {
                  for (let attrNames = Object.keys(props), attrVals = Object.values(props), l = attrNames.length - 1; l >= 0; l -= 1) {
                    slotcontent.setAttribute(`${attrNames[l]}`, attrVals[l]);
                  }
                }
                inner.insertBefore(slotcontent, inner.firstChild);
              }
            }
          }
          outer.appendChild(inner);
        } else if (recs[i].tag && recs[i].elm) {
          // Content of slot is HTML
          outer.appendChild(recs[i].elm);
        } else if (recs[i].tag && !recs[i].elm) {
          outer.appendChild(renderDown(recs[i]));
        }
      }
      raw += outer.outerHTML;
    }
  }

  return raw;
}

function renderDown(vnode) {
  const out = document.createElement(pascalToKebab(vnode.tag));
  if (vnode.data) {
    if (vnode.data.staticClass) {
      out.classList.add(vnode.data.staticClass);
    }
    if (vnode.data.attrs) {
      for (let attrNames = Object.keys(vnode.data.attrs), attrVals = Object.values(vnode.data.attrs), i = attrNames.length - 1; i >= 0; i -= 1) {
        out.setAttribute(`${attrNames[i]}`, attrVals[i]);
      }
    }
  }
  for (let max = vnode.children.length, i = 0; i < max; i += 1) {
    if (vnode.children[i].tag && vnode.children[i].children) {
      out.appendChild(renderDown(vnode.children[i]));
    } else if (vnode.children[i].text) {
      out.appendChild(document.createTextNode(vnode.children[i].text));
    }
  }
  return out;
}

/**
 * Convert a Pascal-case string to kebab case.
 * @param {String} txt
 * @return {String}
 */
function pascalToKebab(txt) {
  return txt.replace(/[a-z]([A-Z])+/g, m => (`${m[0]}-${m.substring(1)}`)).toLowerCase();
}
