import Vue from 'vue';
import pretty from 'pretty';

export default function renderMarkup(Component, opts = {}) {
  // Create component instance without mounting it
  const vm = new Vue({ render: createElement => createElement(Component) });

  // Render the instance outside of the DOM
  vm.$mount();

  // Retrieve the markup of the instance's root element
  if (!vm.$el.outerHTML) return {};
  let raw = '';

  if (opts.shallowRender === true) {
    /* eslint-disable no-underscore-dangle */
    if (vm._vnode.componentInstance.$children.length === 1) {
      const recs = vm._vnode.componentInstance.$children[0].$options._renderChildren;
      if (recs) {
        const componentProps = vm._vnode.componentInstance.$children[0].$vnode.componentInstance._props;
        const outer = document.createElement(vm._vnode.componentInstance.$children[0].$vnode.componentOptions.tag);
        for (let attrNames = Object.keys(componentProps), attrVals = Object.values(componentProps), i = attrNames.length - 1; i >= 0; i -= 1) {
          if (attrVals[i]) {
            outer.setAttribute(`:${attrNames[i]}`, attrVals[i]);
          }
        }
        for (let i = recs.length - 1; i >= 0; i -= 1) {
          if (recs[i].componentInstance && recs[i].componentInstance.$slots) {
            const inner = document.createElement(recs[i].componentOptions.tag);
            for (let slots = Object.values(recs[i].componentInstance.$slots), k = slots.length - 1; k >= 0; k -= 1) {
              for (let j = slots[k].length - 1; j >= 0; j -= 1) {
                if (slots[k][j].tag) {
                  const slotcontent = slots[k][j].elm;
                  if (slots[k][j].data) {
                    slotcontent.setAttribute('slot', slots[k][j].data.slot);
                  }
                  inner.appendChild(slotcontent);
                }
              }
            }
            outer.appendChild(inner);
          }
        }
        raw = outer.outerHTML;
      }
    }
    /* eslint-enable no-underscore-dangle */
  } else {
    raw = vm.$el.outerHTML.replace(/<!(-)*>/g, '');
  }

  return {
    raw,
    prettified: pretty(raw),
    minified: raw.replace(/\n/g, ''),
  };
}
