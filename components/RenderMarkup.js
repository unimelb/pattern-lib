import Vue from 'vue';
import pretty from 'pretty';

export default class RenderMarkup {
  constructor(Component, props = {}) {
    const tmpl = document.createElement('div');
    tmpl.id = 'template-component-instance'; // container consumed by vue expansion

    const mark = document.createElement('div');
    mark.id = 'mark-for-deletion'; // container to target for later deletion

    mark.appendChild(tmpl);
    document.body.appendChild(mark);

    const template = new Vue({
      el: '#template-component-instance',
      render: createElement => createElement(Component, props),
    });

    // There must be a more elegant/legit way to do this
    this.raw = template._vnode.elm.outerHTML;

    this.markup = this.raw;

    // Strip comments
    this.DeComment();

    this.max = pretty(this.markup);
    this.min = this.markup.replace(/\n/g, '');

    this.prettifiedMarkup = `## Sample Markup\n\`\`\`html\n${this.max}\n\`\`\`\n`;
    this.minifiedMarkup = `## Minified\n\`\`\`html\n${this.min}\n\`\`\`\n`;

    // Vue allows expansion outside the DOM but it's tidier to allow the entire lifecycle
    mark.parentNode.removeChild(mark);
  }

  DeComment() {
    this.markup = this.markup.replace(/\<\!(-)*\>/g, '');
  }
}
