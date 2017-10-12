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
    if (vm._vnode.componentInstance.$children.length === 1) {
      const recs = vm._vnode.componentInstance.$children[0].$options._renderChildren;
      if (recs) {
        const attrs = vm._vnode.componentInstance.$children[0].$vnode.componentInstance._props;
        let outer = document.createElement(vm._vnode.componentInstance.$children[0].$vnode.componentOptions.tag);
        for (let prop in attrs) {
          if (attrs[prop]) {
            outer.setAttribute(`:${prop}`, attrs[prop]);
          }
        }
        for (let i = recs.length - 1; i >= 0; i--) {
          if (recs[i].componentInstance && recs[i].componentInstance.$slots) {
            let inner = document.createElement(recs[i].componentOptions.tag);
            const obj = recs[i].componentInstance.$slots;
            for (let prop in obj) {
              for (let j = obj[prop].length - 1; j >= 0; j--) {
                if (obj[prop][j].tag) {
                  let slotcontent = obj[prop][j].elm;
                  if (obj[prop][j].data) {
                    slotcontent.setAttribute('slot', obj[prop][j].data.slot);
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

  } else {
    raw = vm.$el.outerHTML.replace(/<!(-)*>/g, '');
  }

  return {
    raw,
    prettified: pretty(raw),
    minified: raw.replace(/\n/g, ''),
  };
}
