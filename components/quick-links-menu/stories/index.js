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

storiesOf('Quick Link Menu', module)
  .addDecorator(withKnobs)
  .add(
    'Menu - Alt A', () => {
      const title = text('Title', 'Australia’s leading university');
      const content = text('Content', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur praesentium quam voluptatem qui minus, amet quidem facilis non commodi, distinctio dolore aperiam illum ut libero ad maxime dicta iure deleniti.');
      const menuLinks = array('Menu Links', ['Strategy and governance', 'Leadership', 'Working with us', 'News and resources', 'Campus and maps']);
      const versions = select('Versions', ['ql-menu--l1', 'ql-menu--l2', 'ql-menu--l3', 'ql-menu--l4'], 'ql-menu--l1');
      return {
        components: {ButtonIcon},
        template: `
          <section class="section">
            <div class="max section__inner section__inner--short ql-menu ${versions}">
              <div class="grid">
                <div class="cell cell--desk-2of3">
                  <div class="ql-menu__content">
                    <h2 class="heading-section">
                      ${title}
                    </h2>
                    <p class="lead">${content}</p>
                    <button-icon icon="chevron-right" class="btn--xwide" btnText="Welcome from the Vice-Chancellor" />
                  </div>
                </div>
                <div class="cell cell--desk-1of3">
                  <nav class="ql-menu__nav ">
                    ${menuLinks.map(item => `<a class="ql-menu__link" href="#"><span class="push-icon">${item}<svg class="push-icon__icon" focusable="false" height="16" role="presentation" width="16"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-chevron-right"></use></svg></span></a>`  ).join('')}
                  </nav>
                </div>
              </div>
            </div>
          </section>
        `
      }
    }
)
.add(
  'Menu - Alt B', () => {
    const title = text('Title', 'Research');
    const subTitle = text('Sub Title', 'Explore growing esteem');
    const content = text('Content', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur praesentium quam voluptatem qui minus, amet quidem facilis non commodi, distinctio dolore aperiam illum ut libero ad maxime dicta iure deleniti.');
    const menuLinks = array('Menu Links', ['Research', 'Learning and teaching', 'Working with us', 'News and resources', 'Campus and maps']);
    const versions = select('Versions', ['ql-menu--l1', 'ql-menu--l2', 'ql-menu--l3', 'ql-menu--l4'], 'ql-menu--l2');
    return {
      template: `
        <section class="section">
          <div class="section__inner section__inner ql-menu ${versions}">
            <div class="grid">
              <div class="cell cell--desk-2of3">
                <div class="ql-menu__content">
                  <h2 class="heading-section">
                    ${title}
                  </h2>
                  <p>${content}</p>
                </div>
              </div>
              <div class="cell cell--desk-1of3">
                <nav class="ql-menu__nav">
                  ${subTitle.length > 0 ? `<h3 class="heading-card">${subTitle}</h3>` : ''}
                  ${menuLinks.map(item => `<a class="ql-menu__link" href="#"><span class="push-icon">${item}<svg class="push-icon__icon" focusable="false" height="16" role="presentation" width="16"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-chevron-right"></use></svg></span></a>`  ).join('')}
                </nav>
              </div>
            </div>
          </div>
        </section>
      `
    }
  }
)

