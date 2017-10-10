import Vue from 'vue';
import pretty from 'pretty';

export default function renderMarkup(Component, props) {
  // Create component instance without mounting it
  const vm = new Vue({ render: createElement => createElement(Component, props) });

  // Render the instance outside of the DOM
  vm.$mount();

  // Retrieve the markup of the instance's root element
  const raw = vm.$el.outerHTML.replace(/<!(-)*>/g, '');

  return {
    raw,
    prettified: pretty(raw),
    minified: raw.replace(/\n/g, ''),
  };
}
