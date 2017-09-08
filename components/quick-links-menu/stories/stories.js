import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { withNotes } from '@storybook/addon-notes';
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


storiesOf('Quick Link Menu', module)
  .addDecorator(withKnobs)
  .add(
    'Menu',
    withNotes(
      `
        <div>
          <style>pre {  background-color: #444;  color: #eee; } </style>
          <h2>Page header Level 1</h2>
          <pre>
            <code>
              &lt;section class=&quot;section&quot;&gt;
                &lt;div class=&quot;max section__inner section__inner--short&quot;&gt;
                  &lt;h2&gt;
                    title
                  &lt;/h2&gt;
                  &lt;div class=&quot;grid&quot;&gt;
                    &lt;div class=&quot;cell cell--desk-2of3&quot; style=&quot;padding-right: 3rem;&quot;&gt;
                      &lt;p&gt;content&lt;/p&gt;
                      &lt;a class=&quot;btn btn--lead&quot; href=&quot;#&quot;&gt;&lt;span class=&quot;push-icon&quot;&gt;Read More&lt;svg class=&quot;push-icon__icon&quot; focusable=&quot;false&quot; height=&quot;16&quot; role=&quot;presentation&quot; width=&quot;16&quot;&gt;&lt;use xmlns:xlink=&quot;http://www.w3.org/1999/xlink&quot; xlink:href=&quot;#icon-chevron-right&quot;&gt;&lt;/use&gt;&lt;/svg&gt;&lt;/span&gt;&lt;/a&gt;
                    &lt;/div&gt;
                    &lt;div class=&quot;cell cell--desk-1of3&quot;&gt;
                      &lt;nav class=&quot;menu menu--right menu--alt-a&quot;&gt;
                        &lt;a class=&quot;menu__link&quot; href=&quot;/strategy&quot;&gt;&lt;span class=&quot;push-icon&quot;&gt;Strategy and governance &lt;svg class=&quot;push-icon__icon&quot; focusable=&quot;false&quot; height=&quot;16&quot; role=&quot;presentation&quot; width=&quot;16&quot;&gt;&lt;use xmlns:xlink=&quot;http://www.w3.org/1999/xlink&quot; xlink:href=&quot;#icon-chevron-right&quot;&gt;&lt;/use&gt;&lt;/svg&gt;&lt;/span&gt;&lt;/a&gt;
                        &lt;a class=&quot;menu__link&quot; href=&quot;/leadership&quot;&gt;&lt;span class=&quot;push-icon&quot;&gt;Leadership &lt;svg class=&quot;push-icon__icon&quot; focusable=&quot;false&quot; height=&quot;16&quot; role=&quot;presentation&quot; width=&quot;16&quot;&gt;&lt;use xmlns:xlink=&quot;http://www.w3.org/1999/xlink&quot; xlink:href=&quot;#icon-chevron-right&quot;&gt;&lt;/use&gt;&lt;/svg&gt;&lt;/span&gt;&lt;/a&gt;
                        &lt;a class=&quot;menu__link&quot; href=&quot;/working-with-us&quot;&gt;&lt;span class=&quot;push-icon&quot;&gt;Working with us &lt;svg class=&quot;push-icon__icon&quot; focusable=&quot;false&quot; height=&quot;16&quot; role=&quot;presentation&quot; width=&quot;16&quot;&gt;&lt;use xmlns:xlink=&quot;http://www.w3.org/1999/xlink&quot; xlink:href=&quot;#icon-chevron-right&quot;&gt;&lt;/use&gt;&lt;/svg&gt;&lt;/span&gt;&lt;/a&gt;
                        &lt;a class=&quot;menu__link&quot; href=&quot;/news-and-resources&quot;&gt;&lt;span class=&quot;push-icon&quot;&gt;News and resources &lt;svg class=&quot;push-icon__icon&quot; focusable=&quot;false&quot; height=&quot;16&quot; role=&quot;presentation&quot; width=&quot;16&quot;&gt;&lt;use xmlns:xlink=&quot;http://www.w3.org/1999/xlink&quot; xlink:href=&quot;#icon-chevron-right&quot;&gt;&lt;/use&gt;&lt;/svg&gt;&lt;/span&gt;&lt;/a&gt;
                        &lt;a class=&quot;menu__link link--disabled&quot; href=&quot;&quot;&gt;&lt;span class=&quot;push-icon&quot;&gt;Campus and maps &lt;svg class=&quot;push-icon__icon&quot; focusable=&quot;false&quot; height=&quot;16&quot; role=&quot;presentation&quot; width=&quot;16&quot;&gt;&lt;use xmlns:xlink=&quot;http://www.w3.org/1999/xlink&quot; xlink:href=&quot;#icon-chevron-right&quot;&gt;&lt;/use&gt;&lt;/svg&gt;&lt;/span&gt;&lt;/a&gt;
                      &lt;/nav&gt;
                    &lt;/div&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
              &lt;/section&gt;
            </code>
          </pre>

        </div>
      `
    )
    (() => {
      const title = text('Title', 'Australia’s leading university');
      const content = text('Content', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur praesentium quam voluptatem qui minus, amet quidem facilis non commodi, distinctio dolore aperiam illum ut libero ad maxime dicta iure deleniti.');
      const menuLinks = array('Menu Links', ['Strategy and governance', 'Leadership', 'Working with us', 'News and resources', 'Campus and maps']);
      const versions = select('Versions', ['menu--alt-a', 'menu--alt-b', 'menu--alt-c', 'menu--alt-d'], '');
      return {
        template: `
          <section class="section">
            <div class="max section__inner section__inner--short">
              <div class="grid">
                <div class="cell cell--desk-2of3">
                  <h2>
                    ${title}
                  </h2>
                  <p>${content}</p>
                  <a class="btn btn--lead" href="#"><span class="push-icon">Read More<svg class="push-icon__icon" focusable="false" height="16" role="presentation" width="16"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-chevron-right"></use></svg></span></a>
                </div>
                <div class="cell cell--desk-1of3">
                  <nav class="menu menu--right ${versions}">
                    ${menuLinks.map(item => `<a class="menu__link" href="#"><span class="push-icon">${item}<svg class="push-icon__icon" focusable="false" height="16" role="presentation" width="16"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-chevron-right"></use></svg></span></a>`  ).join('')}
                  </nav>
                </div>
              </div>
            </div>
          </section>
        `
      }
    }
  ));