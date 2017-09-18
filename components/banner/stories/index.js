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


storiesOf('Banner', module)
  .addDecorator(withKnobs)
  .add(
    'Level 1',
    withNotes(
      `
        <div>
          <style>pre {  background-color: #444;  color: #eee; } </style>
          <h2>Banner Level 1</h2>
          <pre>
            <code>
              &lt;header class=&quot;banner banner--l1&quot;&gt;
                &lt;div class=&quot;banner__inner max&quot;&gt;
                  &lt;a class=&quot;logo&quot; href=&quot;https://www.unimelb.edu.au&quot;&gt;&lt;img alt=&quot;The University of Melbourne homepage&quot; class=&quot;banner__logo&quot; height=&quot;117&quot; src=&quot;http://about-us-unimelb.netlify.com/images/logo-unhoused.svg&quot; width=&quot;117&quot;&gt;&lt;/a&gt;
                  &lt;h1 class=&quot;banner__heading&quot;&gt;
                    &lt;!-- Header Title --&gt;
                  &lt;/h1&gt;
                &lt;/div&gt;
                &lt;div class=&quot;banner__img banner__aperture&quot; style=&quot;background-image: url(https://placeimg.com/990/530/arch);&quot;&gt;&lt;/div&gt;
              &lt;/header&gt;
            </code>
          </pre>

        </div>
      `
    )
    (() => {
      const title = text('Title', 'About Us');
      return {
        template: `
          <header class="banner banner--l1">
            <div class="banner__inner max">
              <a class="logo" href="https://www.unimelb.edu.au"><img alt="The University of Melbourne homepage" class="banner__logo" height="117" src="https://d2h9b02ioca40d.cloudfront.net/v7.0/assets/logo-4d389.svg" width="117"></a>
              <h1 class="banner__heading">
                ${title}
              </h1>
            </div>
            <div class="banner__img banner__aperture" style="background-image: url(https://placeimg.com/990/530/arch);"></div>
          </header>
        `
      }
    }
  ))
  .add(
    'Level 2',
    withNotes(
      `
        <div>
          <style>pre {  background-color: #444;  color: #eee; } </style>
          <h2>Banner Level 2</h2>
          <pre>
            <code>
              &lt;header class=&quot;banner banner--l2&quot;&gt;
                &lt;div class=&quot;banner__inner max&quot;&gt;
                  &lt;a class=&quot;logo&quot; href=&quot;https://www.unimelb.edu.au&quot;&gt;&lt;img alt=&quot;The University of Melbourne homepage&quot; class=&quot;banner__logo&quot; height=&quot;117&quot; src=&quot;http://about-us-unimelb.netlify.com/images/logo-unhoused.svg&quot; width=&quot;117&quot;&gt;&lt;/a&gt;
                  &lt;h1 class=&quot;banner__heading&quot;&gt;
                    &lt;!-- Header Title --&gt;
                  &lt;/h1&gt;
                &lt;/div&gt;
                &lt;div class=&quot;banner__img banner__aperture&quot; style=&quot;background-image: url(https://placeimg.com/990/530/arch);&quot;&gt;&lt;/div&gt;
              &lt;/header&gt;
            </code>
          </pre>

        </div>
      `
    )
    (() => {
      const title = text('Title', 'About Us');
      return {
        template: `
          <header class="banner banner--l2">
            <div class="banner__inner max">
              <a class="logo" href="https://www.unimelb.edu.au"><img alt="The University of Melbourne homepage" class="banner__logo" height="117" src="http://about-us-unimelb.netlify.com/images/logo-unhoused.svg" width="117"></a>
              <h1 class="banner__heading">
                ${title}
              </h1>
            </div>
            <div class="banner__img banner__aperture" style="background-image: url(https://placeimg.com/990/530/arch);"></div>
          </header>
        `
      }
    }
  ))
  .add(
    'Level 3',
    withNotes(
      `
        <div>
          <style>pre {  background-color: #444;  color: #eee; } </style>
          <h2>Banner Level 3</h2>
          <pre>
            <code>
              &lt;header class=&quot;banner banner--l3&quot;&gt;
                &lt;div class=&quot;banner__shape&quot;&gt;&lt;/div&gt;
                &lt;div class=&quot;banner__inner max&quot;&gt;
                  &lt;a class=&quot;logo&quot; href=&quot;https://www.unimelb.edu.au&quot;&gt;&lt;img alt=&quot;The University of Melbourne homepage&quot; class=&quot;banner__logo&quot; height=&quot;117&quot; src=&quot;http://about-us-unimelb.netlify.com/images/logo-unhoused.svg&quot; width=&quot;117&quot;&gt;&lt;/a&gt;
                &lt;/div&gt;
              &lt;/header&gt;
            </code>
          </pre>

        </div>
      `
    )
    (() => {
      const title = text('Title', 'About Us');
      return {
        template: `
        <header class="banner banner--l3">
          <div class="banner__shape"></div>
          <div class="banner__inner max">
            <a class="logo" href="https://www.unimelb.edu.au"><img alt="The University of Melbourne homepage" class="banner__logo" height="117" src="http://about-us-unimelb.netlify.com/images/logo-unhoused.svg" width="117"></a>
          </div>
        </header>
        `
      }
    }
  ));
