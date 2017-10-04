import Vue from 'vue';
import pretty from 'pretty';

export default class RenderMarkup {
  constructor(Component, props = {}) {
    let tmpl = document.createElement('div');
    tmpl.id = 'template-component-instance'; // container consumed by vue expansion

    let mark = document.createElement('div');
    mark.id = 'mark-for-deletion'; // container to target for later deletion

    mark.appendChild(tmpl);
    document.body.appendChild(mark);

    const template = new Vue({
      el: '#template-component-instance',
      render: (createElement) => {
        return createElement(Component, props);
      }
    });

    // There must be a more elegant/legit way to do this
    this.raw = template._vnode.elm.outerHTML;

    this.markup = this.raw;

    // Insert cdn url, until this renders from storybook prod
    this.CDNifySrc();

    // Strip comments
    this.DeComment();

    this.max = pretty(this.markup);
    this.min = this.markup.replace(/\n/g, '');

    this.prettifiedMarkup = "## Sample Markup\n```html\n" + this.max + "\n```\n";
    this.minifiedMarkup = "## Minified\n```html\n" + this.min + "\n```\n";

    // Vue allows expansion outside the DOM but it's tidier to allow the entire lifecycle
    mark.parentNode.removeChild(mark);
  }

  CDNifySrc() {
    this.markup = this.markup.replace(/src=\"(\/)?logo\-unhoused\.svg\"/, 'src="https://d2glwx35mhbfwf.cloudfront.net/v0.0.3/logo-unhoused.svg"');
  }

  DeComment() {
    this.markup = this.markup.replace(/\<\!(-)*\>/g, '');
  }
}
