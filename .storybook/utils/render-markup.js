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
    // HTML outer
    let outer = document.createElement(vm._vnode.componentInstance._vnode.tag);
    if (vm._vnode.componentInstance._vnode.data && vm._vnode.componentInstance._vnode.data.staticClass) {
      outer.classList.add(vm._vnode.componentInstance._vnode.data.staticClass);
    }
    // Prevent double render
    const renderedUids = [];
    for (let h = 0, rootnodes = vm._vnode.componentInstance.$children.length; h < rootnodes; h += 1) {
      const parent = vm._vnode.componentInstance.$children[h].$vnode.context._vnode;
      // Pass an empty div through, otherwise track context uids rendered
      if ((parent.tag === 'div' && !(parent.data && parent.data.staticClass)) ||
        renderedUids.indexOf(vm._vnode.componentInstance.$children[h].$vnode.context._uid) === -1) {
        renderedUids.push(vm._vnode.componentInstance.$children[h].$vnode.context._uid);
        let recs = vm._vnode.componentInstance.$children[h].$options._renderChildren;
        if (recs) {
          // Component outer
          const componentProps = vm._vnode.componentInstance.$children[h].$vnode.componentOptions.propsData;
          outer = document.createElement(pascalToKebab(vm._vnode.componentInstance.$children[h].$vnode.componentOptions.tag));
          if (componentProps) {
            for (let attrNames = Object.keys(componentProps), attrVals = Object.values(componentProps), i = attrNames.length - 1; i >= 0; i -= 1) {
              if (attrVals[i] !== 'false') {
                outer.setAttribute(`${attrNames[i]}`, attrVals[i]);
              }
            }
          }
        } else {
          // HTML outer
          recs = vm._vnode.componentInstance._vnode.children;
        }
        for (let i = 0, max = recs.length; i < max; i += 1) {
          if (recs[i].componentInstance && recs[i].componentInstance.$slots) {
            // Content of slot is another component
            const inner = document.createElement(pascalToKebab(recs[i].componentOptions.tag));
            const componentProps = recs[i].componentOptions.propsData;
            if (componentProps) {
              for (let attrNames = Object.keys(componentProps), attrVals = Object.values(componentProps), j = attrNames.length - 1; j >= 0; j -= 1) {
                inner.setAttribute(`${attrNames[j]}`, attrVals[j]);
              }
            }
            for (let slots = Object.values(recs[i].componentInstance.$slots), k = slots.length - 1; k >= 0; k -= 1) {
              for (let j = slots[k].length - 1; j >= 0; j -= 1) {
                if (slots[k][j].tag) {
                  const slotcontent = slots[k][j].elm;
                  if (slots[k][j].data && slots[k][j].data.slot) {
                    slotcontent.setAttribute('slot', slots[k][j].data.slot);
                  }
                  inner.insertBefore(slotcontent, inner.firstChild);
                } else {
                  inner.appendChild(slots[k][j].elm);
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
    }
  } else {
    raw = vm.$el.outerHTML.replace(/<!(-)*>/g, '');
  }

  return {
    raw,
    prettified: pretty(raw),
    minified: raw.replace(/\n/g, ''),
  };
}
