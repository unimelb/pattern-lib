import pretty from 'pretty';
import { paramCase } from 'change-case';

/**
 * Reverse-engineer the HTML template of a Vue component instance.
 * @param {Vue} vm
 * @return {String}
 */
export default function htmlTemplate(vm) {
  // Get root vnode (ignore wrapper)
  const root = vm._vnode;

  // Convert vnode to DOM element
  const elem = vnodeToElement(root);

  // Return markup after cleaning it a little
  return pretty(cleanUpBooleanAttrs(elem.outerHTML));
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
