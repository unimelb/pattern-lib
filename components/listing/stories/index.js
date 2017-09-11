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

import ListImage from './listitem-image.vue';


storiesOf('Listing', module)
  .addDecorator(story => {
    const Story = story();
    return {
      components: { Story },
      template: `
        <main>
          <section class="section">
            <div class="section__inner">
              <Story/>
            </div>
          </section>
        </main>`,
    };
  })
  .addDecorator(withKnobs)
  .add(
    'List - with image',
    withNotes(
      `
        <div>
          <style>pre {  background-color: #444;  color: #eee; } </style>
          <h2>Listing</h2>
          <pre>
            <code>

            </code>
          </pre>

        </div>
      `
    )
    (() => {
      const title = text('Title', 'About Us');
      return {
        components: { ListImage},
        template: `
          <div class="listing listing--three">
            <ListImage />
            <ListImage />
            <ListImage />
            <ListImage />
            <ListImage />
            <ListImage />
            <ListImage />
            <ListImage />
            <ListImage />
            <ListImage />

          </div>
        `
      }
    }
  ));