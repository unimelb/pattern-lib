import Vue from 'vue';
import withReadme from 'storybook-readme/with-readme';
import pretty from 'pretty';

export default class WithMarkup {
  constructor(Component, props) {
    this.props = props || {};

    const template = new Vue({
      el: '#instance-outside-dom',
      render: (createElement) => {
        return createElement(Component);
      }
    });

    // there must be a more elegant/legit way to do this
    this.markup = template._vnode.elm.outerHTML;

    // Insert cdn url, until this renders from storybook prod
    this.CDNifySrc();

    this.prettyMarkup = pretty(this.markup);

    if (this.props.render == 'prettified') {
      return this.prettified();

    } else {
      return this.boilerplate();
    }
  }

  // For displaying markup blocks that will not change
  boilerplate() {
    return withReadme("## Minified\n```html\n" + this.markup + "\n```\n## Prettified\n```html\n" + this.prettyMarkup + "\n```\n");
  }

  // For displaying prettified markup on sample data
  prettified() {
    return withReadme("## Sample Markup\n```html\n" + this.prettyMarkup + "\n```\n");
  }

  CDNifySrc() {
    this.markup = this.markup.replace('src="/logo-unhoused.svg"', 'src="https://d2glwx35mhbfwf.cloudfront.net/v0.0.3/logo-unhoused.svg"');
  }
}
