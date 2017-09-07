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


storiesOf('Page Header', module)
  .addDecorator(withKnobs)
  .add(
    'Level 1',
    withNotes(
      `
        <div>
          <style>pre {  background-color: #444;  color: #eee; } </style>
          <h2>Page header Level 1</h2>
          <pre>
            <code>

            </code>
          </pre>

        </div>
      `
    )
    (() => {
      // const title = text('Title', 'Example Title');
      // const paragraph = text('Paragraph text', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, cumque, esse incidunt consequatur, accusantium odit blanditiis ipsam dolorem repellendus ut corporis earum, illum a maiores optio voluptate dicta.');
      // const small = boolean('Smaller width', false);
      return {
        template: `
          <header class="banner banner--l1">
            <div class="banner__inner max">
              <a class="logo" href="https://www.unimelb.edu.au"><img alt="The University of Melbourne homepage" class="banner__logo" height="117" src="http://about-us-unimelb.netlify.com/images/logo-unhoused.svg" width="117"></a>
              <h1 class="banner__heading">
                About us
              </h1>
            </div>
            <div class="banner__img banner__aperture" style="background-image: url(https://placeimg.com/990/530/arch);"></div>
          </header>
        `
      }
    }
  ));