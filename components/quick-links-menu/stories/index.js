import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import {
  withKnobs,
  text,
  number,
  boolean,
  array,
  select,
  color,
  date,
} from '@storybook/addon-knobs';
import ButtonIcon from './../../buttons/stories/ButtonIcon.vue';
import QuickLinks from './QuickLinks.vue';
import QuickLinksMenuItem from './QuickLinksMenuItem.vue';

storiesOf('Quick Link Menu', module)
  .addDecorator(withKnobs)
  .add(
    'Menu - Alt A', () => {
      const title = text('Title', 'Australia’s leading university');
      const btnText = text('Button Text', 'Read more');
      const content = text('Content', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur praesentium quam voluptatem qui minus, amet quidem facilis non commodi, distinctio dolore aperiam illum ut libero ad maxime dicta iure deleniti.');
      const menuLinks = array('Menu Links', ['Strategy and governance', 'Leadership', 'Working with us', 'News and resources', 'Campus and maps']);
      const versions = select('Versions', ['ql-menu--l1', 'ql-menu--l2', 'ql-menu--l3', 'ql-menu--l4'], 'ql-menu--l1');
      return {
        components: { ButtonIcon, QuickLinks, QuickLinksMenuItem },
        template: `
          <section-wrap class="bg-white">
            <quick-links>
              <div slot="content">
                <h2>
                  ${title}
                </h2>
                <p>${content}</p>
                <button-icon icon="chevron-right" class="btn--xwide">${btnText}</button-icon>
              </div>
              ${menuLinks.map(item => `<quick-links-menu-item>${item}</quick-links-menu-item>`).join('')}
            </quick-links>
          </section-wrap>
        `,
      };
    },
  )
  .add(
    'Menu - Alt B', () => {
      const title = text('Title', 'Learning and teaching');
      const subTitle = text('Sub Title', 'Explore growing esteem');
      const btnText = text('Button Text', 'Read more');
      const content = text('Content', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur praesentium quam voluptatem qui minus, amet quidem facilis non commodi, distinctio dolore aperiam illum ut libero ad maxime dicta iure deleniti.');
      const menuLinks = array('Menu Links', ['Strategy and governance', 'Leadership', 'Working with us', 'News and resources', 'Campus and maps']);
      const level = select('level', ['ql-menu--l1', 'ql-menu--l2', 'ql-menu--l3', 'ql-menu--l4'], 'ql-menu--l2');
      return {
        components: { ButtonIcon, QuickLinks, QuickLinksMenuItem },
        template: `
          <section-wrap class="bg-white">
            <quick-links level="${level}">
              <div slot="content">
                <h2>
                  ${title}
                </h2>
                <p>${content}</p>
              </div>
              ${subTitle.length > 0 ? `<h3>${subTitle}</h3>` : ''}
              ${menuLinks.map(item => `<quick-links-menu-item>${item}</quick-links-menu-item>`).join('')}
            </quick-links>
          </section-wrap>
        `,
      };
    },
  );    

