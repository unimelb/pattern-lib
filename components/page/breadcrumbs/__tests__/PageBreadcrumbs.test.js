import { mount } from 'vue-test-utils';
import SvgIcon from '../../../icons/SvgIcon.vue';
import PageBreadcrumbs from '../PageBreadcrumbs.vue';

describe('PageBreadcrumbs', () => {
  describe('`items` prop validator', () => {
    const { validator } = PageBreadcrumbs.props.items;

    it('rejects empty array', () => {
      expect(validator([])).toBeFalsy();
    });

    it('rejects items missing `href` and/or `text`', () => {
      expect(validator([{}])).toBeFalsy();
      expect(validator([{ href: '/foo' }])).toBeFalsy();
      expect(validator([{ text: 'Foo' }])).toBeFalsy();
    });

    it('accepts items with non-empty `href` and `text`', () => {
      expect(validator([{ href: '/foo', text: 'Foo' }])).toBeTruthy();
    });
  });

  describe('with two items', () => {
    let cmp;

    beforeEach(() => {
      cmp = mount(PageBreadcrumbs, {
        propsData: {
          items: [
            { href: '/foo', text: 'Foo' },
            { href: '/bar', text: 'Bar' },
          ],
        },
      });
    });

    it('should render an array of breadcrumb items', () => {
      const elems = cmp.findAll('li');
      expect(elems.length).toBe(2);
      expect(elems.at(0).find('a').hasAttribute('href', '/foo')).toBe(true);
      expect(elems.at(0).text()).toContain('Foo');
      expect(elems.at(1).find('a').hasAttribute('href', '/bar')).toBe(true);
      expect(elems.at(1).text()).toContain('Bar');
    });

    it('should indicate the position of each item to search engines', () => {
      const elems = cmp.findAll('meta[itemprop="position"]');
      expect(elems.length).toBe(2);
      expect(elems.at(0).hasAttribute('content', '1')).toBe(true);
      expect(elems.at(1).hasAttribute('content', '2')).toBe(true);
    });

    it('should render a `home` and a `chevron-right` icon inside the first item', () => {
      const elems = cmp.find('li').findAll(SvgIcon);
      expect(elems.at(0).hasProp('name', 'home')).toBe(true);
      expect(elems.at(1).hasProp('name', 'chevron-right')).toBe(true);

      // Ensure the icons are actually rendered (cf. below)
      expect(elems.at(0).html()).toContain('svg');
      expect(elems.at(1).html()).toContain('svg');
    });

    it('should not render any icon inside the last item', () => {
      // Seems like `vue-test-utils` is dumb when it comes to `v-if`...
      // `findAll(SvgIcon)` finds the icons even though they don't get rendered.
      const html = cmp.findAll('li').at(1).html();
      expect(html).not.toContain('svg');
    });

    it('should match snapshot', () => {
      expect(cmp.element).toMatchSnapshot();
    });
  });
});
