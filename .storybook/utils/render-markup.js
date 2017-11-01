import Vue from 'vue';
import pretty from 'pretty';

function pascalToKebab(txt) {
  return txt.replace(/[a-z]([A-Z])+/g, m => (`${m[0]}-${m.substring(1)}`)).toLowerCase();
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
          // Outer props
          if (componentProps) {
            for (let attrNames = Object.keys(componentProps), attrVals = Object.values(componentProps), i = attrNames.length - 1; i >= 0; i -= 1) {
              if (attrVals[i] !== 'false') {
                outer.setAttribute(`${attrNames[i]}`, attrVals[i]);
              }
            }
          }
          // Outer class
          if (vm._vnode.componentInstance.$children[h].$vnode.data.staticClass) {
            outer.classList.add(vm._vnode.componentInstance.$children[h].$vnode.data.staticClass);
          }
        } else {
          // HTML outer
          recs = vm._vnode.componentInstance._vnode.children;
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
                  inner.appendChild(slots[k][j].elm);
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
  } else {
    raw = vm.$el.outerHTML.replace(/<!(-)*>/g, '');
  }

  return {
    raw,
    prettified: pretty(raw),
    minified: raw.replace(/\n/g, ''),
  };
}
