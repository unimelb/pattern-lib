import Vue from 'vue';
import pretty from 'pretty';

function pascalToKebab(txt) {
  return txt.replace(/[a-z]([A-Z])+/g, m => (`${m[0]}-${m.substring(1)}`)).toLowerCase();
}

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
    for (let h = 0, rootnodes = vm._vnode.componentInstance.$children.length; h < rootnodes; h += 1) {
      let outer;
      let recs = vm._vnode.componentInstance.$children[h].$options._renderChildren;
      if (recs) {
        const componentProps = vm._vnode.componentInstance.$children[0].$vnode.componentInstance._props;
        if (/[A-Z]/.test(vm._vnode.componentInstance.$children[0].$vnode.componentOptions.tag)) {
          outer = document.createElement(pascalToKebab(vm._vnode.componentInstance.$children[0].$vnode.componentOptions.tag));
        } else {
          outer = document.createElement(vm._vnode.componentInstance.$children[0].$vnode.componentOptions.tag);
        }
        for (let attrNames = Object.keys(componentProps), attrVals = Object.values(componentProps), i = attrNames.length - 1; i >= 0; i -= 1) {
          if (attrVals[i]) {
            outer.setAttribute(`:${attrNames[i]}`, attrVals[i]);
          }
        }
      } else {
        // HTML outer
        recs = vm._vnode.componentInstance._vnode.children;
        outer = document.createElement('div');
        outer.classList.add(vm._vnode.componentInstance._vnode.data.staticClass);
      }
      for (let i = 0, max = recs.length; i < max; i += 1) {
        if (recs[i].componentInstance && recs[i].componentInstance.$slots) {
          // Content of slot is another component
          let inner;
          if (/[A-Z]/.test(recs[i].componentOptions.tag)) {
            inner = document.createElement(pascalToKebab(recs[i].componentOptions.tag));
          } else {
            inner = document.createElement(recs[i].componentOptions.tag);
          }
          for (let slots = Object.values(recs[i].componentInstance.$slots), k = slots.length - 1; k >= 0; k -= 1) {
            for (let j = slots[k].length - 1; j >= 0; j -= 1) {
              if (slots[k][j].tag) {
                const slotcontent = slots[k][j].elm;
                if (slots[k][j].data) {
                  slotcontent.setAttribute('slot', slots[k][j].data.slot);
                }
                inner.insertBefore(slotcontent, inner.firstChild);
              }
            }
          }
          outer.appendChild(inner);
        } else if (recs[i].tag) {
          // Content of slot is HTML
          outer.appendChild(recs[i].elm);
        }
      }
      raw += outer.outerHTML;
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
