import pretty from 'pretty';
import vnodeToElement from '../../components/shared/utils/vnode-to-element';

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
 * Clean up boolean attributes - e.g. `open=""` to `open`
 * @param {String} markup
 * @return {String}
 */
function cleanUpBooleanAttrs(markup) {
  return markup.replace(/=""/g, '');
}
