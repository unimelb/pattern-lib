import Vue from 'vue';
import pretty from 'pretty';

export default class RenderMarkup {
  constructor(Component, props = {}) {
    const template = new Vue({
      el: '#instance-outside-dom',
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
  }

  CDNifySrc() {
    this.markup = this.markup.replace(/src=\"(\/)?logo\-unhoused\.svg\"/, 'src="https://d2glwx35mhbfwf.cloudfront.net/v0.0.3/logo-unhoused.svg"');
  }

  DeComment() {
    this.markup = this.markup.replace(/\<\!(-)*\>/g, '');
  }
}
